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
    const culprit = randomFrom(data.suspects);
    const motive = randomFrom(data.motives);
    const hidingSpot = randomFrom(data.hidingSpots);
    const caseNumber = Math.floor(1000 + Math.random() * 9000);

    return {
      version: data.caseVersion,
      caseNumber,
      culpritId: culprit.id,
      motiveId: motive.id,
      hidingSpotId: hidingSpot.id,
      codedWord: shiftWord(hidingSpot.codeWord),
      createdAt: Date.now()
    };
  }

  function ensureCase(data) {
    const existing = readJson(data.caseKey, null);
    if (existing && existing.version === data.caseVersion) {
      return existing;
    }

    const nextCase = createCase(data);
    writeJson(data.caseKey, nextCase);
    return nextCase;
  }

  function resetCase(data) {
    const nextCase = createCase(data);
    writeJson(data.caseKey, nextCase);
    writeJson(data.progressKey, { started: true, completed: [] });
    return nextCase;
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

  window.BruCaseRuntime = {
    createCase,
    ensureCase,
    resetCase,
    readProgress,
    writeProgress,
    markCompleted,
    normalizeBasePath,
    findById
  };
})();
