(function () {
  function readJson(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
    } catch {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function randomFrom(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function normalizeBasePath(basePath) {
    if (!basePath) return "/";
    return basePath.endsWith("/") ? basePath : `${basePath}/`;
  }

  function shiftWord(word) {
    return word
      .toUpperCase()
      .split("")
      .map((char) => {
        if (char < "A" || char > "Z") return char;
        if (char === "Z") return "A";
        return String.fromCharCode(char.charCodeAt(0) + 1);
      })
      .join("");
  }

  function createCase(data) {
    const caseNumber = Math.floor(1000 + Math.random() * 9000);
    const difficulty = data.difficulties?.find((item) => item.id === data.selectedDifficulty) || data.difficulties?.[2];
    const advancedPool =
      difficulty?.level >= 4
        ? (data.advancedCases || []).filter((item) => !item.minLevel || difficulty.level >= item.minLevel)
        : [];

    if (advancedPool.length) {
      const selectedCase = randomFrom(advancedPool);
      const hidingSpot = findById(data.hidingSpots, selectedCase.hidingSpotId);

      return {
        version: data.caseVersion,
        caseNumber,
        difficultyId: difficulty?.id || "sporhund",
        culpritId: selectedCase.culpritId,
        motiveId: selectedCase.motiveId,
        hidingSpotId: selectedCase.hidingSpotId,
        codedWord: shiftWord(hidingSpot.codeWord),
        advancedCaseId: selectedCase.id,
        createdAt: Date.now()
      };
    }

    const culprit = randomFrom(data.suspects);
    const motive = randomFrom(data.motives);
    const hidingSpot = randomFrom(data.hidingSpots);

    return {
      version: data.caseVersion,
      caseNumber,
      difficultyId: difficulty?.id || "sporhund",
      culpritId: culprit.id,
      motiveId: motive.id,
      hidingSpotId: hidingSpot.id,
      codedWord: shiftWord(hidingSpot.codeWord),
      createdAt: Date.now()
    };
  }

  function ensureCase(data) {
    const existing = readJson(data.caseKey, null);
    const selectedDifficulty = data.difficulties?.find((item) => item.id === data.selectedDifficulty);
    const selectedDifficultyId = selectedDifficulty?.id;

    if (
      existing &&
      existing.version === data.caseVersion &&
      (!selectedDifficultyId || existing.difficultyId === selectedDifficultyId)
    ) {
      return existing;
    }

    const nextCase = createCase(data);
    writeJson(data.caseKey, nextCase);
    if (data.progressKey) {
      writeJson(data.progressKey, { started: true, completed: [] });
    }
    return nextCase;
  }

  function resetCase(data) {
    const nextCase = createCase(data);
    writeJson(data.caseKey, nextCase);
    writeJson(data.progressKey, { started: true, completed: [] });
    return nextCase;
  }

  function resetAll(data) {
    localStorage.removeItem(data.caseKey);
    localStorage.removeItem(data.progressKey);
    if (data.settingsKey) {
      localStorage.removeItem(data.settingsKey);
    }
  }

  function readProgress(progressKey) {
    return readJson(progressKey, { started: false, completed: [] });
  }

  function writeProgress(progressKey, progress) {
    writeJson(progressKey, progress);
  }

  function markCompleted(progressKey, taskId) {
    const progress = readProgress(progressKey);
    progress.started = true;
    progress.completed = Array.from(new Set([...(progress.completed || []), taskId])).sort((a, b) => a - b);
    writeProgress(progressKey, progress);
    return progress;
  }

  function findById(items, id) {
    return items.find((item) => item.id === id);
  }

  function readSettings(settingsKey, fallback) {
    return readJson(settingsKey, fallback);
  }

  function writeSettings(settingsKey, value) {
    writeJson(settingsKey, value);
  }

  function readStats(statsKey) {
    return readJson(statsKey, { bestTimes: {} });
  }

  function writeStats(statsKey, value) {
    writeJson(statsKey, value);
  }

  function elapsedMs(caseFile) {
    return Math.max(0, Date.now() - (caseFile?.createdAt || Date.now()));
  }

  function formatDuration(ms) {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function recordBestTime(statsKey, difficultyId, ms) {
    const stats = readStats(statsKey);
    const current = stats.bestTimes?.[difficultyId];

    if (!current || ms < current) {
      stats.bestTimes = { ...(stats.bestTimes || {}), [difficultyId]: ms };
      writeStats(statsKey, stats);
      return { isRecord: true, best: ms };
    }

    return { isRecord: false, best: current };
  }

  window.BruCaseRuntime = {
    createCase,
    ensureCase,
    resetCase,
    resetAll,
    readProgress,
    writeProgress,
    readSettings,
    writeSettings,
    readStats,
    writeStats,
    elapsedMs,
    formatDuration,
    recordBestTime,
    markCompleted,
    normalizeBasePath,
    findById,
    shuffle,
    shiftWord
  };
})();
