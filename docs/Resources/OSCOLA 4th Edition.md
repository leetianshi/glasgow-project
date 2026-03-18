<style>
  /* 整个表单卡片 */
  .citation-form {
    max-width: 760px;
    margin: 24px 0;
    padding: 24px 24px;
    background: #fbfcfd;
    border: 1px solid #d6dee6;
    border-radius: 14px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  }

  /* 每一行：左侧标签 + 右侧输入控件 */
  .form-row {
    display: grid;
    grid-template-columns: 180px 1fr;
    column-gap: 0px;
    align-items: center;
    margin-bottom: -6px;
  }

  /* 标签 */
  .form-row label {
    margin: 0;
    text-align: right;
    padding-right: 8px;
    color: #1f2d3d;
    font-weight: 400;
  }

  /* 输入框和下拉框 */
  .form-row input {
    width: 380px;
    height: 30px;
    padding: 8px 10px;
    border: 1px solid #003660;
    border-radius: 8px;
    background: #f7f9fb;
    color: #1f2d3d;
    font-size: 15px;
    box-sizing: border-box;
  }

  .form-row select {
    width: 380px;
    height: 30px;
    padding: 0 36px 0 10px;
    box-sizing: border-box;
    border: 1px solid #003660;
    border-radius: 8px;
    background: #f7f9fb;
    color: #1f2d3d;
    font-size: 15px;
}

  /* 输入框和下拉框 hover / focus */
  .form-row input:hover,
  .form-row select:hover {
    background: #eef3f7;
  }

  .form-row input:focus,
  .form-row select:focus {
    outline: none;
    border-color: #003660;
    box-shadow: 0 0 0 3px rgba(0, 54, 96, 0.12);
    background: #ffffff;
  }

  /* 占位符 */
  .form-row input::placeholder {
    color: #6f7f8f;
  }

  /* 分隔线 */
  .form-divider {
    margin: 0px 0 16px;
    border-top: 1px solid #d6dee6;
  }

  /* 按钮区域 */
  .form-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  /* 通用按钮 */
  .form-actions button {
    min-width: 110px;
    height: 42px;
    padding: 0 16px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
  }

  /* Generate 按钮 */
  .generate-btn {
    background: #003660;
    color: #ffffff;
    border: 1px solid #003660;
    height: 40px;
    width: 100px;
    border-radius: 12px;
  }

  .generate-btn:hover {
    background: #00294a;
    border-color: #00294a;
  }

  /* Clear 按钮 */
  .clear-btn {
    background: #eef3f7;
    color: #1f2d3d;
    border: 1px solid #c7d3df;
    height: 40px;
    width: 100px;
    border-radius: 12px;
  }

  .clear-btn:hover {
    background: #dde7ef;
    border-color: #aebfce;
  }

  /* 输出标题 */
  .output-label {
    margin-bottom: 6px;
    color: #1f2d3d;
    font-weight: 700;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  /* 输出框 */
  .output-box {
    width: 100%;
    min-height: 40px;
    padding: 12px 14px;
    border: 1px solid #d3dce5;
    border-radius: 10px;
    background: #eef3f7;
    color: #1f2d3d;
    line-height: 1.6;
    box-sizing: border-box;
  }

  /* 强调色 */
  .required-star {
    color: #B00020;
    font-weight: 1000;
  }

  .label-author {
    color: #6E2A33;
    font-weight: 700;
  }

  /* 小屏适配 */
  @media (max-width: 700px) {
    .form-row {
      grid-template-columns: 1fr;
      row-gap: 6px;
    }

    .form-row label {
      text-align: left;
      padding-right: 0;
    }
  }
</style>

# OSCOLA 4th Edition
## 1. Frequently Referenced Items
### 1.1 Parts of Statutes
| Full Form | Abbreviation |
| ---- | ---- |
| part/parts | <u> pt/pts </u> |
| section/sections | <u> s/ss </u> |
| subsection/subsections | <u> sub-s/sub-ss </u> |
| paragraph/paragraphs | <u> para/paras </u> |
| subparagraph/subparagraphs | <u> subpara/subparas </u> |
| schedule/schedules | <u> sch/schs </u> |

> *Example 1*: Consumer Protection Act 1987, s 2. <br>
> *Example 2*: Human Rights Act 1998, s 15(1)(b). <br>
> *Example 3*: Criminal Attempts Act 1981, ss 1(1) and 4(3). <br>
> *Example 4*: Sexual Offences Act 2003, s 1(1)(c).

### 1.2 EU Cases
case number<span style="color:#B00020;">**|**</span> *case name*<span style="color:#B00020;">**|**</span> EU:C case number,<span style="color:#B00020;">**|**</span> report number<span style="color:#B00020;">**|**</span> <u>[exact paragraph]</u>.
> *Example 1*: Case C-176/03 *Commission v Council* EU:C:2005:542, [2005] ECR I-7879. <br>
> *Example 2*: Case C-542/09 *Commission v the Netherlands* EU:C:2012:346.

<div class="citation-form">
  <div class="form-row">
    <label for="euCaseNumber"><span class="required-star">*</span>case number:</label>
    <input id="euCaseNumber" type="text" placeholder="e.g. Case C-176/03"><br>
  </div>

  <div class="form-row">
    <label for="euCaseName"><span class="required-star">*</span>case name:</label>
    <input id="euCaseName" type="text" placeholder="e.g. Commission v Council"><br>
  </div>

  <div class="form-row">
    <label for="euEucNumber"><span class="required-star">*</span>EU:C case number:</label>
    <input id="euEucNumber" type="text" placeholder="e.g. EU:C:2005:542"><br>
  </div>

  <div class="form-row">
    <label for="euReportNumber">report number:</label>
    <input id="euReportNumber" type="text" placeholder="e.g. [2005] ECR I-7879"><br>
  </div>

  <div class="form-row">
    <label for="euParagraph">exact paragraph:</label>
    <input id="euParagraph" type="text" placeholder="e.g. 12"><br>
  </div>

  <div class="form-actions">
    <button id="euGenerateBtn" type="button" class="generate-btn">Generate</button>
    <button id="euClearBtn" type="button" class="clear-btn">Clear</button>
  </div>

  <div class="output-label">Footnote:</div>
  <div id="euOutput" class="output-box"></div>
</div>

### 1.3 Books
#### 1.3.1 Authored Books
author,<span style="color:#B00020;">**|**</span> *title*<span style="color:#B00020;">**|**</span> (additional information,<span style="color:#B00020;">**|**</span> edition,<span style="color:#B00020;">**|**</span> publisher<span style="color:#B00020;">**|**</span> year)<span style="color:#B00020;">**|**</span> <u>exact page</u>.
> *Example 1*: Timothy Endicott, *Administrative Law* (OUP 2009). <br>
> *Example 2*: Gareth Jones, *Goff and Jones: The Law of Restitution* (1st supp, 7th edn, Sweet & Maxwell 2009).

<!--
  下面开始写 HTML 表单
  MkDocs 的 Markdown 页面里可以直接嵌入 HTML
  这样比较适合做简单的交互式工具
-->
<div class="citation-form">
  <div class="form-row">
    <label for="authorCount">number of authors:</label>
    <select id="authorCount">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4 or more</option>
    </select><br>
  </div>
  
  <!-- 作者输入框 -->
  <div class="form-row" id="author1Row">
    <label for="author1"><span class="required-star">*</span>author 1:</label>
    <input id="author1" type="text"><br>
  </div>

  <div class="form-row" id="author2Row">
    <label for="author2"><span class="required-star">*</span>author 2:</label>
    <input id="author2" type="text"><br>
  </div>

  <div class="form-row" id="author3Row">
    <label for="author3"><span class="required-star">*</span>author 3:</label>
    <input id="author3" type="text"><br>
  </div>

  <div class="form-divider"></div>

  <!-- 书名输入框 -->
  <div class="form-row">
    <label for="title"><span class="required-star">*</span>title:</label>
    <input id="title" type="text" placeholder="e.g. Goff and Jones: The Law of Restitution"><br>
  </div>

  <!-- 信息输入框 -->
  <div class="form-row">
    <label for="info">additional information:</label>
    <input id="info" type="text" placeholder="e.g. 1st supp"><br>
  </div>

  <!-- 版次输入框 -->
  <div class="form-row">
    <label for="edition">edition:</label>
    <input id="edition" type="text" placeholder="e.g. 7th edn"><br>
  </div>

  <!-- 出版社输入框 -->
  <div class="form-row">
    <label for="publisher"><span class="required-star">*</span>publisher:</label>
    <input id="publisher" type="text" placeholder="e.g. Sweet & Maxwell"><br>
  </div>

  <!-- 出版年份输入框 -->
  <div class="form-row">
    <label for="year"><span class="required-star">*</span>year:</label>
    <input id="year" type="text" placeholder="e.g. 2009"><br>
  </div>

  <!-- 具体页码输入框 -->
  <div class="form-row">
    <label for="page">exact page:</label>
    <input id="page" type="text" placeholder="e.g. 12"><br>
  </div>

  <div class="form-actions">
    <button id="generateBtn" type="button" class="generate-btn">Generate</button>
    <button id="clearBtn" type="button" class="clear-btn">Clear</button>
  </div>

  <!-- 输出标题 -->
  <div class="output-label">Footnote:</div>
  <div id="output" class="output-box"></div>
</div>

#### 1.3.2 Contributions to Edited Books
author,<span style="color:#B00020;">**|**</span> ‘title’<span style="color:#B00020;">**|**</span> in editor (ed),<span style="color:#B00020;">**|**</span> *book title*<span style="color:#B00020;">**|**</span> (additional information,<span style="color:#B00020;">**|**</span> publisher<span style="color:#B00020;">**|**</span> year)<span style="color:#B00020;">**|**</span> <u>exact page</u>.
> *Example 1*: Justine Pila, ‘The Value of Authorship in the Digital Environment’ in William H Dutton and Paul W Jeffreys (eds), *World Wide Research:* *Reshaping the Sciences and Humanities in the Century of Information* (MIT Press 2010). <br>
> *Example 2*: John Cartwright, ‘The Fiction of the “Reasonable Man”’ in AG Castermans and others (eds), *Ex Libris Hans Nieuwenhuis* (Kluwer 2009).

<div class="citation-form">
  <div class="form-row">
    <label for="contribAuthorCount">number of authors:</label>
    <select id="contribAuthorCount">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4 or more</option>
    </select><br>
  </div>

  <!-- 作者输入框 -->
  <div class="form-row" id="contribAuthor1Row">
    <label for="contribAuthor1"><span class="required-star">*</span>author 1:</label>
    <input id="contribAuthor1" type="text"><br>
  </div>

  <div class="form-row" id="contribAuthor2Row">
    <label for="contribAuthor2"><span class="required-star">*</span>author 2:</label>
    <input id="contribAuthor2" type="text"><br>
  </div>

  <div class="form-row" id="contribAuthor3Row">
    <label for="contribAuthor3"><span class="required-star">*</span>author 3:</label>
    <input id="contribAuthor3" type="text"><br>
  </div>

  <div class="form-divider"></div>

  <!-- 文章名输入框 -->
  <div class="form-row">
    <label for="contribTitle"><span class="required-star">*</span>title:</label>
    <input id="contribTitle" type="text" placeholder="e.g. The Value of Authorship in the Digital Environment"><br>
  </div>

  <div class="form-divider"></div>

  <!-- 编者输入框 -->
  <div class="form-row">
    <label for="contribEditorCount">number of editors:</label>
    <select id="contribEditorCount">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4 or more</option>
    </select><br>
  </div>

  <div class="form-row" id="contribEditor1Row">
    <label for="contribEditor1"><span class="required-star">*</span>editor 1:</label>
    <input id="contribEditor1" type="text"><br>
  </div>

  <div class="form-row" id="contribEditor2Row">
    <label for="contribEditor2"><span class="required-star">*</span>editor 2:</label>
    <input id="contribEditor2" type="text"><br>
  </div>

  <div class="form-row" id="contribEditor3Row">
    <label for="contribEditor3"><span class="required-star">*</span>editor 3:</label>
    <input id="contribEditor3" type="text"><br>
  </div>

  <div class="form-divider"></div>

  <!-- 书名输入框 -->
  <div class="form-row">
    <label for="contribBtitle"><span class="required-star">*</span>book title:</label>
    <input id="contribBtitle" type="text" placeholder="e.g. World Wide Research: Reshaping the Sciences and Humanities in the Century of Information"><br>
  </div>

  <!-- 信息输入框 -->
  <div class="form-row">
    <label for="contribInfo">additional information:</label>
    <input id="contribInfo" type="text" placeholder="e.g. 1st supp"><br>
  </div>

  <!-- 出版社输入框 -->
  <div class="form-row">
    <label for="contribPublisher"><span style="color:#B00020;">*</span>publisher:</label>
    <input id="contribPublisher" type="text" placeholder="e.g. MIT Press"><br>
  </div>

  <!-- 出版年份输入框 -->
  <div class="form-row">
    <label for="contribYear"><span class="required-star">*</span>year:</label>
    <input id="contribYear" type="text" placeholder="e.g. 2010"><br>
  </div>

  <!-- 具体页码输入框 -->
  <div class="form-row">
    <label for="contribPage">exact page:</label>
    <input id="contribPage" type="text" placeholder="e.g. 12"><br>
  </div>

  <div class="form-actions">
    <button id="contribGenerateBtn" type="button" class="generate-btn">Generate</button>
    <button id="contribClearBtn" type="button" class="clear-btn">Clear</button>
  </div>

  <!-- 输出标题 -->
  <div class="output-label">Footnote:</div>
  <div id="contribOutput" class="output-box"></div>
</div>

#### 1.3.3 Abbreviations
| Full Form | Abbreviation |
| ---- | ---- |
| part/parts | <u> pt/pts </u> |
| chapters/chapters| <u> ch/chs </u> |
| paragraph/paragraphs | <u> para/paras </u> |
| page/pages | <u> stand alone, without p/pp </u> |

### 1.4 Journal Articles
author,<span style="color:#B00020;">**|**</span> ‘title’<span style="color:#B00020;">**|**</span> (year)<span style="color:#B00020;">**|**</span> volume<span style="color:#B00020;">**|**</span> journal name or abbreviation<span style="color:#B00020;">**|**</span> first page of article,<span style="color:#B00020;">**|**</span> <u>exact page</u>. <br>
[OR] <br>
author,<span style="color:#B00020;">**|**</span> ‘title’<span style="color:#B00020;">**|**</span> [year]<span style="color:#B00020;">**|**</span> journal name or abbreviation<span style="color:#B00020;">**|**</span> first page of article,<span style="color:#B00020;">**|**</span> <u>exact page</u>.
> *Example 1*: Paul Craig, ‘Theory, “Pure Theory” and Values in Public Law’ [2005] PL 440. <br>
> *Example 2*: Alison L Young, ‘In Defence of Due Deference’ (2009) 72 MLR 554.

<div class="citation-form">
  <div class="form-row">
    <label for="journalAuthorCount">number of authors:</label>
    <select id="journalAuthorCount">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4 or more</option>
    </select><br>
  </div>

  <div class="form-row" id="journalAuthor1Row">
    <label for="journalAuthor1"><span class="required-star">*</span>author 1:</label>
    <input id="journalAuthor1" type="text"><br>
  </div>

  <div class="form-row" id="journalAuthor2Row">
    <label for="journalAuthor2"><span class="required-star">*</span>author 2:</label>
    <input id="journalAuthor2" type="text"><br>
  </div>

  <div class="form-row" id="journalAuthor3Row">
    <label for="journalAuthor3"><span class="required-star">*</span>author 3:</label>
    <input id="journalAuthor3" type="text"><br>
  </div>

  <div class="form-divider"></div>

  <div class="form-row">
    <label for="journalTitle"><span class="required-star">*</span>title:</label>
    <input id="journalTitle" type="text" placeholder="e.g. In Defence of Due Deference"><br>
  </div>

  <div class="form-row">
    <label for="journalYear"><span class="required-star">*</span>year:</label>
    <input id="journalYear" type="text" placeholder="e.g. 2009"><br>
  </div>

  <div class="form-row">
    <label for="journalVolume">volume:</label>
    <input id="journalVolume" type="text" placeholder="e.g. 72"><br>
  </div>

  <div class="form-row">
    <label for="journalName"><span class="required-star">*</span>journal name or abbreviation:</label>
    <input id="journalName" type="text" placeholder="e.g. MLR"><br>
  </div>

  <div class="form-row">
    <label for="journalFirstPage"><span class="required-star">*</span>first page of article:</label>
    <input id="journalFirstPage" type="text" placeholder="e.g. 554"><br>
  </div>

  <div class="form-row">
    <label for="journalExactPage">exact page:</label>
    <input id="journalExactPage" type="text" placeholder="e.g. 12"><br>
  </div>

  <div class="form-actions">
    <button id="journalGenerateBtn" type="button" class="generate-btn">Generate</button>
    <button id="journalClearBtn" type="button" class="clear-btn">Clear</button>
  </div>

  <div class="output-label">Footnote:</div>
  <div id="journalOutput" class="output-box"></div>
</div>

### 1.5 Working Papers
author,<span style="color:#B00020;">**|**</span> ‘title’<span style="color:#B00020;">**|**</span> (year)<span style="color:#B00020;">**|**</span> publish information,<span style="color:#B00020;">**|**</span> <u>exact page</u><span style="color:#B00020;">**|**</span> <link\><span style="color:#B00020;">**|**</span> accessed <u>accessed date</u>.
> *Example*: John M Finnis, ‘On Public Reason’ (2006) Oxford Legal Studies Research Paper 1/2007, 8 <http://ssrn.com/abstract=955815\> accessed 18 November 2009.

<div class="citation-form">
  <div class="form-row">
    <label for="workingAuthorCount">number of authors:</label>
    <select id="workingAuthorCount">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4 or more</option>
    </select><br>
  </div>

  <div class="form-row" id="workingAuthor1Row">
    <label for="workingAuthor1"><span class="required-star">*</span>author 1:</label>
    <input id="workingAuthor1" type="text"><br>
  </div>

  <div class="form-row" id="workingAuthor2Row">
    <label for="workingAuthor2"><span class="required-star">*</span>author 2:</label>
    <input id="workingAuthor2" type="text"><br>
  </div>

  <div class="form-row" id="workingAuthor3Row">
    <label for="workingAuthor3"><span class="required-star">*</span>author 3:</label>
    <input id="workingAuthor3" type="text"><br>
  </div>

  <div class="form-divider"></div>

  <div class="form-row">
    <label for="workingTitle"><span class="required-star">*</span>title:</label>
    <input id="workingTitle" type="text" placeholder="e.g. On Public Reason"><br>
  </div>

  <div class="form-row">
    <label for="workingYear"><span class="required-star">*</span>year:</label>
    <input id="workingYear" type="text" placeholder="e.g. 2006"><br>
  </div>

  <div class="form-row">
    <label for="workingPublishInfo"><span class="required-star">*</span>publish information:</label>
    <input id="workingPublishInfo" type="text" placeholder="e.g. Oxford Legal Studies Research Paper 1/2007"><br>
  </div>

  <div class="form-row">
    <label for="workingExactPage">exact page:</label>
    <input id="workingExactPage" type="text" placeholder="e.g. 8"><br>
  </div>

  <div class="form-row">
    <label for="workingLink"><span class="required-star">*</span>link:</label>
    <input id="workingLink" type="text" placeholder="e.g. http://ssrn.com/abstract=955815"><br>
  </div>

  <div class="form-row">
    <label for="workingAccessedDate"><span class="required-star">*</span>accessed date:</label>
    <input id="workingAccessedDate" type="text" placeholder="e.g. 18 November 2009"><br>
  </div>

  <div class="form-actions">
    <button id="workingGenerateBtn" type="button" class="generate-btn">Generate</button>
    <button id="workingClearBtn" type="button" class="clear-btn">Clear</button>
  </div>

  <div class="output-label">Footnote:</div>
  <div id="workingOutput" class="output-box"></div>
</div>

### 1.6 European Commission Documents
Commission,<span style="color:#B00020;">**|**</span> ‘title’<span style="color:#B00020;">**|**</span> COM number,<span style="color:#B00020;">**|**</span> <u>exact page or article</u>.
> *Example 1*: Commission, ‘Proposal for a Council Decision on the conclusion, on behalf of the European Community, of the Protocol on the Implementation of the Alpine Convention in the Field of Transport (Transport Protocol)’ COM (2008) 895 final, ch I, art 3. <br>
> *Example 2*: Commission, ‘Action Plan on consumer access to justice and the settlement of disputes in the internal market’ (Communication) COM (96) 13 final. <br>
> *Example 3*: Commission, ‘Proposal for a Council Regulation on jurisdiction and the recognition and enforcement of judgments in civil and commercial matters’ COM (99) 348 final.

<div class="citation-form">
  <div class="form-row">
    <label for="ecTitle"><span class="required-star">*</span>title:</label>
    <input id="ecTitle" type="text" placeholder="e.g. Proposal for a Council Decision on the conclusion, on behalf of the European Community, of the Protocol on the Implementation of the Alpine Convention in the Field of Transport (Transport Protocol)"><br>
  </div>

  <div class="form-row">
    <label for="ecComNumber"><span class="required-star">*</span>COM number:</label>
    <input id="ecComNumber" type="text" placeholder="e.g. COM (2008) 895 final"><br>
  </div>

  <div class="form-row">
    <label for="ecPage">exact page or article:</label>
    <input id="ecPage" type="text" placeholder="e.g. art 3"><br>
  </div>

  <div class="form-actions">
    <button id="ecGenerateBtn" type="button" class="generate-btn">Generate</button>
    <button id="ecClearBtn" type="button" class="clear-btn">Clear</button>
  </div>

  <div class="output-label">Footnote:</div>
  <div id="ecOutput" class="output-box"></div>
</div>

### 1.7 Conference Papers
author,<span style="color:#B00020;">**|**</span> ‘titile’<span style="color:#B00020;">**|**</span> (title of the conference,<span style="color:#B00020;">**|**</span> location of the conference,<span style="color:#B00020;">**|**</span> date of the conference)<span style="color:#B00020;">**|**</span> <u>exact page</u>.
> *Example*: Ben McFarlane and Donal Nolan, ‘Remedying Reliance: The Future Development of Promissory and Proprietary Estoppel in English Law’ (Obligations III conference, Brisbane, July 2006).

<div class="citation-form">
  <div class="form-row">
    <label for="confAuthorCount">number of authors:</label>
    <select id="confAuthorCount">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4 or more</option>
    </select><br>
  </div>

  <div class="form-row" id="confAuthor1Row">
    <label for="confAuthor1"><span class="required-star">*</span>author 1:</label>
    <input id="confAuthor1" type="text"><br>
  </div>

  <div class="form-row" id="confAuthor2Row">
    <label for="confAuthor2"><span class="required-star">*</span>author 2:</label>
    <input id="confAuthor2" type="text"><br>
  </div>

  <div class="form-row" id="confAuthor3Row">
    <label for="confAuthor3"><span class="required-star">*</span>author 3:</label>
    <input id="confAuthor3" type="text"><br>
  </div>

  <div class="form-divider"></div>

  <div class="form-row">
    <label for="confTitle"><span class="required-star">*</span>title:</label>
    <input id="confTitle" type="text" placeholder="e.g. Remedying Reliance: The Future Development of Promissory and Proprietary Estoppel in English Law"><br>
  </div>

  <div class="form-row">
    <label for="confConferenceTitle"><span class="required-star">*</span>title of the conference:</label>
    <input id="confConferenceTitle" type="text" placeholder="e.g. Obligations III conference"><br>
  </div>

  <div class="form-row">
    <label for="confLocation"><span class="required-star">*</span>location of the conference:</label>
    <input id="confLocation" type="text" placeholder="e.g. Brisbane"><br>
  </div>

  <div class="form-row">
    <label for="confDate"><span class="required-star">*</span>date of the conference:</label>
    <input id="confDate" type="text" placeholder="e.g. July 2006"><br>
  </div>

  <div class="form-row">
    <label for="confPage">exact page:</label>
    <input id="confPage" type="text" placeholder="e.g. 12"><br>
  </div>

  <div class="form-actions">
    <button id="confGenerateBtn" type="button" class="generate-btn">Generate</button>
    <button id="confClearBtn" type="button" class="clear-btn">Clear</button>
  </div>

  <div class="output-label">Footnote:</div>
  <div id="confOutput" class="output-box"></div>
</div>

### 1.8 Websites
author,<span style="color:#B00020;">**|**</span> ‘title’<span style="color:#B00020;">**|**</span> (*publisher*,<span style="color:#B00020;">**|**</span> date)<span style="color:#B00020;">**|**</span> <link\><span style="color:#B00020;">**|**</span> accessed <u>accessed date</u>.
> *Example*: Sarah Cole, ‘Virtual Friend Fires Employee’ (*Naked Law*, 1 May 2009) <www.nakedlaw.com/2009/05/index.html\> accessed 19 November 2009.

<div class="citation-form">
  <div class="form-row">
    <label for="webAuthorCount">number of authors:</label>
    <select id="webAuthorCount">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4 or more</option>
    </select><br>
  </div>

  <div class="form-row" id="webAuthor1Row">
    <label for="webAuthor1"><span class="required-star">*</span>author 1:</label>
    <input id="webAuthor1" type="text"><br>
  </div>

  <div class="form-row" id="webAuthor2Row">
    <label for="webAuthor2"><span class="required-star">*</span>author 2:</label>
    <input id="webAuthor2" type="text"><br>
  </div>

  <div class="form-row" id="webAuthor3Row">
    <label for="webAuthor3"><span class="required-star">*</span>author 3:</label>
    <input id="webAuthor3" type="text"><br>
  </div>

  <div class="form-divider"></div>

  <div class="form-row">
    <label for="webTitle"><span class="required-star">*</span>title:</label>
    <input id="webTitle" type="text" placeholder="e.g. Virtual Friend Fires Employee"><br>
  </div>

  <div class="form-row">
    <label for="webPublisher"><span class="required-star">*</span>publisher:</label>
    <input id="webPublisher" type="text" placeholder="e.g. Naked Law"><br>
  </div>

  <div class="form-row">
    <label for="webDate"><span class="required-star">*</span>date:</label>
    <input id="webDate" type="text" placeholder="e.g. 1 May 2009"><br>
  </div>

  <div class="form-row">
    <label for="webLink"><span class="required-star">*</span>link:</label>
    <input id="webLink" type="text" placeholder="e.g. www.nakedlaw.com/2009/05/index.html"><br>
  </div>

  <div class="form-row">
    <label for="webAccessedDate"><span class="required-star">*</span>accessed date:</label>
    <input id="webAccessedDate" type="text" placeholder="e.g. 19 November 2009"><br>
  </div>

  <div class="form-actions">
    <button id="webGenerateBtn" type="button" class="generate-btn">Generate</button>
    <button id="webClearBtn" type="button" class="clear-btn">Clear</button>
  </div>

  <div class="output-label">Footnote:</div>
  <div id="webOutput" class="output-box"></div>
</div>

### 1.9 General Principle (e.g. Report)
author,<span style="color:#B00020;">**|**</span> ‘title’<span style="color:#B00020;">**|**</span> (additional information,<span style="color:#B00020;">**|**</span> publisher<span style="color:#B00020;">**|**</span> year)<span style="color:#B00020;">**|**</span> <u>exact page</u>.

<div class="citation-form">
  <div class="form-row">
    <label for="gpAuthorCount">number of authors:</label>
    <select id="gpAuthorCount">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4 or more</option>
    </select><br>
  </div>

  <div class="form-row" id="gpAuthor1Row">
    <label for="gpAuthor1"><span class="required-star">*</span>author 1:</label>
    <input id="gpAuthor1" type="text"><br>
  </div>

  <div class="form-row" id="gpAuthor2Row">
    <label for="gpAuthor2"><span class="required-star">*</span>author 2:</label>
    <input id="gpAuthor2" type="text"><br>
  </div>

  <div class="form-row" id="gpAuthor3Row">
    <label for="gpAuthor3"><span class="required-star">*</span>author 3:</label>
    <input id="gpAuthor3" type="text"><br>
  </div>

  <div class="form-divider"></div>

  <div class="form-row">
    <label for="gpTitle"><span class="required-star">*</span>title:</label>
    <input id="gpTitle" type="text"><br>
  </div>

  <div class="form-row">
    <label for="gpInfo">additional information:</label>
    <input id="gpInfo" type="text"><br>
  </div>

  <div class="form-row">
    <label for="gpPublisher"><span class="required-star">*</span>publisher:</label>
    <input id="gpPublisher" type="text"><br>
  </div>

  <div class="form-row">
    <label for="gpYear"><span class="required-star">*</span>year:</label>
    <input id="gpYear" type="text"><br>
  </div>

  <div class="form-row">
    <label for="gpPage">exact page:</label>
    <input id="gpPage" type="text"><br>
  </div>

  <div class="form-actions">
    <button id="gpGenerateBtn" type="button" class="generate-btn">Generate</button>
    <button id="gpClearBtn" type="button" class="clear-btn">Clear</button>
  </div>

  <div class="output-label">Footnote:</div>
  <div id="gpOutput" class="output-box"></div>
</div>

## 2. Bibliographies
Items in bibliographies take the same form as all other citations in OSCOLA, with three exceptions: <br>
(1) the author’s <u>surname</u> should precede his or her <u>initial(s)</u>, with <u>no comma</u> separating them, but a comma after the final initial; <br>
(2) <u>only initials</u> should be used, and <u>not forenames</u>; and <br>
(3) the <u>titles of unattributed works</u> should be preceded by a <u>double em-dash</u>. 

Works should be arranged in <u>alphabetical order</u> of <u>author surname</u>, with <u>unattributed works</u> being listed at the beginning of the bibliography in <u>alphabetical order</u> of <u>first major word of the title</u>.

> *Example*: <br> CITATION in a footnote: Elizabeth Fisher, *Risk Regulation and Administrative Constitutionalism* (Hart Publishing 2007). <br> CITATION in a bibliography: Fisher E, *Risk Regulation and Administrative Constitutionalism* (Hart Publishing 2007)

## 3. Access
[OSCOLA (4th edn, Hart Publishing)](./OSCOLA%204th%20Edition.pdf)

[OSCOLA 2006: citing international law section](./OSCOLA%202006%20Edition.pdf) (OSCOLA (4th edn) does not cover International Law)

[OSCOLA](<https://www.law.ox.ac.uk/oscola>)

[OSCOLA FAQs](<https://www.law.ox.ac.uk/research-subject-groups/publications/oscola-faqs>)