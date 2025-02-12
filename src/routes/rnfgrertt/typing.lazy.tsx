import { calculateStats } from "@/components/rnfgrertt/calculateStats";
import { UPDATE_INTERVAL } from "@/components/rnfgrertt/constants";
import { useTypingMetricsTracker } from "@/components/rnfgrertt/hooks/useStatsTracker";
import { useTypingTest } from "@/components/rnfgrertt/hooks/useTypingTest";
import { useWpmTracker } from "@/components/rnfgrertt/hooks/useWpmTracker";
import { ResultsView } from "@/components/rnfgrertt/resultsView";
import {
  generateWords,
  getRandomText,
} from "@/components/rnfgrertt/textGenerator";
import {
  TextMeta,
  TimerOption,
  TypingStats,
} from "@/components/rnfgrertt/types";
import { TypingArea } from "@/components/rnfgrertt/typingArea";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "preact/hooks";

export const Route = createLazyFileRoute("/rnfgrertt/typing")({
  component: TypingTest,
});

const useKeyboardShortcuts = (resetCallback: () => void) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alternative: Reset on Escape key
      if (e.key === "Escape") {
        e.preventDefault();
        resetCallback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [resetCallback]);
};

export interface TestConfig {
  mode: "random" | "quotes" | "time";
  selectedTimer: TimerOption | null;
  randomLen: TimerOption | null;
  quoteLen: "short" | "med" | "long";
}

// Initial state constants
const DEFAULT_CONFIG: TestConfig = {
  mode: "quotes",
  selectedTimer: 30,
  randomLen: 30,
  quoteLen: "short",
};

const INITIAL_WORD_COUNT = {
  time: 100,
  random: 100,
};

function TypingTest() {
  // Group related state
  const [config, setConfig] = useState<TestConfig>(DEFAULT_CONFIG);
  const [currentTextMeta, setCurrentText] = useState<string | TextMeta>(
    config.mode === "time"
      ? generateWords(INITIAL_WORD_COUNT.time)
      : getRandomText(config.quoteLen),
  );

  // Helper functions
  const getCurrentText = (textMeta: string | TextMeta): string => {
    return typeof textMeta === "object" ? textMeta.text : textMeta;
  };

  const generateNewText = () => {
    if (config.mode === "quotes") {
      return getRandomText(config.quoteLen);
    }
    const wordCount =
      config.mode === "time"
        ? INITIAL_WORD_COUNT.time
        : config.randomLen?.valueOf() || INITIAL_WORD_COUNT.random;
    return generateWords(wordCount);
  };

  // Handlers
  const handleModeChange = (newMode: TestConfig["mode"]) => {
    setConfig((prev) => ({ ...prev, mode: newMode }));
  };

  const handleTimerChange = (timer: TimerOption | null) => {
    setConfig((prev) => ({ ...prev, selectedTimer: timer }));
  };

  const handleQuoteLenChange = (length: "short" | "med" | "long") => {
    setConfig((prev) => ({ ...prev, quoteLen: length }));
  };

  const handleRandomLenChange = (length: TimerOption | null) => {
    setConfig((prev) => ({ ...prev, randomLen: length }));
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    typingTest.handleInput((e.target as any)?.value);
  };

  const currentText = getCurrentText(currentTextMeta);

  const typingTest = useTypingTest(
    currentText,
    config.mode === "time" ? config.selectedTimer : null,
    () => {
      if (config.mode === "time") {
        setCurrentText((prev: string | TextMeta) =>
          typeof prev === "string"
            ? prev + generateWords(50)
            : prev.text + generateWords(50),
        );
      }
    },
  );

  const { wpmData, resetWpmData } = useWpmTracker(
    currentText,
    typingTest.startTime,
    typingTest.isFinished,
    typingTest.userInput,
  );

  const resetAll = () => {
    typingTest.resetTest();
    resetWpmData();
    setCurrentText(generateNewText());
  };

  // Effect to reset test when config changes
  useEffect(() => {
    resetAll();
  }, [config.selectedTimer, config.randomLen, config.quoteLen, config.mode]);

  // Keyboard shortcuts
  useKeyboardShortcuts(resetAll);

  const metricsHistory = useTypingMetricsTracker(
    typingTest.userInput,
    currentText,
    typingTest.startTime,
    typingTest.endTime,
    typingTest.errors,
    typingTest.isFinished,
  );

  // Calculate stats
  const stats = useMemo(() => {
    if (typingTest.startTime && typingTest.endTime) {
      return calculateStats(
        typingTest.userInput,
        currentText,
        typingTest.errors,
        typingTest.startTime,
        typingTest.endTime,
        metricsHistory,
      );
    }
    return {} as TypingStats;
  }, [typingTest, currentText, metricsHistory]);

  // Calculate chart data
  const chartData = useMemo(() => {
    return wpmData.map((point) => ({
      ...point,
      errorsPerSecond: typingTest.errors.filter(
        (error) =>
          (error.timestamp - (typingTest.startTime || 0)) / 1000 <=
            point.time &&
          (error.timestamp - (typingTest.startTime || 0)) / 1000 >
            point.time - UPDATE_INTERVAL / 1000, // Look back 1 second instead of 250ms
      ).length, // Remove the division by (UPDATE_INTERVAL / 250)
    }));
  }, [wpmData, typingTest.errors, typingTest.startTime]);

  console.log(chartData.filter((f) => f.errorsPerSecond > 0));

  return (
    <main className="h-screen relative max-h-[calc(100vh-5rem)] flex">
      {typingTest.isFinished ? (
        <ResultsView
          stats={stats}
          wpmData={chartData}
          resetTest={resetAll}
          textData={currentTextMeta}
          testConfig={config}
        />
      ) : (
        <TypingArea
          userInput={typingTest.userInput}
          handleInput={handleInput}
          timeRemaining={typingTest.timeRemaining}
          sampleText={currentText}
          selectedMode={config.mode}
          onSelectMode={handleModeChange}
          selectedTime={config.selectedTimer}
          onSelectTime={handleTimerChange}
          selectedQuoteLen={config.quoteLen}
          onSelectQuoteLen={handleQuoteLenChange}
          randomTextLen={config.randomLen}
          onSelectRandomTextLen={handleRandomLenChange}
        />
      )}
    </main>
  );
}
