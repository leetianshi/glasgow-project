// 读取输入框内容，并去掉首尾空格
function val(id) {
  return document.getElementById(id)?.value.trim() || "";
}

// 根据作者数量显示作者输入框
function updateBookAuthorFields() {
  const count = val("authorCount");

  const row1 = document.getElementById("author1Row");
  const row2 = document.getElementById("author2Row");
  const row3 = document.getElementById("author3Row");

  if (row1) row1.style.display = "grid";

  // 选择 2 或 3 位作者时显示 author 2
  if (row2) {
    row2.style.display = (count === "2" || count === "3") ? "grid" : "none";
  }

  // 选择 3 位作者时显示 author 3
  if (row3) {
    row3.style.display = (count === "3") ? "grid" : "none";
  }
}

// 根据作者数量输出作者格式
function formatBookAuthorsByCount() {
  const count = val("authorCount");
  const a1 = val("author1");
  const a2 = val("author2");
  const a3 = val("author3");

  if (count === "1") {
    return a1;
  }

  if (count === "2") {
    return a1 + " and " + a2;
  }

  if (count === "3") {
    return a1 + ", " + a2 + "," + " and " + a3;
  }

  if (count === "4") {
    return a1 + " and others";
  }

  return a1;
}

// 生成 book 的 OSCOLA 格式
// 输出格式：author, <em>title</em> (additional information, edition, publisher year) exact page.
function generateBookOSCOLA() {
  const count = val("authorCount");
  const a1 = val("author1");
  const a2 = val("author2");
  const a3 = val("author3");

  const title = val("title");
  const info = val("info");
  const edition = val("edition");
  const publisher = val("publisher");
  const year = val("year");
  const exactPage = val("page");

  const outputEl = document.getElementById("output");

  // 作者必填检查
  if (!a1) {
    if (outputEl) {
      outputEl.textContent = "Please fill in author 1.";
    }
    return;
  }

  if (count === "2" && !a2) {
    if (outputEl) {
      outputEl.textContent = "Please fill in author 2.";
    }
    return;
  }

  if (count === "3" && (!a2 || !a3)) {
    if (outputEl) {
      outputEl.textContent = "Please fill in authors 2 and 3.";
    }
    return;
  }

  // 其他必填项检查
  if (!title || !publisher || !year) {
    if (outputEl) {
      outputEl.textContent =
        "Please fill in all required fields: title, publisher, year.";
    }
    return;
  }

  const formattedAuthors = formatBookAuthorsByCount();

  let result = "";

  // 作者
  result += formattedAuthors + ", ";

  // 书名斜体
  result += "<em>" + title + "</em> ";

  // 括号内容
  const bracketParts = [];

  if (info) {
    bracketParts.push(info);
  }

  if (edition) {
    bracketParts.push(edition);
  }

  bracketParts.push(publisher + " " + year);

  result += "(" + bracketParts.join(", ") + ")";

  // exact page 可选
  if (exactPage) {
    result += " " + exactPage;
  }

  result += ".";

  if (outputEl) {
    outputEl.innerHTML = result;
  }
}

// 清空输入框和输出框
function clearBookForm() {
  const fieldIds = [
    "author1",
    "author2",
    "author3",
    "title",
    "info",
    "edition",
    "publisher",
    "year",
    "page"
  ];

  fieldIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.value = "";
    }
  });

  const countEl = document.getElementById("authorCount");
  if (countEl) {
    countEl.value = "1";
  }

  const outputEl = document.getElementById("output");
  if (outputEl) {
    outputEl.innerHTML = "";
  }

  updateBookAuthorFields();
}

// 绑定按钮和作者数量选择框事件
function bindBookGenerator() {
  const generateBtn = document.getElementById("generateBtn");
  const clearBtn = document.getElementById("clearBtn");
  const authorCount = document.getElementById("authorCount");

  if (generateBtn && !generateBtn.dataset.bound) {
    generateBtn.addEventListener("click", generateBookOSCOLA);
    generateBtn.dataset.bound = "true";
  }

  if (clearBtn && !clearBtn.dataset.bound) {
    clearBtn.addEventListener("click", clearBookForm);
    clearBtn.dataset.bound = "true";
  }

  if (authorCount && !authorCount.dataset.bound) {
    authorCount.addEventListener("change", updateBookAuthorFields);
    authorCount.dataset.bound = "true";
  }

  updateBookAuthorFields();
}

// 普通页面首次加载
document.addEventListener("DOMContentLoaded", bindBookGenerator);

// 兼容 Material for MkDocs 的页面切换
if (typeof document$ !== "undefined") {
  document$.subscribe(function () {
    bindBookGenerator();
  });
}

// =========================
// Contribution to Edited Books
// =========================

// 根据作者数量显示 author 输入框
function updateContributionAuthorFields() {
  const count = val("contribAuthorCount");

  const row1 = document.getElementById("contribAuthor1Row");
  const row2 = document.getElementById("contribAuthor2Row");
  const row3 = document.getElementById("contribAuthor3Row");

  if (row1) row1.style.display = "grid";

  if (row2) {
    row2.style.display = (count === "2" || count === "3") ? "grid" : "none";
  }

  if (row3) {
    row3.style.display = (count === "3") ? "grid" : "none";
  }
}

// 根据作者数量格式化作者
function formatContributionAuthorsByCount() {
  const count = val("contribAuthorCount");
  const a1 = val("contribAuthor1");
  const a2 = val("contribAuthor2");
  const a3 = val("contribAuthor3");

  if (count === "1") {
    return a1;
  }

  if (count === "2") {
    return a1 + " and " + a2;
  }

  if (count === "3") {
    return a1 + ", " + a2 + "," + " and " + a3;
  }

  if (count === "4") {
    return a1 + " and others";
  }

  return a1;
}

// 根据 editor 数量显示 editor 输入框
function updateContributionEditorFields() {
  const count = val("contribEditorCount");

  const row1 = document.getElementById("contribEditor1Row");
  const row2 = document.getElementById("contribEditor2Row");
  const row3 = document.getElementById("contribEditor3Row");

  if (row1) row1.style.display = "grid";

  if (row2) {
    row2.style.display = (count === "2" || count === "3") ? "grid" : "none";
  }

  if (row3) {
    row3.style.display = (count === "3") ? "grid" : "none";
  }
}

// 根据 editor 数量格式化 editor
function formatContributionEditorsByCount() {
  const count = val("contribEditorCount");
  const e1 = val("contribEditor1");
  const e2 = val("contribEditor2");
  const e3 = val("contribEditor3");

  if (count === "1") {
    return e1 + " (ed)";
  }

  if (count === "2") {
    return e1 + " and " + e2 + " (eds)";
  }

  if (count === "3") {
    return e1 + ", " + e2 + "," + " and " + e3 + " (eds)";
  }

  if (count === "4") {
    return e1 + " and others (eds)";
  }

  return e1 + " (ed)";
}

// 生成 contribution to edited book 的 OSCOLA 格式
// 输出格式：author, ‘title’ in editor(s), <em>book title</em> (additional information, publisher year) exact page.
function generateContributionOSCOLA() {
  const authorCount = val("contribAuthorCount");
  const a1 = val("contribAuthor1");
  const a2 = val("contribAuthor2");
  const a3 = val("contribAuthor3");

  const editorCount = val("contribEditorCount");
  const e1 = val("contribEditor1");
  const e2 = val("contribEditor2");
  const e3 = val("contribEditor3");

  const title = val("contribTitle");
  const btitle = val("contribBtitle");
  const info = val("contribInfo");
  const publisher = val("contribPublisher");
  const year = val("contribYear");
  const exactPage = val("contribPage");

  const outputEl = document.getElementById("contribOutput");

  // 作者检查
  if (!a1) {
    if (outputEl) outputEl.textContent = "Please fill in author 1.";
    return;
  }

  if (authorCount === "2" && !a2) {
    if (outputEl) outputEl.textContent = "Please fill in author 2.";
    return;
  }

  if (authorCount === "3" && (!a2 || !a3)) {
    if (outputEl) outputEl.textContent = "Please fill in authors 2 and 3.";
    return;
  }

  // editor 检查
  if (!e1) {
    if (outputEl) outputEl.textContent = "Please fill in editor 1.";
    return;
  }

  if (editorCount === "2" && !e2) {
    if (outputEl) outputEl.textContent = "Please fill in editor 2.";
    return;
  }

  if (editorCount === "3" && (!e2 || !e3)) {
    if (outputEl) outputEl.textContent = "Please fill in editors 2 and 3.";
    return;
  }

  // 其他必填项检查
  if (!title || !btitle || !publisher || !year) {
    if (outputEl) {
      outputEl.textContent =
        "Please fill in all required fields: title, book title, publisher, year.";
    }
    return;
  }

  const formattedAuthors = formatContributionAuthorsByCount();
  const formattedEditors = formatContributionEditorsByCount();

  let result = "";
  result += formattedAuthors + ", ";
  result += "‘" + title + "’ ";
  result += "in " + formattedEditors + ", ";
  result += "<em>" + btitle + "</em> ";

  const bracketParts = [];
  if (info) {
    bracketParts.push(info);
  }
  bracketParts.push(publisher + " " + year);

  result += "(" + bracketParts.join(", ") + ")";

  if (exactPage) {
    result += " " + exactPage;
  }

  result += ".";

  if (outputEl) {
    outputEl.innerHTML = result;
  }
}

// 清空 contribution 表单
function clearContributionForm() {
  const fieldIds = [
    "contribAuthor1",
    "contribAuthor2",
    "contribAuthor3",
    "contribEditor1",
    "contribEditor2",
    "contribEditor3",
    "contribTitle",
    "contribBtitle",
    "contribInfo",
    "contribPublisher",
    "contribYear",
    "contribPage"
  ];

  fieldIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.value = "";
    }
  });

  const authorCountEl = document.getElementById("contribAuthorCount");
  if (authorCountEl) {
    authorCountEl.value = "1";
  }

  const editorCountEl = document.getElementById("contribEditorCount");
  if (editorCountEl) {
    editorCountEl.value = "1";
  }

  const outputEl = document.getElementById("contribOutput");
  if (outputEl) {
    outputEl.innerHTML = "";
  }

  updateContributionAuthorFields();
  updateContributionEditorFields();
}

// 绑定 contribution 事件
function bindContributionGenerator() {
  const generateBtn = document.getElementById("contribGenerateBtn");
  const clearBtn = document.getElementById("contribClearBtn");
  const authorCount = document.getElementById("contribAuthorCount");
  const editorCount = document.getElementById("contribEditorCount");

  if (generateBtn && !generateBtn.dataset.bound) {
    generateBtn.addEventListener("click", generateContributionOSCOLA);
    generateBtn.dataset.bound = "true";
  }

  if (clearBtn && !clearBtn.dataset.bound) {
    clearBtn.addEventListener("click", clearContributionForm);
    clearBtn.dataset.bound = "true";
  }

  if (authorCount && !authorCount.dataset.bound) {
    authorCount.addEventListener("change", updateContributionAuthorFields);
    authorCount.dataset.bound = "true";
  }

  if (editorCount && !editorCount.dataset.bound) {
    editorCount.addEventListener("change", updateContributionEditorFields);
    editorCount.dataset.bound = "true";
  }

  updateContributionAuthorFields();
  updateContributionEditorFields();
}

document.addEventListener("DOMContentLoaded", bindContributionGenerator);

if (typeof document$ !== "undefined") {
  document$.subscribe(function () {
    bindContributionGenerator();
  });
}

// =========================
// Journal Articles
// =========================

// 根据作者数量显示 journal author 输入框
function updateJournalAuthorFields() {
  const count = val("journalAuthorCount");

  const row1 = document.getElementById("journalAuthor1Row");
  const row2 = document.getElementById("journalAuthor2Row");
  const row3 = document.getElementById("journalAuthor3Row");

  if (row1) row1.style.display = "grid";

  if (row2) {
    row2.style.display = (count === "2" || count === "3") ? "grid" : "none";
  }

  if (row3) {
    row3.style.display = (count === "3") ? "grid" : "none";
  }
}

// 根据作者数量格式化 journal 作者
function formatJournalAuthorsByCount() {
  const count = val("journalAuthorCount");
  const a1 = val("journalAuthor1");
  const a2 = val("journalAuthor2");
  const a3 = val("journalAuthor3");

  if (count === "1") {
    return a1;
  }

  if (count === "2") {
    return a1 + " and " + a2;
  }

  if (count === "3") {
    return a1 + ", " + a2 + "," + " and " + a3;
  }

  if (count === "4") {
    return a1 + " and others";
  }

  return a1;
}

// 生成 Journal Articles 的 OSCOLA 格式
function generateJournalOSCOLA() {
  const authorCount = val("journalAuthorCount");
  const a1 = val("journalAuthor1");
  const a2 = val("journalAuthor2");
  const a3 = val("journalAuthor3");

  const title = val("journalTitle");
  const year = val("journalYear");
  const volume = val("journalVolume");
  const journalName = val("journalName");
  const firstPage = val("journalFirstPage");
  const exactPage = val("journalExactPage");

  const outputEl = document.getElementById("journalOutput");

  // 作者检查
  if (!a1) {
    if (outputEl) outputEl.textContent = "Please fill in author 1.";
    return;
  }

  if (authorCount === "2" && !a2) {
    if (outputEl) outputEl.textContent = "Please fill in author 2.";
    return;
  }

  if (authorCount === "3" && (!a2 || !a3)) {
    if (outputEl) outputEl.textContent = "Please fill in authors 2 and 3.";
    return;
  }

  // 其他必填项检查
  if (!title || !year || !journalName || !firstPage) {
    if (outputEl) {
      outputEl.textContent =
        "Please fill in all required fields: title, year, journal name or abbreviation, first page of article.";
    }
    return;
  }

  const formattedAuthors = formatJournalAuthorsByCount();

  let result = "";
  result += formattedAuthors + ", ";
  result += "‘" + title + "’ ";

  // 有 volume：用 (year)
  if (volume) {
    result += "(" + year + ") ";
    result += volume + " ";
  } else {
    // 无 volume：用 [year]
    result += "[" + year + "] ";
  }

  result += journalName + " ";
  result += firstPage;

  if (exactPage) {
    result += ", " + exactPage;
  }

  result += ".";

  if (outputEl) {
    outputEl.textContent = result;
  }
}

// 清空 Journal Articles 表单
function clearJournalForm() {
  const fieldIds = [
    "journalAuthor1",
    "journalAuthor2",
    "journalAuthor3",
    "journalTitle",
    "journalYear",
    "journalVolume",
    "journalName",
    "journalFirstPage",
    "journalExactPage"
  ];

  fieldIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.value = "";
    }
  });

  const authorCountEl = document.getElementById("journalAuthorCount");
  if (authorCountEl) {
    authorCountEl.value = "1";
  }

  const outputEl = document.getElementById("journalOutput");
  if (outputEl) {
    outputEl.textContent = "";
  }

  updateJournalAuthorFields();
}

// 绑定 Journal Articles 事件
function bindJournalGenerator() {
  const generateBtn = document.getElementById("journalGenerateBtn");
  const clearBtn = document.getElementById("journalClearBtn");
  const authorCount = document.getElementById("journalAuthorCount");

  if (generateBtn && !generateBtn.dataset.bound) {
    generateBtn.addEventListener("click", generateJournalOSCOLA);
    generateBtn.dataset.bound = "true";
  }

  if (clearBtn && !clearBtn.dataset.bound) {
    clearBtn.addEventListener("click", clearJournalForm);
    clearBtn.dataset.bound = "true";
  }

  if (authorCount && !authorCount.dataset.bound) {
    authorCount.addEventListener("change", updateJournalAuthorFields);
    authorCount.dataset.bound = "true";
  }

  updateJournalAuthorFields();
}

document.addEventListener("DOMContentLoaded", bindJournalGenerator);

if (typeof document$ !== "undefined") {
  document$.subscribe(function () {
    bindJournalGenerator();
  });
}

// =========================
// Working Papers
// =========================

// 根据作者数量显示 working paper 作者输入框
function updateWorkingAuthorFields() {
  const count = val("workingAuthorCount");

  const row1 = document.getElementById("workingAuthor1Row");
  const row2 = document.getElementById("workingAuthor2Row");
  const row3 = document.getElementById("workingAuthor3Row");

  if (row1) row1.style.display = "grid";

  if (row2) {
    row2.style.display = (count === "2" || count === "3") ? "grid" : "none";
  }

  if (row3) {
    row3.style.display = (count === "3") ? "grid" : "none";
  }
}

// 根据作者数量格式化 working paper 作者
function formatWorkingAuthorsByCount() {
  const count = val("workingAuthorCount");
  const a1 = val("workingAuthor1");
  const a2 = val("workingAuthor2");
  const a3 = val("workingAuthor3");

  if (count === "1") {
    return a1;
  }

  if (count === "2") {
    return a1 + " and " + a2;
  }

  if (count === "3") {
    return a1 + ", " + a2 + "," + " and " + a3;
  }

  if (count === "4") {
    return a1 + " and others";
  }

  return a1;
}

// 生成 Working Papers 的 OSCOLA 格式
// 输出：author, ‘title’ (year) publish information, exact page <link> accessed accessed date.
function generateWorkingOSCOLA() {
  const authorCount = val("workingAuthorCount");
  const a1 = val("workingAuthor1");
  const a2 = val("workingAuthor2");
  const a3 = val("workingAuthor3");

  const title = val("workingTitle");
  const year = val("workingYear");
  const publishInfo = val("workingPublishInfo");
  const exactPage = val("workingExactPage");
  const link = val("workingLink");
  const accessedDate = val("workingAccessedDate");

  const outputEl = document.getElementById("workingOutput");

  // 作者检查
  if (!a1) {
    if (outputEl) outputEl.textContent = "Please fill in author 1.";
    return;
  }

  if (authorCount === "2" && !a2) {
    if (outputEl) outputEl.textContent = "Please fill in author 2.";
    return;
  }

  if (authorCount === "3" && (!a2 || !a3)) {
    if (outputEl) outputEl.textContent = "Please fill in authors 2 and 3.";
    return;
  }

  // 其他必填项检查
  if (!title || !year || !publishInfo || !link || !accessedDate) {
    if (outputEl) {
      outputEl.textContent =
        "Please fill in all required fields: title, year, publish information, link, accessed date.";
    }
    return;
  }

  const formattedAuthors = formatWorkingAuthorsByCount();

  let result = "";
  result += formattedAuthors + ", ";
  result += "‘" + title + "’ ";
  result += "(" + year + ") ";
  result += publishInfo;

  if (exactPage) {
    result += ", " + exactPage;
  }

  result += " <" + link + "> ";
  result += "accessed " + accessedDate + ".";

  if (outputEl) {
    outputEl.textContent = result;
  }
}

// 清空 Working Papers 表单
function clearWorkingForm() {
  const fieldIds = [
    "workingAuthor1",
    "workingAuthor2",
    "workingAuthor3",
    "workingTitle",
    "workingYear",
    "workingPublishInfo",
    "workingExactPage",
    "workingLink",
    "workingAccessedDate"
  ];

  fieldIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.value = "";
    }
  });

  const authorCountEl = document.getElementById("workingAuthorCount");
  if (authorCountEl) {
    authorCountEl.value = "1";
  }

  const outputEl = document.getElementById("workingOutput");
  if (outputEl) {
    outputEl.textContent = "";
  }

  updateWorkingAuthorFields();
}

// 绑定 Working Papers 事件
function bindWorkingGenerator() {
  const generateBtn = document.getElementById("workingGenerateBtn");
  const clearBtn = document.getElementById("workingClearBtn");
  const authorCount = document.getElementById("workingAuthorCount");

  if (generateBtn && !generateBtn.dataset.bound) {
    generateBtn.addEventListener("click", generateWorkingOSCOLA);
    generateBtn.dataset.bound = "true";
  }

  if (clearBtn && !clearBtn.dataset.bound) {
    clearBtn.addEventListener("click", clearWorkingForm);
    clearBtn.dataset.bound = "true";
  }

  if (authorCount && !authorCount.dataset.bound) {
    authorCount.addEventListener("change", updateWorkingAuthorFields);
    authorCount.dataset.bound = "true";
  }

  updateWorkingAuthorFields();
}

document.addEventListener("DOMContentLoaded", bindWorkingGenerator);

if (typeof document$ !== "undefined") {
  document$.subscribe(function () {
    bindWorkingGenerator();
  });
}

// =========================
// European Commission Documents
// =========================

// 生成 European Commission Documents 的 OSCOLA 格式
// 输出：Commission, ‘title’ COM number, exact page or article.
function generateEcOSCOLA() {
  const title = val("ecTitle");
  const comNumber = val("ecComNumber");
  const exactPage = val("ecPage");

  const outputEl = document.getElementById("ecOutput");

  // 必填项检查
  if (!title || !comNumber) {
    if (outputEl) {
      outputEl.textContent =
        "Please fill in all required fields: title, COM number.";
    }
    return;
  }

  let result = "";
  result += "Commission, ";
  result += "‘" + title + "’ ";
  result += comNumber;

  if (exactPage) {
    result += ", " + exactPage;
  }

  result += ".";

  if (outputEl) {
    outputEl.textContent = result;
  }
}

// 清空 European Commission Documents 表单
function clearEcForm() {
  const fieldIds = ["ecTitle", "ecComNumber", "ecPage"];

  fieldIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.value = "";
    }
  });

  const outputEl = document.getElementById("ecOutput");
  if (outputEl) {
    outputEl.textContent = "";
  }
}

// 绑定 European Commission Documents 事件
function bindEcGenerator() {
  const generateBtn = document.getElementById("ecGenerateBtn");
  const clearBtn = document.getElementById("ecClearBtn");

  if (generateBtn && !generateBtn.dataset.bound) {
    generateBtn.addEventListener("click", generateEcOSCOLA);
    generateBtn.dataset.bound = "true";
  }

  if (clearBtn && !clearBtn.dataset.bound) {
    clearBtn.addEventListener("click", clearEcForm);
    clearBtn.dataset.bound = "true";
  }
}

document.addEventListener("DOMContentLoaded", bindEcGenerator);

if (typeof document$ !== "undefined") {
  document$.subscribe(function () {
    bindEcGenerator();
  });
}

// =========================
// EU Cases
// =========================

// 生成 EU Cases 的 OSCOLA 格式
// 输出：case number case name EU:C case number, report number [exact paragraph].
function generateEuCaseOSCOLA() {
  const caseNumber = val("euCaseNumber");
  const caseName = val("euCaseName");
  const eucNumber = val("euEucNumber");
  const reportNumber = val("euReportNumber");
  const exactParagraph = val("euParagraph");

  const outputEl = document.getElementById("euOutput");

  // 检查必填项
  if (!caseNumber || !caseName || !eucNumber) {
    if (outputEl) {
      outputEl.textContent =
        "Please fill in all required fields: case number, case name, EU:C case number.";
    }
    return;
  }

  let result = "";
  result += caseNumber + " ";
  result += "<em>" + caseName + "</em> ";
  result += eucNumber;

  // report number 不是必填
  if (reportNumber) {
    result += ", " + reportNumber;
  }

  // exact paragraph 不是必填
  if (exactParagraph) {
    result += " [" + exactParagraph + "]";
  }

  result += ".";

  // 用 innerHTML，这样 case name 才会显示成斜体
  if (outputEl) {
    outputEl.innerHTML = result;
  }
}

// 清空 EU Cases 表单
function clearEuCaseForm() {
  const fieldIds = [
    "euCaseNumber",
    "euCaseName",
    "euEucNumber",
    "euReportNumber",
    "euParagraph"
  ];

  fieldIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.value = "";
    }
  });

  const outputEl = document.getElementById("euOutput");
  if (outputEl) {
    outputEl.innerHTML = "";
  }
}

// 绑定按钮事件
function bindEuCaseGenerator() {
  const generateBtn = document.getElementById("euGenerateBtn");
  const clearBtn = document.getElementById("euClearBtn");

  if (generateBtn && !generateBtn.dataset.bound) {
    generateBtn.addEventListener("click", generateEuCaseOSCOLA);
    generateBtn.dataset.bound = "true";
  }

  if (clearBtn && !clearBtn.dataset.bound) {
    clearBtn.addEventListener("click", clearEuCaseForm);
    clearBtn.dataset.bound = "true";
  }
}

// 普通页面首次加载
document.addEventListener("DOMContentLoaded", bindEuCaseGenerator);

// 兼容 Material for MkDocs 的页面切换
if (typeof document$ !== "undefined") {
  document$.subscribe(function () {
    bindEuCaseGenerator();
  });
}

// =========================
// Conference Papers
// =========================

// 根据作者数量显示 conference 作者输入框
function updateConferenceAuthorFields() {
  const count = val("confAuthorCount");

  const row1 = document.getElementById("confAuthor1Row");
  const row2 = document.getElementById("confAuthor2Row");
  const row3 = document.getElementById("confAuthor3Row");

  if (row1) row1.style.display = "grid";

  if (row2) {
    row2.style.display = (count === "2" || count === "3") ? "grid" : "none";
  }

  if (row3) {
    row3.style.display = (count === "3") ? "grid" : "none";
  }
}

// 根据作者数量格式化作者
function formatConferenceAuthorsByCount() {
  const count = val("confAuthorCount");
  const a1 = val("confAuthor1");
  const a2 = val("confAuthor2");
  const a3 = val("confAuthor3");

  if (count === "1") {
    return a1;
  }

  if (count === "2") {
    return a1 + " and " + a2;
  }

  if (count === "3") {
    return a1 + ", " + a2 + "," + " and " + a3;
  }

  if (count === "4") {
    return a1 + " and others";
  }

  return a1;
}

// 生成 Conference Papers 的 OSCOLA 格式
// 输出：author, ‘title’ (title of the conference, location of the conference, date of the conference) exact page.
function generateConferenceOSCOLA() {
  const authorCount = val("confAuthorCount");
  const a1 = val("confAuthor1");
  const a2 = val("confAuthor2");
  const a3 = val("confAuthor3");

  const title = val("confTitle");
  const conferenceTitle = val("confConferenceTitle");
  const location = val("confLocation");
  const conferenceDate = val("confDate");
  const exactPage = val("confPage");

  const outputEl = document.getElementById("confOutput");

  // 作者检查
  if (!a1) {
    if (outputEl) outputEl.textContent = "Please fill in author 1.";
    return;
  }

  if (authorCount === "2" && !a2) {
    if (outputEl) outputEl.textContent = "Please fill in author 2.";
    return;
  }

  if (authorCount === "3" && (!a2 || !a3)) {
    if (outputEl) outputEl.textContent = "Please fill in authors 2 and 3.";
    return;
  }

  // 其他必填项检查
  if (!title || !conferenceTitle || !location || !conferenceDate) {
    if (outputEl) {
      outputEl.textContent =
        "Please fill in all required fields: title, title of the conference, location of the conference, date of the conference.";
    }
    return;
  }

  const formattedAuthors = formatConferenceAuthorsByCount();

  let result = "";
  result += formattedAuthors + ", ";
  result += "‘" + title + "’ ";
  result += "(" + conferenceTitle + ", " + location + ", " + conferenceDate + ")";

  if (exactPage) {
    result += " " + exactPage;
  }

  result += ".";

  if (outputEl) {
    outputEl.textContent = result;
  }
}

// 清空 Conference Papers 表单
function clearConferenceForm() {
  const fieldIds = [
    "confAuthor1",
    "confAuthor2",
    "confAuthor3",
    "confTitle",
    "confConferenceTitle",
    "confLocation",
    "confDate",
    "confPage"
  ];

  fieldIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.value = "";
    }
  });

  const authorCountEl = document.getElementById("confAuthorCount");
  if (authorCountEl) {
    authorCountEl.value = "1";
  }

  const outputEl = document.getElementById("confOutput");
  if (outputEl) {
    outputEl.textContent = "";
  }

  updateConferenceAuthorFields();
}

// 绑定 Conference Papers 事件
function bindConferenceGenerator() {
  const generateBtn = document.getElementById("confGenerateBtn");
  const clearBtn = document.getElementById("confClearBtn");
  const authorCount = document.getElementById("confAuthorCount");

  if (generateBtn && !generateBtn.dataset.bound) {
    generateBtn.addEventListener("click", generateConferenceOSCOLA);
    generateBtn.dataset.bound = "true";
  }

  if (clearBtn && !clearBtn.dataset.bound) {
    clearBtn.addEventListener("click", clearConferenceForm);
    clearBtn.dataset.bound = "true";
  }

  if (authorCount && !authorCount.dataset.bound) {
    authorCount.addEventListener("change", updateConferenceAuthorFields);
    authorCount.dataset.bound = "true";
  }

  updateConferenceAuthorFields();
}

document.addEventListener("DOMContentLoaded", bindConferenceGenerator);

if (typeof document$ !== "undefined") {
  document$.subscribe(function () {
    bindConferenceGenerator();
  });
}

// =========================
// Websites
// =========================

// 根据作者数量显示 website 作者输入框
function updateWebsiteAuthorFields() {
  const count = val("webAuthorCount");

  const row1 = document.getElementById("webAuthor1Row");
  const row2 = document.getElementById("webAuthor2Row");
  const row3 = document.getElementById("webAuthor3Row");

  if (row1) row1.style.display = "grid";

  if (row2) {
    row2.style.display = (count === "2" || count === "3") ? "grid" : "none";
  }

  if (row3) {
    row3.style.display = (count === "3") ? "grid" : "none";
  }
}

// 根据作者数量格式化作者
function formatWebsiteAuthorsByCount() {
  const count = val("webAuthorCount");
  const a1 = val("webAuthor1");
  const a2 = val("webAuthor2");
  const a3 = val("webAuthor3");

  if (count === "1") {
    return a1;
  }

  if (count === "2") {
    return a1 + " and " + a2;
  }

  if (count === "3") {
    return a1 + ", " + a2 + "," + " and " + a3;
  }

  if (count === "4") {
    return a1 + " and others";
  }

  return a1;
}

// 生成 Websites 的 OSCOLA 格式
// 输出：author, ‘title’ (<em>publisher</em>, date) <link> accessed accessed date.
function generateWebsiteOSCOLA() {
  const authorCount = val("webAuthorCount");
  const a1 = val("webAuthor1");
  const a2 = val("webAuthor2");
  const a3 = val("webAuthor3");

  const title = val("webTitle");
  const publisher = val("webPublisher");
  const date = val("webDate");
  const link = val("webLink");
  const accessedDate = val("webAccessedDate");

  const outputEl = document.getElementById("webOutput");

  // 作者检查
  if (!a1) {
    if (outputEl) outputEl.textContent = "Please fill in author 1.";
    return;
  }

  if (authorCount === "2" && !a2) {
    if (outputEl) outputEl.textContent = "Please fill in author 2.";
    return;
  }

  if (authorCount === "3" && (!a2 || !a3)) {
    if (outputEl) outputEl.textContent = "Please fill in authors 2 and 3.";
    return;
  }

  // 其他必填项检查
  if (!title || !publisher || !date || !link || !accessedDate) {
    if (outputEl) {
      outputEl.textContent =
        "Please fill in all required fields: title, publisher, date, link, accessed date.";
    }
    return;
  }

  const formattedAuthors = formatWebsiteAuthorsByCount();

  let result = "";
  result += formattedAuthors + ", ";
  result += "‘" + title + "’ ";
  result += "(<em>" + publisher + "</em>, " + date + ") ";
  result += "&lt;" + link + "&gt; ";
  result += "accessed " + accessedDate + ".";

  // 用 innerHTML，这样 publisher 会显示成斜体
  if (outputEl) {
    outputEl.innerHTML = result;
  }
}

// 清空 Websites 表单
function clearWebsiteForm() {
  const fieldIds = [
    "webAuthor1",
    "webAuthor2",
    "webAuthor3",
    "webTitle",
    "webPublisher",
    "webDate",
    "webLink",
    "webAccessedDate"
  ];

  fieldIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.value = "";
    }
  });

  const authorCountEl = document.getElementById("webAuthorCount");
  if (authorCountEl) {
    authorCountEl.value = "1";
  }

  const outputEl = document.getElementById("webOutput");
  if (outputEl) {
    outputEl.innerHTML = "";
  }

  updateWebsiteAuthorFields();
}

// 绑定 Websites 事件
function bindWebsiteGenerator() {
  const generateBtn = document.getElementById("webGenerateBtn");
  const clearBtn = document.getElementById("webClearBtn");
  const authorCount = document.getElementById("webAuthorCount");

  if (generateBtn && !generateBtn.dataset.bound) {
    generateBtn.addEventListener("click", generateWebsiteOSCOLA);
    generateBtn.dataset.bound = "true";
  }

  if (clearBtn && !clearBtn.dataset.bound) {
    clearBtn.addEventListener("click", clearWebsiteForm);
    clearBtn.dataset.bound = "true";
  }

  if (authorCount && !authorCount.dataset.bound) {
    authorCount.addEventListener("change", updateWebsiteAuthorFields);
    authorCount.dataset.bound = "true";
  }

  updateWebsiteAuthorFields();
}

document.addEventListener("DOMContentLoaded", bindWebsiteGenerator);

if (typeof document$ !== "undefined") {
  document$.subscribe(function () {
    bindWebsiteGenerator();
  });
}

// =========================
// General Principle
// =========================

// 根据作者数量显示 General Principle 作者输入框
function updateGpAuthorFields() {
  const count = val("gpAuthorCount");

  const row1 = document.getElementById("gpAuthor1Row");
  const row2 = document.getElementById("gpAuthor2Row");
  const row3 = document.getElementById("gpAuthor3Row");

  if (row1) row1.style.display = "grid";

  if (row2) {
    row2.style.display = (count === "2" || count === "3") ? "grid" : "none";
  }

  if (row3) {
    row3.style.display = (count === "3") ? "grid" : "none";
  }
}

// 根据作者数量格式化作者
function formatGpAuthorsByCount() {
  const count = val("gpAuthorCount");
  const a1 = val("gpAuthor1");
  const a2 = val("gpAuthor2");
  const a3 = val("gpAuthor3");

  if (count === "1") {
    return a1;
  }

  if (count === "2") {
    return a1 + " and " + a2;
  }

  if (count === "3") {
    return a1 + ", " + a2 + "," + " and " + a3;
  }

  if (count === "4") {
    return a1 + " and others";
  }

  return a1;
}

// 生成 General Principle 的 OSCOLA 格式
// 输出：author, ‘title’ (additional information, publisher year) exact page.
function generateGpOSCOLA() {
  const authorCount = val("gpAuthorCount");
  const a1 = val("gpAuthor1");
  const a2 = val("gpAuthor2");
  const a3 = val("gpAuthor3");

  const title = val("gpTitle");
  const info = val("gpInfo");
  const publisher = val("gpPublisher");
  const year = val("gpYear");
  const exactPage = val("gpPage");

  const outputEl = document.getElementById("gpOutput");

  // 作者检查
  if (!a1) {
    if (outputEl) outputEl.textContent = "Please fill in author 1.";
    return;
  }

  if (authorCount === "2" && !a2) {
    if (outputEl) outputEl.textContent = "Please fill in author 2.";
    return;
  }

  if (authorCount === "3" && (!a2 || !a3)) {
    if (outputEl) outputEl.textContent = "Please fill in authors 2 and 3.";
    return;
  }

  // 其他必填项检查
  if (!title || !publisher || !year) {
    if (outputEl) {
      outputEl.textContent =
        "Please fill in all required fields: title, publisher, year.";
    }
    return;
  }

  const formattedAuthors = formatGpAuthorsByCount();

  let result = "";
  result += formattedAuthors + ", ";
  result += "‘" + title + "’ ";

  const bracketParts = [];

  if (info) {
    bracketParts.push(info);
  }

  bracketParts.push(publisher + " " + year);

  result += "(" + bracketParts.join(", ") + ")";

  if (exactPage) {
    result += " " + exactPage;
  }

  result += ".";

  if (outputEl) {
    outputEl.textContent = result;
  }
}

// 清空 General Principle 表单
function clearGpForm() {
  const fieldIds = [
    "gpAuthor1",
    "gpAuthor2",
    "gpAuthor3",
    "gpTitle",
    "gpInfo",
    "gpPublisher",
    "gpYear",
    "gpPage"
  ];

  fieldIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.value = "";
    }
  });

  const authorCountEl = document.getElementById("gpAuthorCount");
  if (authorCountEl) {
    authorCountEl.value = "1";
  }

  const outputEl = document.getElementById("gpOutput");
  if (outputEl) {
    outputEl.textContent = "";
  }

  updateGpAuthorFields();
}

// 绑定 General Principle 事件
function bindGpGenerator() {
  const generateBtn = document.getElementById("gpGenerateBtn");
  const clearBtn = document.getElementById("gpClearBtn");
  const authorCount = document.getElementById("gpAuthorCount");

  if (generateBtn && !generateBtn.dataset.bound) {
    generateBtn.addEventListener("click", generateGpOSCOLA);
    generateBtn.dataset.bound = "true";
  }

  if (clearBtn && !clearBtn.dataset.bound) {
    clearBtn.addEventListener("click", clearGpForm);
    clearBtn.dataset.bound = "true";
  }

  if (authorCount && !authorCount.dataset.bound) {
    authorCount.addEventListener("change", updateGpAuthorFields);
    authorCount.dataset.bound = "true";
  }

  updateGpAuthorFields();
}

document.addEventListener("DOMContentLoaded", bindGpGenerator);

if (typeof document$ !== "undefined") {
  document$.subscribe(function () {
    bindGpGenerator();
  });
}