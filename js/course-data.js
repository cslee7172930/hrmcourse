/**
 * 國立高雄師範大學 人力與知識管理研究所
 * 人力資源管理 (Human Resource Management) 核心課程資料庫
 * 嚴格遵循學程 8 大主題順序編排，整合現有 2026 Fall 課堂簡報與原生互動導讀投影片
 */

const COURSE_MODULES = [
  {
    id: "unit-1",
    unitNumber: "01",
    title: "人力資源管理概述",
    englishTitle: "Overview of Human Resource Management",
    badge: "2026 Fall 核心課堂",
    icon: "fa-chess-king",
    duration: "3 小時",
    slidesCount: 7,
    htmlFile: "人力資源管理概述_2026Fall.html",
    summary: "探討人力資本之策略價值，剖析人事管理邁向戰略人資 (SHRM) 的演進、Dave Ulrich 人資四角色模型及內外部策略契合。",
    tags: ["HRM概述", "戰略人資", "Dave Ulrich", "策略契合"],
    slides: [
      {
        id: "u1-s1",
        type: "cover",
        title: "人力資源管理概述",
        subtitle: "Overview of Human Resource Management",
        badge: "單元首頁",
        content: `
          <div class="slide-cover-layout">
            <div class="hero-chip"><i class="fas fa-graduation-cap"></i> 高師大人知所 碩士學程核心必修</div>
            <p class="lead-text">在以知識經濟為驅動的動態競爭環境中，人力資本（Human Capital）是組織創造持續競爭優勢的核心泉源。</p>
            <div class="key-objectives">
              <h4><i class="fas fa-bullseye"></i> 本單元學習核心</h4>
              <ul>
                <li>理解傳統人事管理 (Personnel) 到戰略人力資源 (Strategic HRM) 的演進歷程</li>
                <li>掌握 Dave Ulrich 人資四角色模型（戰略夥伴、變革推手、行政專家、員工後盾）</li>
                <li>學會應用垂直整合（外部策略適配）與水平整合（內部各功能一致性）框架</li>
              </ul>
            </div>
          </div>
        `,
        speakerNotes: "開場重點：引導學生思考人知所核心理念——人力資本如何與知識資產結合，推動組織價值倍增。"
      },
      {
        id: "u1-s2",
        type: "comparison",
        title: "典範轉移：傳統人事管理 vs. 戰略人資",
        subtitle: "The Paradigm Shift: From Personnel to Strategic HRM",
        badge: "核心概念對比",
        content: `
          <div class="comparison-grid">
            <div class="compare-card compare-traditional">
              <div class="card-header">
                <i class="fas fa-archive"></i>
                <h3>傳統人事管理 (Personnel)</h3>
              </div>
              <ul class="compare-list">
                <li><strong>角色定位：</strong> 反應式、事務型、後勤行政支援</li>
                <li><strong>核心任務：</strong> 遵守勞動法規、出勤排班、薪水發放與員工檔案</li>
                <li><strong>看待員工：</strong> 「營運成本 (Cost)」與管制對象</li>
                <li><strong>決策參與：</strong> 被動接受高層指令，事後配合執行行政手續</li>
                <li><strong>成功指標：</strong> 零行政失誤、預算節約、合規防禦</li>
              </ul>
            </div>
            <div class="compare-card compare-modern highlight-border">
              <div class="card-header">
                <i class="fas fa-rocket"></i>
                <h3>戰略人力資源 (Strategic HRM)</h3>
              </div>
              <ul class="compare-list">
                <li><strong>角色定位：</strong> 主動前瞻、變革引領、商業戰略夥伴</li>
                <li><strong>核心任務：</strong> 組織賦能、核心職能打造、推動業務成長</li>
                <li><strong>看待員工：</strong> 「戰略資產 (Strategic Asset)」與價值創造主體</li>
                <li><strong>決策參與：</strong> 參與最高經營決策層，共同制定並落實戰略目標</li>
                <li><strong>成功指標：</strong> 組織敏捷度、人均產值、人才留存與文化創新</li>
              </ul>
            </div>
          </div>
          <div class="takeaway-box">
            <i class="fas fa-lightbulb"></i> <strong>管理箴言：</strong>「如果 HR 說不出公司的利潤來源與商業模式，就無法成為真正的商業戰略夥伴。」
          </div>
        `,
        speakerNotes: "請同學反思：傳統人事與現代戰略人資在面對 AI 與數位轉型時，思維與行動有哪些本質區別？"
      },
      {
        id: "u1-s3",
        type: "framework",
        title: "Dave Ulrich 戴夫·尤里奇：人資四角色模型",
        subtitle: "The HR Business Partner (HRBP) Framework",
        badge: "經典理論架構",
        content: `
          <div class="ulrich-matrix">
            <div class="matrix-axis axis-y"><span>策略導向 (Future / Strategic Focus) ↑</span></div>
            <div class="matrix-grid">
              <div class="matrix-quadrant q1">
                <div class="q-tag">策略 × 流程</div>
                <h4><i class="fas fa-chess-knight"></i> 戰略夥伴 (Strategic Partner)</h4>
                <p>協助管理層將人力資源政策與商業戰略緊密對齊，設計達成營運目標的組織能力架構。</p>
              </div>
              <div class="matrix-quadrant q2">
                <div class="q-tag">策略 × 人員</div>
                <h4><i class="fas fa-seedling"></i> 變革推手 (Change Agent)</h4>
                <p>引領組織變革、重塑企業文化，提升全員應對外部市場劇烈變化的敏捷適應力。</p>
              </div>
              <div class="matrix-quadrant q3">
                <div class="q-tag">營運 × 流程</div>
                <h4><i class="fas fa-cogs"></i> 行政專家 (Administrative Expert)</h4>
                <p>以精實思維與數位化自動重塑人資行政流程，提供高效率、高品質的人事營運服務。</p>
              </div>
              <div class="matrix-quadrant q4">
                <div class="q-tag">營運 × 人員</div>
                <h4><i class="fas fa-hands-helping"></i> 員工後盾 (Employee Champion)</h4>
                <p>傾聽基層同仁心聲、維護心理安全感與敬業度，打造公平且具凝聚力的友善職場環境。</p>
              </div>
            </div>
            <div class="matrix-axis axis-x"><span>← 著重流程與制度 ｜ 著重人才與人際 →</span></div>
          </div>
        `,
        speakerNotes: "說明四象限並非互斥，優秀的人資團隊需在四個維度上取得均衡發展。"
      },
      {
        id: "u1-s4",
        type: "cards",
        title: "戰略人資的「雙重契合」整合架構",
        subtitle: "Vertical Fit (外部適配) 與 Horizontal Fit (內部一致性)",
        badge: "戰略思維",
        content: `
          <div class="two-col-grid">
            <div class="info-card">
              <div class="card-badge bg-primary">垂直整合 (Vertical Fit)</div>
              <h3>外部環境與企業競爭策略契合</h3>
              <p>人資策略必須因應企業在不同競爭策略（如 Michael Porter 的三大策略）下的不同需求：</p>
              <ul class="styled-bullet">
                <li><strong>成本領先策略 (Cost Leadership)：</strong> 重視工作效率、標準作業程序 (SOP)、成本控制型薪酬體系。</li>
                <li><strong>差異化策略 (Differentiation)：</strong> 重視創新思考、跨領域人才引進、容許試錯的彈性激勵政策。</li>
                <li><strong>利基聚焦策略 (Focus)：</strong> 深化特定領域專業技術，建立專屬專家培育通道。</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-badge bg-secondary">水平整合 (Horizontal Fit)</div>
              <h3>人資各功能模組協同一致</h3>
              <p>選、用、育、留各制度間不能互相抵觸，必須形成正向增強迴圈：</p>
              <ul class="styled-bullet">
                <li><strong>招募 ↔ 培訓：</strong> 招募選拔的核心職能標準，必須是日後培訓發展課程的深化主軸。</li>
                <li><strong>績效 ↔ 薪酬：</strong> 績效指標所鼓勵的行為，必須與獎金分潤制度緊密相連。</li>
                <li><strong>留才 ↔ 文化：</strong> 避免「招募時宣稱扁平創新，考核時卻用威權年資打分數」的制度衝突。</li>
              </ul>
            </div>
          </div>
        `,
        speakerNotes: "強調橫向與縱向契合是檢驗一間企業人資成熟度最核心的指標。"
      },
      {
        id: "u1-s5",
        type: "case",
        title: "標竿案例：微軟文化重塑與 HR 轉型",
        subtitle: "Satya Nadella 領導下的成長型思維變革",
        badge: "企業標竿案例",
        content: `
          <div class="case-study-box">
            <div class="case-header">
              <i class="fas fa-building"></i>
              <h4>案例背景：從官僚內耗到價值三兆美元的科技巨擘</h4>
            </div>
            <div class="case-body">
              <div class="case-col">
                <h5><i class="fas fa-exclamation-triangle text-danger"></i> 變革前的痛點</h5>
                <p>過往微軟採用嚴苛的強迫排名考績制 (Stack Ranking)，導致員工互相防禦、不願跨部門分享；組織陷入『無所不知 (Know-it-all)』的官僚傲慢。</p>
              </div>
              <div class="case-col">
                <h5><i class="fas fa-tools text-success"></i> HR 策略落地解方</h5>
                <p>CEO 薩蒂亞·納德拉與人資長 Kathleen Hogan 聯手推動<strong>「成長型思維 (Growth Mindset)」</strong>：</p>
                <ul>
                  <li>廢除強迫排名考績，轉向重視跨部門合作與對他人的貢獻。</li>
                  <li>將企業座右銘轉化為：『從無所不知，變成無所不學 (From Know-it-alls to Learn-it-alls)』。</li>
                  <li>HR 角色轉化為同理心培育與全員終身學習的平台賦能者。</li>
                </ul>
              </div>
            </div>
            <div class="case-footer">
              <strong>成效驗證：</strong> 微軟市值自 2014 年約 3,000 億美元一路突破 3 兆美元，證明組織文化與戰略人資是企業持續繁榮的核心引擎。
            </div>
          </div>
        `,
        speakerNotes: "請學生思考：微軟案例如何體現了 Dave Ulrich 所說的『變革推手 (Change Agent)』角色？"
      },
      {
        id: "u1-s6",
        type: "quiz",
        title: "隨堂檢測與課後思維題",
        subtitle: "Knowledge Check & Critical Thinking",
        badge: "檢驗與回顧",
        content: `
          <div class="quiz-container">
            <div class="quiz-question">
              <h4><i class="fas fa-question-circle"></i> 測驗題：依據 Dave Ulrich 的模型，當 HR 正主持跨部門敏捷專案、引導組織擁抱數位轉型時，主要扮演下列何種角色？</h4>
              <div class="quiz-options">
                <div class="quiz-option" onclick="selectQuizOption(this, false)">A. 行政專家 (Administrative Expert)</div>
                <div class="quiz-option correct-opt" onclick="selectQuizOption(this, true)">B. 變革推手 (Change Agent) <i class="fas fa-check-circle check-icon"></i></div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">C. 薪酬福利專員 (Compensation Specialist)</div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">D. 員工關係仲裁者 (Labor Arbitrator)</div>
              </div>
              <div class="quiz-feedback hidden">
                <div class="alert alert-success">
                  <strong>解析正確！</strong> 變革推手 (Change Agent) 的核心任務即是推動組織變革、重塑文化並引導成員適應新工作模式。
                </div>
              </div>
            </div>
            <div class="discussion-box">
              <h5><i class="fas fa-comments"></i> 課堂討論題</h5>
              <p>傳統企業常把 HR 視為「管假單、發薪水」的後勤部門，如果你是新上任的 HRBP，第一步要如何讓業務部門總監認可你的價值？</p>
            </div>
          </div>
        `,
        speakerNotes: "引導全班進行分組討論並分享觀點。"
      },
      {
        id: "u1-s7",
        type: "cards",
        title: "本單元總結與延伸學習指南",
        subtitle: "Key Takeaways & Reading Guide",
        badge: "學習指南",
        content: `
          <div class="takeaway-box" style="margin-bottom: 1.5rem;">
            <i class="fas fa-star"></i> <strong>單元精華回顧：</strong> 人力資源管理的終極目標是「將組織戰略轉化為員工的高效能力與敬業行為」。
          </div>
          <div class="two-col-grid">
            <div class="info-card">
              <h4><i class="fas fa-book-reader text-primary"></i> 推薦經典文獻</h4>
              <ul class="styled-bullet">
                <li>Dave Ulrich: <em>《HR Champion (人資先鋒)》</em></li>
                <li>Satya Nadella: <em>《Hit Refresh (刷新未來)》</em></li>
                <li>Becker & Huselid: <em>The HR Scorecard</em></li>
              </ul>
            </div>
            <div class="info-card">
              <h4><i class="fas fa-laptop-code text-secondary"></i> 課後實務思考</h4>
              <p>選定一家你熟悉的企業，評估其人資政策是否與其商業獲利模式形成良好 Vertical Fit。</p>
            </div>
          </div>
        `,
        speakerNotes: "宣告下一單元進入『組織行為與職場心理學概述』。"
      }
    ]
  },
  {
    id: "unit-2",
    unitNumber: "02",
    title: "組織行為與職場心理學概述",
    englishTitle: "Overview of Organizational Behavior & Workplace Psychology",
    badge: "2026 Fall 核心課堂",
    icon: "fa-brain",
    duration: "3.5 小時",
    slidesCount: 6,
    htmlFile: "組織行為職場心理學理論概述_2026Fall.html",
    summary: "從微觀個體心理、激勵理論、團隊動力到宏觀組織文化，揭示影響員工滿意度、敬業度與組織公民行為 (OCB) 的關鍵心理機制。",
    tags: ["組織行為", "職場心理學", "雙因子理論", "自我決定論", "心理安全感"],
    slides: [
      {
        id: "u2-s1",
        type: "cover",
        title: "組織行為與職場心理學概述",
        subtitle: "Overview of Organizational Behavior & Workplace Psychology",
        badge: "單元首頁",
        content: `
          <div class="slide-cover-layout">
            <div class="hero-chip"><i class="fas fa-heartbeat"></i> 2026 Fall 核心課堂</div>
            <p class="lead-text">管理不是控制人的手腳，而是理解人的心理、情緒與動機。組織是由「人」構成的有機體，心理學是破解人資密碼的鑰匙。</p>
            <div class="key-objectives">
              <h4><i class="fas fa-bullseye"></i> 本單元學習核心</h4>
              <ul>
                <li>掌握古典與當代核心工作激勵理論（雙因子理論、期望理論、自我決定論 SDT）</li>
                <li>解析工作態度、敬業度 (Engagement) 與組織公民行為 (OCB)</li>
                <li>理解團隊心理安全感 (Psychological Safety) 與群體決策偏誤</li>
                <li>探索組織文化層次（Edgar Schein 模型）與變革阻力因應策略</li>
              </ul>
            </div>
          </div>
        `,
        speakerNotes: "說明組織行為學 (OB) 是 HR 的心理學基石。唯有洞悉人性動機，各項制度設計才不會徒勞無功。"
      },
      {
        id: "u2-s2",
        type: "comparison",
        title: "激勵理論解析：Herzberg 雙因子理論",
        subtitle: "Motivator-Hygiene Theory 保健因子 vs. 激勵因子",
        badge: "激勵經典理論",
        content: `
          <div class="comparison-grid">
            <div class="compare-card compare-traditional">
              <div class="card-header">
                <i class="fas fa-shield-alt"></i>
                <h3>保健因子 (Hygiene Factors)</h3>
              </div>
              <ul class="compare-list">
                <li><strong>代表元素：</strong> 薪資水準、公司規章制度、工作環境、安全保障、人際關係</li>
                <li><strong>作用機制：</strong> 
                  <br>✔ 充足時：員工「沒有不滿意 (No Dissatisfaction)」
                  <br>✘ 不足時：員工「極度不滿意、離職抱怨」
                </li>
                <li><strong>本質限制：</strong> 保健因子<strong>無法</strong>真正激發員工內在的工作熱情與超越期望的卓越表現。</li>
              </ul>
            </div>
            <div class="compare-card compare-modern highlight-border">
              <div class="card-header">
                <i class="fas fa-award text-success"></i>
                <h3>激勵因子 (Motivators)</h3>
              </div>
              <ul class="compare-list">
                <li><strong>代表元素：</strong> 成就感、工作本身的挑戰性、被主管認可肯定、晉升機會、責任賦權</li>
                <li><strong>作用機制：</strong>
                  <br>✔ 充足時：員工「高度滿意、主動投入、高度敬業」
                  <br>✘ 缺乏時：員工處於中性無感狀態
                </li>
                <li><strong>管理啟發：</strong> 想讓同仁全力以赴，不能只靠加薪防抱怨，必須提供挑戰與成長空間！</li>
              </ul>
            </div>
          </div>
          <div class="takeaway-box">
            <i class="fas fa-quote-left"></i> <strong>赫茲伯格名言：</strong>「滿意的相反不是不滿意，而是沒有滿意；不滿意的相反不是滿意，而是沒有不滿意。」
          </div>
        `,
        speakerNotes: "加薪只是消除不滿的保健因子，並未真正激發內在激勵因子。"
      },
      {
        id: "u2-s3",
        type: "framework",
        title: "自我決定論 (Self-Determination Theory, SDT)",
        subtitle: "Deci & Ryan 揭示驅動高敬業度的三大核心心理需求",
        badge: "現代內在動機",
        content: `
          <div class="traits-grid">
            <div class="trait-item" style="padding: 1.5rem; text-align: center;">
              <div style="font-size: 2.2rem; color: var(--primary-color); margin-bottom: 0.5rem;"><i class="fas fa-compass"></i></div>
              <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">自主感 (Autonomy)</h4>
              <p style="font-size: 0.85rem; color: var(--text-muted);">員工渴望對自己的工作方法、時間與目標有決定權，痛恨微觀管理 (Micromanagement)。</p>
            </div>
            <div class="trait-item" style="padding: 1.5rem; text-align: center;">
              <div style="font-size: 2.2rem; color: var(--secondary-color); margin-bottom: 0.5rem;"><i class="fas fa-chart-line"></i></div>
              <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">勝任感 (Competence)</h4>
              <p style="font-size: 0.85rem; color: var(--text-muted);">員工渴望在工作中發揮自身長才、克服困難挑戰，並持續感受到專業技能的精進與成長。</p>
            </div>
            <div class="trait-item" style="padding: 1.5rem; text-align: center;">
              <div style="font-size: 2.2rem; color: var(--accent-color); margin-bottom: 0.5rem;"><i class="fas fa-users"></i></div>
              <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">歸屬感 (Relatedness)</h4>
              <p style="font-size: 0.85rem; color: var(--text-muted);">員工渴望與同仁建立真誠的連結、互助合作，並感覺自己的工作對團隊和社會具有重要意義。</p>
            </div>
          </div>
          <div class="takeaway-box" style="margin-top: 1.5rem;">
            <i class="fas fa-lightbulb"></i> <strong>管理洞察：</strong> 當工作環境能同時滿足這三項基本心理需求時，員工的敬業度、創造力與身心健康將達到巔峰。
          </div>
        `,
        speakerNotes: "說明 SDT 理論是現代知識工作者與工程師管理的最核心心理學模型。"
      },
      {
        id: "u2-s4",
        type: "cards",
        title: "心理安全感 (Psychological Safety) 與高效團隊",
        subtitle: "哈佛商學院 Amy Edmondson 與 Google 亞里斯多德專案研究",
        badge: "團隊動力",
        content: `
          <div class="two-col-grid">
            <div class="info-card">
              <div class="card-badge bg-primary">Google 亞里斯多德專案發現</div>
              <h3>高效團隊的第一關鍵不是成員智商，而是心理安全感</h3>
              <p>Google 研究數百個團隊發現，最強團隊的成員不用擔心被嘲笑或懲罰，具有以下特徵：</p>
              <ul class="styled-bullet">
                <li><strong>敢於承認錯誤：</strong> 同仁在犯錯時第一時間主動回報，尋求協同解決。</li>
                <li><strong>勇於提出異議：</strong> 即使對資深主管的構想有不同看法，也能放膽提問。</li>
                <li><strong>平等發言權 (Equal Turn-taking)：</strong> 會議中每位成員的說話時間相當平均。</li>
              </ul>
            </div>
            <div class="info-card">
              <div class="card-badge bg-secondary">主管如何營造心理安全感</div>
              <h3>四步行為清單</h3>
              <ul class="styled-bullet">
                <li><strong>示弱與承認不足：</strong> 主管公開說：「這個問題我也沒有標準答案，需要大家一起探討。」</li>
                <li><strong>將工作框架化為學習：</strong> 將專案定義為「共同實驗與探索」，而非「不容犯錯的審判」。</li>
                <li><strong>保持好奇心提問：</strong> 遇到意見分歧時問：「能否跟我多說一些你的出發點？」</li>
                <li><strong>積極肯定勇於發言者：</strong> 公開感謝指出盲點或風險的同仁。</li>
              </ul>
            </div>
          </div>
        `,
        speakerNotes: "很多團隊表面一片祥和，但其實是沉默的恐懼，這是缺乏心理安全感的警訊。"
      },
      {
        id: "u2-s5",
        type: "case",
        title: "組織公民行為 (Organizational Citizenship Behavior, OCB)",
        subtitle: "不寫在工作說明書上，卻決定企業成敗的關鍵美德",
        badge: "利他行為",
        content: `
          <div class="case-study-box">
            <div class="case-header">
              <i class="fas fa-hands-helping"></i>
              <h4>什麼是組織公民行為 (OCB)？</h4>
            </div>
            <div class="case-body">
              <div class="case-col">
                <h5><i class="fas fa-check-double text-success"></i> OCB 的五大維度表現</h5>
                <ul>
                  <li><strong>利他行為 (Altruism)：</strong> 自發協助工作量過載或請假的同仁。</li>
                  <li><strong>盡職良知 (Conscientiousness)：</strong> 遠遠超越最低要求標準，高度注重細節。</li>
                  <li><strong>運動家精神 (Sportsmanship)：</strong> 遇到挫折或資源受限時不抱怨，保持建設性。</li>
                  <li><strong>謙恭有禮 (Courtesy)：</strong> 提前告知他人專案變動，尊重他人節奏。</li>
                  <li><strong>公民美德 (Civic Virtue)：</strong> 積極參與公司活動、關注組織長期聲譽。</li>
                </ul>
              </div>
              <div class="case-col">
                <h5><i class="fas fa-exclamation-circle text-warning"></i> HR 的制度設計考驗</h5>
                <p>OCB 本質上是「自願性、非合約規範」的行為。如果考核只看冰冷的個人 KPI，員工就會變得斤斤計較：『這不是我的職責，我為什麼要做？』</p>
                <div class="takeaway-box" style="margin-top: 1rem;">
                  <strong>解法：</strong> 透過 360 度同儕回饋與公開認同獎勵，讓願意利他助人的好公民被看見。
                </div>
              </div>
            </div>
          </div>
        `,
        speakerNotes: "強調 OCB 是企業文化的潤滑劑。"
      },
      {
        id: "u2-s6",
        type: "quiz",
        title: "隨堂檢測與課後思維題",
        subtitle: "Knowledge Check & Critical Thinking",
        badge: "檢驗與回顧",
        content: `
          <div class="quiz-container">
            <div class="quiz-question">
              <h4><i class="fas fa-question-circle"></i> 測驗題：某同仁工作環境舒適且薪資優渥，但主管事事插手限制、不給予自主發揮空間，導致其工作無力感日益加重。依據 Deci & Ryan 的自我決定論，該員工主要是哪一項基本心理需求受挫？</h4>
              <div class="quiz-options">
                <div class="quiz-option correct-opt" onclick="selectQuizOption(this, true)">A. 自主感 (Autonomy) <i class="fas fa-check-circle check-icon"></i></div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">B. 生理安全需求 (Physiological Safety)</div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">C. 薪資公平感 (Equity Pay)</div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">D. 歸屬感 (Relatedness)</div>
              </div>
              <div class="quiz-feedback hidden">
                <div class="alert alert-success">
                  <strong>回答正確！</strong> 微觀管理剝奪了員工的自由意志與選擇掌控權，嚴重損害了「自主感 (Autonomy)」。
                </div>
              </div>
            </div>
            <div class="discussion-box">
              <h5><i class="fas fa-comments"></i> 課堂討論題</h5>
              <p>在你的團隊中，主管做了哪些事會讓你感到「心理安全」？又有哪些行為會瞬間扼殺團隊的心理安全感？</p>
            </div>
          </div>
        `,
        speakerNotes: "引導小組討論。"
      }
    ]
  },
  {
    id: "unit-3",
    unitNumber: "03",
    title: "人力資源規劃與工作分析",
    englishTitle: "Workforce Planning & Job Analysis",
    badge: "2026 Fall 核心課堂",
    icon: "fa-project-diagram",
    duration: "3 小時",
    slidesCount: 6,
    htmlFile: "人力資源規劃與工作分析_2026Fall.html",
    summary: "學習科學化工作分析方法，產出高品質職務說明書 (JD) 與工作規範 (JS)，掌握人力供需預測與 5B 人才因應策略。",
    tags: ["人力規劃", "工作分析", "工作說明書JD", "5B策略", "供需預測"],
    slides: [
      {
        id: "u3-s1",
        type: "cover",
        title: "人力資源規劃與工作分析",
        subtitle: "Workforce Planning & Job Analysis",
        badge: "單元首頁",
        content: `
          <div class="slide-cover-layout">
            <div class="hero-chip"><i class="fas fa-sitemap"></i> 2026 Fall 核心課堂</div>
            <p class="lead-text">工作分析是整個人力資源管理的大腦與骨幹；沒有精確的工作分析，招募就沒有標準、考核就缺乏依據、培訓更失去方向。</p>
            <div class="key-objectives">
              <h4><i class="fas fa-bullseye"></i> 本單元學習核心</h4>
              <ul>
                <li>掌握工作分析流程：訪談法、觀察法、問卷法與重要事件法 (CIT)</li>
                <li>撰寫專業的工作說明書 (Job Description) 與工作規範 (Job Specification)</li>
                <li>了解宏觀與微觀人力需求預測方法（比率分析、散佈圖、德爾菲法）</li>
                <li>運用 5B 人力策略（Buy, Build, Borrow, Bounce, Bind）彌補人才缺口</li>
              </ul>
            </div>
          </div>
        `,
        speakerNotes: "工作分析是人資選用育留各功能的源頭。"
      },
      {
        id: "u3-s2",
        type: "process",
        title: "工作分析產出物：JD 與 JS 的區隔",
        subtitle: "Job Description (職位描述) vs. Job Specification (職位規範)",
        badge: "核心工具產出",
        content: `
          <div class="comparison-grid">
            <div class="compare-card">
              <div class="card-header">
                <i class="fas fa-file-alt text-primary"></i>
                <h3>工作說明書 (Job Description, JD)</h3>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.85rem;"><strong>焦點：</strong> 針對「工作本身 (The Job)」的內容描述</p>
              <ul class="compare-list">
                <li><strong>職位識別：</strong> 職務名稱、所屬部門、直接主管、職等職級</li>
                <li><strong>職位使命：</strong> 本職位存在的最終目標與對公司的商業價值</li>
                <li><strong>主要職責與任務：</strong> 條列 5~7 項關鍵任務與預計工作時間佔比</li>
                <li><strong>工作權限與範圍：</strong> 核准預算權限、直接指揮的下屬人數</li>
                <li><strong>工作條件：</strong> 辦公環境、出差頻率、特殊設備使用</li>
              </ul>
            </div>
            <div class="compare-card highlight-border">
              <div class="card-header">
                <i class="fas fa-user-check text-success"></i>
                <h3>工作規範 (Job Specification, JS)</h3>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.85rem;"><strong>焦點：</strong> 針對「擔任此職位的人 (The Person)」之資格條件</p>
              <ul class="compare-list">
                <li><strong>教育背景：</strong> 最低學歷要求、特定科系背景</li>
                <li><strong>工作經驗：</strong> 相關產業年資、特定專案或管理經驗</li>
                <li><strong>知識與技能 (KSA)：</strong> 軟體工具掌握度、外語能力、專業證照</li>
                <li><strong>核心職能特質：</strong> 邏輯思考、抗壓性、團隊溝通、危機處理能力</li>
                <li><strong>法令合規提醒：</strong> 不得設有年齡、性別、外貌等就業歧視條件</li>
              </ul>
            </div>
          </div>
        `,
        speakerNotes: "合規重點：提醒《就業服務法》第 5 條的就業歧視規範。"
      },
      {
        id: "u3-s3",
        type: "cards",
        title: "工作分析四大常用資料蒐集方法",
        subtitle: "Methods for Collecting Job Analysis Information",
        badge: "調研實務方法",
        content: `
          <div class="traits-grid">
            <div class="trait-item">
              <h4><i class="fas fa-comments text-primary"></i> 1. 職務深度訪談法 (Interview)</h4>
              <p>與任職同仁及主管個別訪談。能深入了解非例行性任務，但耗時且受訪者可能誇大自身重要性。</p>
            </div>
            <div class="trait-item">
              <h4><i class="fas fa-eye text-success"></i> 2. 現場直接觀察法 (Observation)</h4>
              <p>到產線或門市實地觀察作業流程。適合週期短、高度標準化的體力型工作，不適用思考型工作。</p>
            </div>
            <div class="trait-item">
              <h4><i class="fas fa-clipboard-list text-warning"></i> 3. 結構化問卷法 (Questionnaire)</h4>
              <p>發放 PAQ（職位分析問卷）等標準化量表。效率最高、能大規模普查，但問卷設計門檻較高。</p>
            </div>
          </div>
          <div class="takeaway-box" style="margin-top: 1.25rem;">
            <i class="fas fa-star text-accent"></i> <strong>4. 重要事件法 (Critical Incident Technique, CIT)：</strong> 特別蒐集該職位在過去半年中「極為成功」與「極為失敗」的具體真實案例，萃取出卓越者的行為模式。
          </div>
        `,
        speakerNotes: "實務上建議採用問卷初篩 + CIT 關鍵事件訪談法。"
      },
      {
        id: "u3-s4",
        type: "process",
        title: "人力規劃五大因應策略：5B 模型",
        subtitle: "The 5B Workforce Strategy Framework",
        badge: "供需因應解方",
        content: `
          <div class="addie-flow">
            <div class="addie-step">
              <span class="step-letter">Buy</span>
              <h4>外部採購 (Buy)</h4>
              <p>從外部市場招募即戰力，快速補齊技能缺口，但成本高且需承擔磨合適應風險。</p>
            </div>
            <div class="addie-step">
              <span class="step-letter">Build</span>
              <h4>內部培育 (Build)</h4>
              <p>透過教育訓練與師徒制培育內部潛力同仁，文化認同度高但需要時間發酵。</p>
            </div>
            <div class="addie-step">
              <span class="step-letter">Borrow</span>
              <h4>靈活借用 (Borrow)</h4>
              <p>運用外包顧問、約聘專家或自由工作者，彈性應對短期專案或高階技術需求。</p>
            </div>
            <div class="addie-step">
              <span class="step-letter">Bounce</span>
              <h4>汰除淘汰 (Bounce)</h4>
              <p>透過輔導無效後的資遣解僱或組織扁平化調整，優化組織結構與冗員。</p>
            </div>
            <div class="addie-step">
              <span class="step-letter">Bind</span>
              <h4>關鍵留任 (Bind)</h4>
              <p>運用長期股權、競爭力薪酬與專案挑戰，牢牢留住前 10% 核心菁英。</p>
            </div>
          </div>
        `,
        speakerNotes: "5B 是人力資本規劃的共通語言。"
      },
      {
        id: "u3-s5",
        type: "case",
        title: "工作設計演進：從科學管理到工作豐富化",
        subtitle: "Job Design Evolution: Efficiency vs. Motivation",
        badge: "工作再設計",
        content: `
          <div class="case-study-box">
            <div class="case-header">
              <i class="fas fa-cogs"></i>
              <h4>Hackman & Oldham 工作特性模型 (Job Characteristics Model, JCM)</h4>
            </div>
            <div class="case-body">
              <div class="case-col">
                <h5><i class="fas fa-list-check text-primary"></i> 五大核心工作維度</h5>
                <ul>
                  <li><strong>技能多樣性 (Skill Variety)：</strong> 工作需要運用多元才能與專長。</li>
                  <li><strong>任務完整性 (Task Identity)：</strong> 能完整產出一件作品，看見全貌。</li>
                  <li><strong>任務重要性 (Task Significance)：</strong> 清楚明白工作對他人的實質影響。</li>
                  <li><strong>自主性 (Autonomy)：</strong> 享有安排工作步驟與時程的自主權。</li>
                  <li><strong>回饋性 (Feedback)：</strong> 能直接從工作本身獲得好壞成效資訊。</li>
                </ul>
              </div>
              <div class="case-col">
                <h5><i class="fas fa-chart-line text-success"></i> 激勵潛能分數 (MPS) 啟示</h5>
                <p>現代工作設計強調<strong>工作豐富化 (Job Enrichment)</strong>，給予更多規劃與控制權限，提升知識工作者的內在激勵。</p>
              </div>
            </div>
          </div>
        `,
        speakerNotes: "科技業透過自動化釋放重複性勞動，實現工作豐富化。"
      },
      {
        id: "u3-s6",
        type: "quiz",
        title: "隨堂檢測與課後思維題",
        subtitle: "Knowledge Check & Critical Thinking",
        badge: "檢驗與回顧",
        content: `
          <div class="quiz-container">
            <div class="quiz-question">
              <h4><i class="fas fa-question-circle"></i> 測驗題：某公司面對未來半年急需上線的新型雲端資安架構專案，但內部完全沒有具備該資安技術的同仁，且該專案預計執行 4 個月後即轉入例行維護，最適合採取 5B 中的哪項策略？</h4>
              <div class="quiz-options">
                <div class="quiz-option" onclick="selectQuizOption(this, false)">A. Build (內部培育)</div>
                <div class="quiz-option correct-opt" onclick="selectQuizOption(this, true)">B. Borrow (外包顧問/借用) <i class="fas fa-check-circle check-icon"></i></div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">C. Buy (招募昂貴全職專才)</div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">D. Bounce (淘汰現有網管)</div>
              </div>
              <div class="quiz-feedback hidden">
                <div class="alert alert-success">
                  <strong>回答正確！</strong> 針對短期、專業門檻高且內部無法短期培育的專案，借用 (Borrow) 外包顧問或約聘專家是最符合成本效益且敏捷的策略。
                </div>
              </div>
            </div>
            <div class="discussion-box">
              <h5><i class="fas fa-comments"></i> 課堂討論題</h5>
              <p>生成式 AI 普及後，許多初階文書與程式開發工作被重構，請思考這會對傳統職務說明書 (JD) 的編寫帶來何種根本改變？</p>
            </div>
          </div>
        `,
        speakerNotes: "引導學生思考技能（Skills-based）組織的崛起。"
      }
    ]
  },
  {
    id: "unit-4",
    unitNumber: "04",
    title: "招募與甄選",
    englishTitle: "Recruitment & Selection",
    badge: "2026 Fall 核心課堂",
    icon: "fa-user-plus",
    duration: "3.5 小時",
    slidesCount: 6,
    htmlFile: "招募與甄選_2026Fall.html",
    summary: "建立漏斗式招募管道、雇主價值主張 (EVP)，掌握冰山職能模型、STAR 行為面試法與預測效度極高的評鑑技術。",
    tags: ["招募甄選", "STAR面試法", "職能冰山", "評鑑中心", "EVP雇主品牌"],
    slides: [
      {
        id: "u4-s1",
        type: "cover",
        title: "招募與甄選",
        subtitle: "Recruitment & Selection",
        badge: "單元首頁",
        content: `
          <div class="slide-cover-layout">
            <div class="hero-chip"><i class="fas fa-users-cog"></i> 2026 Fall 核心課堂</div>
            <p class="lead-text">招募錯誤人才的代價，高達該職位年薪的 1.5 到 3 倍。精準科學的甄選，是打造夢幻團隊的第一道防線。</p>
            <div class="key-objectives">
              <h4><i class="fas fa-bullseye"></i> 本單元學習核心</h4>
              <ul>
                <li>掌握 ICE 冰山職能模型，洞察候選人深層特質與價值觀</li>
                <li>建立結構化行為面試（STAR Method）的標準問題集與評分量表</li>
                <li>比較各類評鑑工具（工作樣本測試、認知測驗、評鑑中心）的信效度</li>
                <li>建構強大雇主品牌 (Employer Branding) 與候選人體驗 (Candidate Experience)</li>
              </ul>
            </div>
          </div>
        `,
        speakerNotes: "好的甄選不是選最優秀的人，而是選最合適（Best Fit）的人。"
      },
      {
        id: "u4-s2",
        type: "framework",
        title: "職能冰山模型 (The Competency Iceberg Model)",
        subtitle: "Spencer & Spencer 揭示水面下決定卓越績效的真正關鍵",
        badge: "理論基礎",
        content: `
          <div class="iceberg-diagram">
            <div class="water-line"><span>=== 海平面（容易透過培訓習得、容易在履歷上呈現）===</span></div>
            <div class="iceberg-top">
              <h4>水面上：知識 (Knowledge) 與 技能 (Skills)</h4>
              <p>例如：財務分析、Python 程式撰寫、專案管理、外語檢定。這些是門檻條件 (Threshold Competencies)。</p>
            </div>
            <div class="iceberg-bottom">
              <h4>水面下：深層特質（難以透過短期培訓改變、決定能否長期脫穎而出）</h4>
              <div class="traits-grid">
                <div class="trait-item">
                  <strong>自我概念 (Self-Concept)</strong>
                  <span>價值觀、態度、個人專業身分認同</span>
                </div>
                <div class="trait-item">
                  <strong>個人特質 (Traits)</strong>
                  <span>堅毅度 (Grit)、同理心、情緒韌性、敏捷好奇心</span>
                </div>
                <div class="trait-item">
                  <strong>內在動機 (Motives)</strong>
                  <span>成就導向、追求影響力、對使命的真正渴望</span>
                </div>
              </div>
            </div>
          </div>
          <div class="takeaway-box">
            <i class="fas fa-quote-left"></i> <strong>西南航空管理格言：</strong>「Hire for attitude, train for skill.（依態度選人，依技能培訓。）」
          </div>
        `,
        speakerNotes: "說明水面下的文化與態度契合是長期留才關鍵。"
      },
      {
        id: "u4-s3",
        type: "process",
        title: "結構化面試黃金準則：STAR 行為面試法",
        subtitle: "Situation, Task, Action, Result",
        badge: "實戰技術",
        content: `
          <div class="star-grid">
            <div class="star-card">
              <div class="star-letter s">S</div>
              <h4>Situation（情境背景）</h4>
              <p class="star-desc">候選人當時面臨的具體背景環境、困難與挑戰是什麼？</p>
              <div class="star-sample">「請分享一次你在極短期限內，遭遇關鍵客戶突然變更規格的真實狀況？」</div>
            </div>
            <div class="star-card">
              <div class="star-letter t">T</div>
              <h4>Task（目標任務）</h4>
              <p class="star-desc">在該情境下，候選人需要達成的具體成果與背負的責任為何？</p>
              <div class="star-sample">「在該突發事件中，你個人被賦予的關鍵產出與交付期限是什麼？」</div>
            </div>
            <div class="star-card">
              <div class="star-letter a">A</div>
              <h4>Action（具體行動）</h4>
              <p class="star-desc">候選人<strong>自己</strong>採取了哪些步驟與策略？避免泛稱『我們』。</p>
              <div class="star-sample">「請詳細說明你個人第一步做了什麼？如何說服工程團隊支持你的應變方案？」</div>
            </div>
            <div class="star-card">
              <div class="star-letter r">R</div>
              <h4>Result（最終成果）</h4>
              <p class="star-desc">專案最後的具體量化成效，以及該次經驗帶來的反思與收穫？</p>
              <div class="star-sample">「最後的量化數據結果如何？若有機會重來一次，你會有哪裡做得不一樣？」</div>
            </div>
          </div>
        `,
        speakerNotes: "訓練面試官透過 STAR 深挖真實行為細節。"
      },
      {
        id: "u4-s4",
        type: "cards",
        title: "甄選工具預測未來績效之效度比較 (Predictive Validity)",
        subtitle: "依據 Schmidt & Hunter 跨越百年的國際元分析研究",
        badge: "科學證據",
        content: `
          <div class="validity-table-wrapper">
            <table class="validity-table">
              <thead>
                <tr>
                  <th>甄選工具</th>
                  <th>預測效度係數 (0~1)</th>
                  <th>優缺點與實務操作建議</th>
                </tr>
              </thead>
              <tbody>
                <tr class="high-validity">
                  <td><i class="fas fa-laptop-code text-success"></i> 工作樣本測試 (Work Sample)</td>
                  <td><strong>0.54</strong> (極高)</td>
                  <td>讓候選人直接試講、現場 Coding 或模擬處理客戶投訴公文，真實反映即戰力。</td>
                </tr>
                <tr class="high-validity">
                  <td><i class="fas fa-brain text-success"></i> 一般認知能力測驗 (GMA)</td>
                  <td><strong>0.51</strong> (極高)</td>
                  <td>測量學習敏捷度與邏輯推理能力，特別適合無工作經驗的新鮮人或儲備幹部。</td>
                </tr>
                <tr class="medium-validity">
                  <td><i class="fas fa-clipboard-check text-primary"></i> 結構化行為面試 (Structured)</td>
                  <td><strong>0.51</strong> (極高)</td>
                  <td>基於職能題目並有統一評分指標，能大幅降低面試官個人偏見與主觀盲點。</td>
                </tr>
                <tr class="low-validity">
                  <td><i class="fas fa-comments text-warning"></i> 非結構化隨興面試 (Unstructured)</td>
                  <td><strong>0.38</strong> (偏低)</td>
                  <td>極易受到「第一印象」、「相似相投」或個人情緒主觀好惡干擾，預測力差。</td>
                </tr>
                <tr class="low-validity">
                  <td><i class="fas fa-file-alt text-danger"></i> 年資背景檢視 (Years of Experience)</td>
                  <td><strong>0.18</strong> (極低)</td>
                  <td>有 10 年資歷可能只是「把 1 年經驗重複了 10 次」，不代表具備高績效潛力。</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        speakerNotes: "建議採用複合式評鑑工具。"
      },
      {
        id: "u4-s5",
        type: "cards",
        title: "打造吸引關鍵人才的雇主價值主張 (EVP)",
        subtitle: "Employee Value Proposition: 讓優秀人才主動爭取加入",
        badge: "雇主品牌行銷",
        content: `
          <div class="evp-container">
            <div class="evp-pillar">
              <div class="pillar-icon"><i class="fas fa-coins"></i></div>
              <h4>報酬與福利 (Rewards)</h4>
              <p>高於市場中位數的薪資、績效分紅、彈性福利帳戶與透明調薪規則。</p>
            </div>
            <div class="evp-pillar">
              <div class="pillar-icon"><i class="fas fa-chart-line"></i></div>
              <h4>成長機會 (Opportunity)</h4>
              <p>清晰多元的升遷雙軌制、跨國輪調指派、主管教練與外部進修補助。</p>
            </div>
            <div class="evp-pillar">
              <div class="pillar-icon"><i class="fas fa-heart"></i></div>
              <h4>組織文化 (Culture)</h4>
              <p>扁平開放、多元包容 (DEI)、高心理安全感與鼓勵創新試錯的包容氛圍。</p>
            </div>
            <div class="evp-pillar">
              <div class="pillar-icon"><i class="fas fa-laptop-house"></i></div>
              <h4>工作生活平衡 (Work Life)</h4>
              <p>混合遠距工作制度 (Hybrid Work)、彈性上下班、注重員工身心健康。</p>
            </div>
          </div>
        `,
        speakerNotes: "EVP 是人資與行銷思維的結合。"
      },
      {
        id: "u4-s6",
        type: "quiz",
        title: "隨堂檢測與課後思維題",
        subtitle: "Knowledge Check & Critical Thinking",
        badge: "檢驗與回顧",
        content: `
          <div class="quiz-container">
            <div class="quiz-question">
              <h4><i class="fas fa-question-circle"></i> 測驗題：面試官提問：「如果你被錄取後，發現直屬主管分配的工作不公平，你會怎麼處理？」這屬於何種類型的面試提問？</h4>
              <div class="quiz-options">
                <div class="quiz-option correct-opt" onclick="selectQuizOption(this, true)">A. 情境式面試問題 (Situational / Hypothetical) <i class="fas fa-check-circle check-icon"></i></div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">B. 行為式面試問題 (Behavioral / STAR)</div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">C. 背景式調查問題 (Background Verification)</div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">D. 壓力測試問題 (Stress Interview)</div>
              </div>
              <div class="quiz-feedback hidden">
                <div class="alert alert-success">
                  <strong>回答正確！</strong> 詢問「未來假設如果發生某事你會如何做」是情境式提問 (Situational)。而行為式提問 (STAR) 則是探詢「過去具體發生過的真實事件」。
                </div>
              </div>
            </div>
            <div class="discussion-box">
              <h5><i class="fas fa-comments"></i> 課堂討論題</h5>
              <p>假設候選人在履歷與面試中表現得非常自信無懈可擊，身為 HR 你會如何透過資歷查核 (Reference Check) 驗證其真偽？</p>
            </div>
          </div>
        `,
        speakerNotes: "引導全班討論資歷查核之實務技巧。"
      }
    ]
  },
  {
    id: "unit-5",
    unitNumber: "05",
    title: "績效評估與管理",
    englishTitle: "Performance Appraisal & Management",
    badge: "2026 Fall 核心課堂",
    icon: "fa-bullseye",
    duration: "3.5 小時",
    slidesCount: 6,
    htmlFile: "績效評估與管理_2026Fall.html",
    summary: "跳脫形式主義的年度審判，建構目標對齊、持續輔導與激勵賦能的動態閉環；深入剖析 KPI 與 OKR 異同及常見考核心理偏誤。",
    tags: ["績效管理", "KPI與OKR", "評估偏誤", "CFR持續對話", "績效面談"],
    slides: [
      {
        id: "u5-s1",
        type: "cover",
        title: "績效評估與管理",
        subtitle: "Performance Appraisal & Management",
        badge: "單元首頁",
        content: `
          <div class="slide-cover-layout">
            <div class="hero-chip"><i class="fas fa-chart-line"></i> 2026 Fall 核心課堂</div>
            <p class="lead-text">績效管理不是一年一度的「審判與算帳」，而是一個持續對齊目標、激發同仁潛能與輔導賦能的動態對話過程。</p>
            <div class="key-objectives">
              <h4><i class="fas fa-bullseye"></i> 本單元學習核心</h4>
              <ul>
                <li>掌握績效管理的四階段動態循環（設定、輔導、評估、激勵應用）</li>
                <li>深入辨析 KPI（底線監控）與 OKR（挑戰創新）的哲學差異與融合應用</li>
                <li>辨識並防範考核中常見的 6 大心理偏誤（光環效應、近因偏誤、寬鬆傾向）</li>
                <li>掌握持續回饋輔導對話（CFR: Conversations, Feedback, Recognition）</li>
              </ul>
            </div>
          </div>
        `,
        speakerNotes: "績效管理是現代組織賦能與激發動能的核心機制。"
      },
      {
        id: "u5-s2",
        type: "process",
        title: "績效管理四大動態閉環 (The Performance Cycle)",
        subtitle: "持續前進的循環推進系統",
        badge: "管理流程",
        content: `
          <div class="cycle-grid">
            <div class="cycle-card">
              <div class="cycle-num">P1</div>
              <h4>目標規劃 (Planning)</h4>
              <p>主管與同仁於期初共同對齊組織目標，確保符合 SMART 原則，並就成功衡量標準達成共識。</p>
            </div>
            <div class="cycle-card">
              <div class="cycle-num">P2</div>
              <h4>持續輔導 (Coaching)</h4>
              <p>平時保持頻繁的 1-on-1 Check-in，及時排除資源障礙、校正偏差，給予即時建設性反饋。</p>
            </div>
            <div class="cycle-card">
              <div class="cycle-num">P3</div>
              <h4>多元評估 (Reviewing)</h4>
              <p>結合自我總結、主管評核、360 度同儕評價與事實數據紀錄，進行客觀雙向的績效面談。</p>
            </div>
            <div class="cycle-card">
              <div class="cycle-num">P4</div>
              <h4>激勵與發展 (Rewarding)</h4>
              <p>將結果連結至晉升加薪、獎金分配，並針對專業弱項擬定個人發展計畫 (IDP)。</p>
            </div>
          </div>
        `,
        speakerNotes: "沒有日常 Coaching，年底考核一定會引發強烈摩擦。"
      },
      {
        id: "u5-s3",
        type: "comparison",
        title: "核心工具對比：KPI vs. OKR 的本質差異",
        subtitle: "Key Performance Indicators vs. Objectives and Key Results",
        badge: "工具深度辨析",
        content: `
          <div class="comparison-grid">
            <div class="compare-card">
              <div class="card-header">
                <i class="fas fa-tachometer-alt"></i>
                <h3>KPI (關鍵績效指標)</h3>
              </div>
              <ul class="compare-list">
                <li><strong>管理哲學：</strong> 指標儀表板、保底承諾（Must-do）</li>
                <li><strong>制定方式：</strong> 由上而下層層分解下達</li>
                <li><strong>目標設定：</strong> 追求「100% 達成」，可能導致同仁隱瞞實力、不敢冒險</li>
                <li><strong>獎酬連結：</strong> 與年終獎金、調薪極度緊密直接掛鉤</li>
                <li><strong>適用情境：</strong> 成熟業務、例行性營運、追求穩定零失誤作業</li>
              </ul>
            </div>
            <div class="compare-card highlight-border">
              <div class="card-header">
                <i class="fas fa-crosshairs text-success"></i>
                <h3>OKR (目標與關鍵成果)</h3>
              </div>
              <ul class="compare-list">
                <li><strong>管理哲學：</strong> 聚焦方向盤、挑戰極限雄心（Moonshot）</li>
                <li><strong>制定方式：</strong> 雙向互動（50% 由上而下對齊，50% 由下而上自發提出）</li>
                <li><strong>目標設定：</strong> 鼓勵設定大膽挑戰目標，達成率 60%~70% 即為健康狀態</li>
                <li><strong>獎酬連結：</strong> 與獎金脫鉤（避免為拿獎金而故意設低目標）</li>
                <li><strong>適用情境：</strong> 創新研發、新創孵化、動態劇變的市場拓展</li>
              </ul>
            </div>
          </div>
        `,
        speakerNotes: "KPI 與 OKR 雙軌融合實務。"
      },
      {
        id: "u5-s4",
        type: "cards",
        title: "評估失真：主管常見的 6 大考核心理偏誤",
        subtitle: "Cognitive Biases in Performance Appraisals",
        badge: "防範評估陷阱",
        content: `
          <div class="biases-grid">
            <div class="bias-item">
              <h4><i class="fas fa-sun text-warning"></i> 1. 光環效應 (Halo Effect)</h4>
              <p>因為員工某一特質特別討喜（如口才好或學歷亮眼），主管就誤以為他所有工作都無懈可擊。</p>
            </div>
            <div class="bias-item">
              <h4><i class="fas fa-clock text-info"></i> 2. 近因效應 (Recency Bias)</h4>
              <p>主管只記得員工最近 1~2 個月的表現，完全淡化或遺忘了過去大半年期間的辛勞或失誤。</p>
            </div>
            <div class="bias-item">
              <h4><i class="fas fa-smile text-success"></i> 3. 寬鬆傾向 (Leniency Tendency)</h4>
              <p>主管想當好好先生、害怕衝突得罪同仁，全體一律打極高分，導致考績缺乏區別鑑別度。</p>
            </div>
            <div class="bias-item">
              <h4><i class="fas fa-balance-scale text-primary"></i> 4. 趨中效應 (Central Tendency)</h4>
              <p>主管不敢打太高也不敢打太低，所有人一律給 75~80 分中間安全牌，重挫績優同仁士氣。</p>
            </div>
            <div class="bias-item">
              <h4><i class="fas fa-user-friends text-danger"></i> 5. 相似相投 (Similar-to-me)</h4>
              <p>對於性格、母校背景、做事風格或興趣與自己相似的下屬，不自覺給予偏高的主觀評價。</p>
            </div>
            <div class="bias-item">
              <h4><i class="fas fa-layer-group text-secondary"></i> 6. 對比效應 (Contrast Effect)</h4>
              <p>評價某員工時，受到前一位被評價者的極佳或極差表現影響，產生相對失衡的落差評價。</p>
            </div>
          </div>
        `,
        speakerNotes: "建立事實日誌 (Fact Logbook) 與多方校準會議 (Calibration Meeting)。"
      },
      {
        id: "u5-s5",
        type: "framework",
        title: "現代敏捷回饋對話模型：CFR 與 SBI 回饋技巧",
        subtitle: "Conversations, Feedback, Recognition",
        badge: "溝通賦能工具",
        content: `
          <div class="cfr-container">
            <div class="cfr-box">
              <div class="cfr-title"><i class="fas fa-comments"></i> C: Conversations (深度對話)</div>
              <p>高頻率且平等的雙向探討。著重了解員工遭遇的瓶頸、職涯期許，以及主管能提供何種資源協助。</p>
            </div>
            <div class="cfr-box">
              <div class="cfr-title"><i class="fas fa-exchange-alt"></i> F: Feedback (即時反饋)</div>
              <p>及時且具體的雙向回饋。採用 <strong>SBI 模型</strong>（Situation 情境 - Behavior 行為 - Impact 影響），就事論事。</p>
            </div>
            <div class="cfr-box">
              <div class="cfr-title"><i class="fas fa-award"></i> R: Recognition (讚賞認可)</div>
              <p>及時肯定同儕的優質貢獻，哪怕是微小的進步與互助，透過團隊公開表揚加深榮譽感。</p>
            </div>
          </div>
          <div class="takeaway-box" style="margin-top: 1.25rem;">
            <i class="fas fa-quote-left"></i> <strong>SBI 示範句型：</strong>「在昨天對外客戶簡報時（情境S），你直接反駁了工程師的交期說明（行為B），導致客戶質疑我們團隊內部的默契（影響I）。下次能否先私下對齊？」
          </div>
        `,
        speakerNotes: "SBI 回饋技術實務演練。"
      },
      {
        id: "u5-s6",
        type: "quiz",
        title: "隨堂檢測與課後思維題",
        subtitle: "Knowledge Check & Critical Thinking",
        badge: "檢驗與回顧",
        content: `
          <div class="quiz-container">
            <div class="quiz-question">
              <h4><i class="fas fa-question-circle"></i> 測驗題：某單位主管在年底考評時，對同仁整年的平時表現模糊不清，僅依據該員工在 11 月底替公司打贏一場關鍵訴訟的大功，直接給予年度頂級考績。請問這落入了何種評估偏誤？</h4>
              <div class="quiz-options">
                <div class="quiz-option" onclick="selectQuizOption(this, false)">A. 趨中偏誤 (Central Tendency)</div>
                <div class="quiz-option correct-opt" onclick="selectQuizOption(this, true)">B. 近因效應 (Recency Bias) <i class="fas fa-check-circle check-icon"></i></div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">C. 寬鬆傾向 (Leniency Tendency)</div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">D. 相似相投偏誤 (Similar-to-me)</div>
              </div>
              <div class="quiz-feedback hidden">
                <div class="alert alert-success">
                  <strong>恭喜答對！</strong> 僅以年底最近期的突出事件來取代一整年度的完整評價，是標準的「近因效應」。
                </div>
              </div>
            </div>
            <div class="discussion-box">
              <h5><i class="fas fa-comments"></i> 課堂討論題</h5>
              <p>奇異 (GE) 曾因著名的「活力曲線 (Vitality Curve) 淘汰底層 10% 員工」名揚全球，但後來卻宣布廢除。你認為強制常態分配淘汰制在知識密集型企業中有哪些嚴重弊端？</p>
            </div>
          </div>
        `,
        speakerNotes: "引導討論常態分配淘汰制之利弊。"
      }
    ]
  },
  {
    id: "unit-6",
    unitNumber: "06",
    title: "訓練與發展",
    englishTitle: "Training & Development",
    badge: "人才培育",
    icon: "fa-graduation-cap",
    duration: "3 小時",
    slidesCount: 6,
    summary: "掌握 ADDIE 系統化教學設計模型、70-20-10 成人學習法則、柯氏四層級訓練評估 (ROI)，以及雙軌制職涯階梯與接班人計畫 (Succession Planning)。",
    tags: ["ADDIE模型", "柯氏四級評估", "70-20-10法則", "雙軌制職涯", "接班人計畫"],
    slides: [
      {
        id: "u6-s1",
        type: "cover",
        title: "訓練與發展",
        subtitle: "Training & Development",
        badge: "單元首頁",
        content: `
          <div class="slide-cover-layout">
            <div class="hero-chip"><i class="fas fa-book-reader"></i> 組織賦能必修</div>
            <p class="lead-text">「如果我們花錢培育同仁，他們最後離職了怎麼辦？」——「如果我們不培訓他們，他們卻留下來了怎麼辦？」</p>
            <div class="key-objectives">
              <h4><i class="fas fa-bullseye"></i> 本單元學習核心</h4>
              <ul>
                <li>掌握教育訓練規劃的核心架構：ADDIE 五階段教學設計</li>
                <li>落實成人學習「70-20-10」法則，突破課堂講授的局限</li>
                <li>應用 Kirkpatrick 柯氏四層級評估模型精確計算訓練 ROI</li>
                <li>設計雙軌制職涯路徑（管理職 vs. 專業技術職）與關鍵接班人九宮格</li>
              </ul>
            </div>
          </div>
        `,
        speakerNotes: "培訓不是福利或成本，而是對組織未來生存力的策略性投資。"
      },
      {
        id: "u6-s2",
        type: "process",
        title: "系統化教學設計：ADDIE 模型",
        subtitle: "Analysis, Design, Development, Implementation, Evaluation",
        badge: "經典流程",
        content: `
          <div class="addie-flow">
            <div class="addie-step">
              <span class="step-letter">A</span>
              <h4>需求分析 (Analysis)</h4>
              <p>深入診斷組織績效缺口：是員工『不知（知識缺口）』、『不會（技能缺口）』還是『不願意（激勵制度缺口）』？</p>
            </div>
            <div class="addie-step">
              <span class="step-letter">D</span>
              <h4>架構設計 (Design)</h4>
              <p>設定具體可測量的學習目標、擬定課綱藍圖、規劃學習評量方式與課程節奏。</p>
            </div>
            <div class="addie-step">
              <span class="step-letter">D</span>
              <h4>教材開發 (Development)</h4>
              <p>產出簡報、工作手冊、案例教案、情境模擬腳本或數位 E-learning 影音教材。</p>
            </div>
            <div class="addie-step">
              <span class="step-letter">I</span>
              <h4>教學執行 (Implementation)</h4>
              <p>講師授課交付、建立學習社群、提供工作坊實操指導與課堂互動回饋。</p>
            </div>
            <div class="addie-step">
              <span class="step-letter">E</span>
              <h4>成效評估 (Evaluation)</h4>
              <p>課後即時回饋、測驗學習留存度、追蹤行為改變與商業指標改善情況。</p>
            </div>
          </div>
        `,
        speakerNotes: "ADDIE 第一步 Analysis 最重要。"
      },
      {
        id: "u6-s3",
        type: "framework",
        title: "成人學習黃金法則：70-20-10 學習架構",
        subtitle: "The 70-20-10 Model for Learning & Development",
        badge: "學習方法論",
        content: `
          <div class="learning-ratios">
            <div class="ratio-box ratio-70">
              <div class="ratio-percent">70%</div>
              <h4>工作實戰體驗 (Experiential Learning)</h4>
              <ul>
                <li>具挑戰性的專案指派 (Stretch Assignment)</li>
                <li>跨部門輪調、承擔新專案或帶領臨時專案攻關小組</li>
                <li>從錯誤試錯與現場解決難題中累積實戰智慧</li>
              </ul>
            </div>
            <div class="ratio-box ratio-20">
              <div class="ratio-percent">20%</div>
              <h4>社交人際回饋 (Social / Relationship)</h4>
              <ul>
                <li>高階主管一對一教練輔導 (Executive Coaching)</li>
                <li>資深學長姐導師制 (Mentorship)</li>
                <li>同儕觀摩學習、跨領域讀書會與 360 度回饋反思</li>
              </ul>
            </div>
            <div class="ratio-box ratio-10">
              <div class="ratio-percent">10%</div>
              <h4>正式課堂教育 (Formal Training)</h4>
              <ul>
                <li>實體工作坊、外部專業認證證照課程</li>
                <li>線上微學習 (Micro-learning) 影片</li>
                <li>管理理論框架研習與經典個案分析</li>
              </ul>
            </div>
          </div>
          <div class="takeaway-box">
            <i class="fas fa-lightbulb"></i> <strong>教學啟發：</strong> HR 不能把 90% 的心力只花在「辦課堂講座（10%）」上，而應重點搭建「工作現場教練與挑戰舞台（70% 與 20%）」。
          </div>
        `,
        speakerNotes: "說明工作實務轉移的重要性。"
      },
      {
        id: "u6-s4",
        type: "framework",
        title: "柯氏四層級訓練評估 (Kirkpatrick Model)",
        subtitle: "衡量教育訓練成效與投資報酬率的國際標準",
        badge: "成效衡量與ROI",
        content: `
          <div class="kirkpatrick-pyramid">
            <div class="pyr-level level-4">
              <div class="pyr-header">
                <span class="badge">Level 4</span>
                <h4>成果層 (Results) ｜ 商業實質回報與 ROI</h4>
              </div>
              <p>評估整體商業指標改善：營收成長、客戶滿意度提升、產品良率增加、關鍵人才流失率下降。最高難度也最具商業說服力。</p>
            </div>
            <div class="pyr-level level-3">
              <div class="pyr-header">
                <span class="badge">Level 3</span>
                <h4>行為層 (Behavior) ｜ 工作現場行為轉移</h4>
              </div>
              <p>評估員工返回工作崗位 3~6 個月後，是否真正展現新行為與新工作方法？通常由直屬主管或同儕進行行為檢核表評估。</p>
            </div>
            <div class="pyr-level level-2">
              <div class="pyr-header">
                <span class="badge">Level 2</span>
                <h4>學習層 (Learning) ｜ 知識吸收與技能精進</h4>
              </div>
              <p>透過課前課後測驗、實作演練考核、專業認證考試，衡量學員是否真正理解並掌握教學內容。</p>
            </div>
            <div class="pyr-level level-1">
              <div class="pyr-header">
                <span class="badge">Level 1</span>
                <h4>反應層 (Reaction) ｜ 滿意度與學員感受</h4>
              </div>
              <p>俗稱「微笑問卷」：課後即時調查學員對講師台風、教材講義、場地餐點的滿意度與實用性評價。</p>
            </div>
          </div>
        `,
        speakerNotes: "鼓勵 HR 主管朝 Level 3 與 Level 4 邁進。"
      },
      {
        id: "u6-s5",
        type: "cards",
        title: "雙軌制職涯路徑與人才九宮格 (9-Box Grid)",
        subtitle: "Career Ladders & Succession Planning",
        badge: "梯隊與接班人建設",
        content: `
          <div class="career-dual-track">
            <div class="track-card">
              <h4><i class="fas fa-sitemap"></i> 管理職路徑 (Management Track)</h4>
              <p>專注於團隊帶領、跨部門資源協調、團隊激勵與組織策略營運。</p>
              <div class="ladder-steps">
                <span>基層主管 (Lead)</span> → <span>部門經理 (Manager)</span> → <span>協理/總監 (Director)</span> → <span>副總/副總裁 (VP)</span>
              </div>
            </div>
            <div class="track-card">
              <h4><i class="fas fa-microscope"></i> 專業/技術職路徑 (Individual Contributor, IC)</h4>
              <p>提供技術架構師、科學家、研發大師同等職級與高薪待遇，無須強迫其轉任管理職。</p>
              <div class="ladder-steps">
                <span>資深專員 (Senior)</span> → <span>技術主任 (Staff)</span> → <span>主任工程師 (Principal)</span> → <span>研究員/院士 (Fellow)</span>
              </div>
            </div>
          </div>
          <div class="nine-box-intro" style="margin-top: 1.25rem;">
            <h4><i class="fas fa-th"></i> 人才九宮格 (9-Box Talent Grid)</h4>
            <p>橫軸為「當前績效 (Performance)」，縱軸為「未來潛力 (Potential)」。右上角（高績效 × 高潛力）即為企業的核心接班人 (Stars)，需給予專屬高階教練指導與重大業務輪調。</p>
          </div>
        `,
        speakerNotes: "雙軌制能打破彼得原理。"
      },
      {
        id: "u6-s6",
        type: "quiz",
        title: "隨堂檢測與課後思維題",
        subtitle: "Knowledge Check & Critical Thinking",
        badge: "檢驗與回顧",
        content: `
          <div class="quiz-container">
            <div class="quiz-question">
              <h4><i class="fas fa-question-circle"></i> 測驗題：某公司人資部門調查新進人員培訓後的課堂問卷得分高達 96 分，學員表示講師風趣幽默，請問這屬於柯氏四級評估中的哪一層級？</h4>
              <div class="quiz-options">
                <div class="quiz-option correct-opt" onclick="selectQuizOption(this, true)">A. Level 1 反應層 (Reaction) <i class="fas fa-check-circle check-icon"></i></div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">B. Level 2 學習層 (Learning)</div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">C. Level 3 行為層 (Behavior)</div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">D. Level 4 成果層 (Results)</div>
              </div>
              <div class="quiz-feedback hidden">
                <div class="alert alert-success">
                  <strong>回答正確！</strong> 課後調查滿意度與喜好度的問卷屬於第一級「反應層 (Reaction)」。
                </div>
              </div>
            </div>
            <div class="discussion-box">
              <h5><i class="fas fa-comments"></i> 課堂討論題</h5>
              <p>在 AI 知識隨手可得的時代，傳統由講師單向講授的訓練模式受到嚴峻挑戰，未來的企業培訓部門應該轉型為什麼角色？</p>
            </div>
          </div>
        `,
        speakerNotes: "引導探討由 Trainer 轉型為 Facilitator。"
      }
    ]
  },
  {
    id: "unit-7",
    unitNumber: "07",
    title: "薪酬管理",
    englishTitle: "Compensation Management",
    badge: "薪酬與激勵",
    icon: "fa-money-bill-wave",
    duration: "3 小時",
    slidesCount: 6,
    summary: "建立兼顧外部競爭性與內部公平性的全面薪酬體系，深入 3P 薪酬哲學、職位評價、薪資結構線設計與長短期股權激勵工具。",
    tags: ["薪酬管理", "3P哲學", "薪資結構線", "股票激勵", "內部公平性"],
    slides: [
      {
        id: "u7-s1",
        type: "cover",
        title: "薪酬管理",
        subtitle: "Compensation Management",
        badge: "單元首頁",
        content: `
          <div class="slide-cover-layout">
            <div class="hero-chip"><i class="fas fa-hand-holding-usd"></i> 核心管理專題</div>
            <p class="lead-text">薪酬不只是每月發放的數字，它是企業對同仁價值最直接的衡量與認可。設計良好的薪酬能吸引並留住頂尖高手，糟糕的薪酬則會引發內耗與離職潮。</p>
            <div class="key-objectives">
              <h4><i class="fas fa-bullseye"></i> 本單元學習核心</h4>
              <ul>
                <li>掌握 WorldatWork 全面報酬架構 (Total Rewards) 的五大支柱</li>
                <li>貫徹 3P 薪酬哲學：為職位付薪 (Position)、為能力付薪 (Person)、為績效付薪 (Performance)</li>
                <li>設計薪資結構線、薪資級距頻寬 (Spread) 與比較率 (Compa-Ratio)</li>
                <li>靈活運用員工認股權 (Stock Option)、限制型股票 (RSU) 與彈性福利</li>
              </ul>
            </div>
          </div>
        `,
        speakerNotes: "薪酬管理是 HR 中量化程度最高、直接影響經營損益的領域。"
      },
      {
        id: "u7-s2",
        type: "framework",
        title: "WorldatWork 全面報酬架構 (Total Rewards)",
        subtitle: "超越單純薪水的整體價值組合",
        badge: "國際標準架構",
        content: `
          <div class="rewards-architecture">
            <div class="reward-pillar rp-1">
              <div class="rp-icon"><i class="fas fa-wallet"></i></div>
              <h4>1. 薪資 (Compensation)</h4>
              <p>固定本薪、主管加給、專業津貼、伙食交通補助、專案業績獎金與年終分紅。</p>
            </div>
            <div class="reward-pillar rp-2">
              <div class="rp-icon"><i class="fas fa-shield-alt"></i></div>
              <h4>2. 福利 (Benefits)</h4>
              <p>法定勞健保與勞退金、高額團體醫療保險、定期高階健檢、帶薪病假與育兒補助。</p>
            </div>
            <div class="reward-pillar rp-3">
              <div class="rp-icon"><i class="fas fa-balance-scale-right"></i></div>
              <h4>3. 身心福祉 (Well-being)</h4>
              <p>彈性工時、混合遠距辦公 (WFH)、心理諮商專線 (EAP)、人體工學升降辦公桌。</p>
            </div>
            <div class="reward-pillar rp-4">
              <div class="rp-icon"><i class="fas fa-trophy"></i></div>
              <h4>4. 認可表揚 (Recognition)</h4>
              <p>季度之星、年度模範同仁獎、即時專案嘉獎、點數兌換同儕感謝平台。</p>
            </div>
            <div class="reward-pillar rp-5">
              <div class="rp-icon"><i class="fas fa-user-graduate"></i></div>
              <h4>5. 發展機會 (Development)</h4>
              <p>外部證照與學分補助、一對一教練輔導、跨領域輪調與清晰透明的升遷路徑。</p>
            </div>
          </div>
        `,
        speakerNotes: "非金錢報酬往往具有更深遠的留任效應。"
      },
      {
        id: "u7-s3",
        type: "framework",
        title: "現代薪酬設計基石：3P 薪酬哲學",
        subtitle: "Pay for Position, Pay for Person, Pay for Performance",
        badge: "核心設計哲學",
        content: `
          <div class="three-p-grid">
            <div class="p-card">
              <div class="p-header">
                <span class="p-tag">Position</span>
                <h4>為職位付薪 (Pay for Position)</h4>
              </div>
              <p>根據職位在組織內的責任重大度、決策風險與專業門檻核給底薪基礎。</p>
              <div class="p-method">
                <strong>衡量工具：</strong> 職位評價系統（如美世 Mercer 職位評估、Hay 點因素法）。
              </div>
            </div>
            <div class="p-card">
              <div class="p-header">
                <span class="p-tag">Person</span>
                <h4>為能力付薪 (Pay for Person)</h4>
              </div>
              <p>根據員工個人所具備的稀缺技能、關鍵證照與專業資歷給予專業加給定價。</p>
              <div class="p-method">
                <strong>衡量工具：</strong> 技能評鑑 (Skill-based Pay)、專業資歷加給體系。
              </div>
            </div>
            <div class="p-card">
              <div class="p-header">
                <span class="p-tag">Performance</span>
                <h4>為績效付薪 (Pay for Performance)</h4>
              </div>
              <p>根據員工或團隊實際貢獻的商業戰果與超額目標，發放彈性浮動分紅。</p>
              <div class="p-method">
                <strong>衡量工具：</strong> 績效獎金、專案分紅、超額利潤分享計畫。
              </div>
            </div>
          </div>
        `,
        speakerNotes: "3P 薪酬哲學詳細說明。"
      },
      {
        id: "u7-s4",
        type: "process",
        title: "薪資結構線與職級頻寬設計",
        subtitle: "Salary Midpoint, Range Spread & Compa-Ratio",
        badge: "量化技術實務",
        content: `
          <div class="salary-structure-box">
            <div class="salary-box-demo">
              <div class="pay-range grade-1">
                <span class="grade-label">職等 5 (資深專員)</span>
                <div class="range-bar">
                  <span>Min: 50K</span>
                  <span>中位數 (P50): 65K</span>
                  <span>Max: 80K</span>
                </div>
              </div>
              <div class="pay-range grade-2">
                <span class="grade-label">職等 6 (副理 / 專家)</span>
                <div class="range-bar">
                  <span>Min: 62K</span>
                  <span>中位數 (P50): 82K</span>
                  <span>Max: 102K</span>
                </div>
              </div>
              <div class="pay-range grade-3">
                <span class="grade-label">職等 7 (部經理)</span>
                <div class="range-bar">
                  <span>Min: 85K</span>
                  <span>中位數 (P50): 110K</span>
                  <span>Max: 140K</span>
                </div>
              </div>
            </div>
            <div class="structure-terms">
              <h4>關鍵專業術語：</h4>
              <ul>
                <li><strong>市場定位政策：</strong> 領先策略 (P75)、市場齊平 (P50)、滯後策略 (P25)。</li>
                <li><strong>級距頻寬 (Spread)：</strong> (Max - Min) / Min，基層約 30%~40%，高階可達 50%~80%。</li>
                <li><strong>職等重疊度 (Overlap)：</strong> 相鄰職等薪資交集，允許卓越資深基層薪資高於菜鳥主管。</li>
                <li><strong>比較率 (Compa-Ratio, CR)：</strong> 實際薪資 ÷ 職等中位數。大於 1 代表高於中位數。</li>
              </ul>
            </div>
          </div>
        `,
        speakerNotes: "薪資結構線與 Compa-Ratio 控管。"
      },
      {
        id: "u7-s5",
        type: "cards",
        title: "關鍵留才利器：長期股權激勵工具 (LTI)",
        subtitle: "Stock Options, RSUs, and Employee Stock Trusts",
        badge: "高階與關鍵留才",
        content: `
          <div class="equity-grid">
            <div class="equity-card">
              <h4><i class="fas fa-ticket-alt text-primary"></i> 員工認股權 (Stock Options)</h4>
              <p>約定在未來特定期間內，得以固定「認購價」購買公司股票的權利。股價大漲時享有豐厚資本利得，常見於早期未上市高成長新創。</p>
            </div>
            <div class="equity-card">
              <h4><i class="fas fa-gem text-success"></i> 限制型股票 (RSU)</h4>
              <p>公司直接無償或以面額發放實體股票給員工，但設有分年閉鎖解鎖條件（Vesting Schedule，通常分 4 年每年成熟 25%）。兼具金手銬與價值共享。</p>
            </div>
            <div class="equity-card">
              <h4><i class="fas fa-piggy-bank text-warning"></i> 員工持股信託 (ESOP)</h4>
              <p>員工每月自薪資提撥一定金額定期定額購買自家股票，公司給予等額或一定比例之公司贊助獎勵金，促進全員長期退休財富累積。</p>
            </div>
          </div>
        `,
        speakerNotes: "長期激勵金手銬機制。"
      },
      {
        id: "u7-s6",
        type: "quiz",
        title: "隨堂檢測與課後思維題",
        subtitle: "Knowledge Check & Critical Thinking",
        badge: "檢驗與回顧",
        content: `
          <div class="quiz-container">
            <div class="quiz-question">
              <h4><i class="fas fa-question-circle"></i> 測驗題：某資深工程師目前的薪資為 80,000 元，該職等的薪資中位數 (Midpoint) 為 100,000 元，請問他的比較率 (Compa-Ratio) 是多少？</h4>
              <div class="quiz-options">
                <div class="quiz-option correct-opt" onclick="selectQuizOption(this, true)">A. 0.80 (80%) <i class="fas fa-check-circle check-icon"></i></div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">B. 1.25 (125%)</div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">C. 0.20 (20%)</div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">D. 1.00 (100%)</div>
              </div>
              <div class="quiz-feedback hidden">
                <div class="alert alert-success">
                  <strong>計算完全正確！</strong> Compa-Ratio = 實際薪資 (80K) ÷ 職等中位數 (100K) = 0.80。代表該員工薪資明顯落後市場中位數，若其績效優異應列為優先調薪名單。
                </div>
              </div>
            </div>
            <div class="discussion-box">
              <h5><i class="fas fa-comments"></i> 課堂討論題</h5>
              <p>近年推行薪資透明法令對傳統企業薪酬保密文化帶來哪些挑戰與效益？</p>
            </div>
          </div>
        `,
        speakerNotes: "薪資透明化議題討論。"
      }
    ]
  },
  {
    id: "unit-8",
    unitNumber: "08",
    title: "國際人力資源管理",
    englishTitle: "International Human Resource Management (IHRM)",
    badge: "全球視野",
    icon: "fa-globe-americas",
    duration: "3.5 小時",
    slidesCount: 6,
    summary: "跨越國界的人才戰略！探討 EPRG 跨國導向模型、外派人員管理 (Expatriate Management)、跨文化溝通 (Hofstede 六維度) 及國際薪酬平衡表法。",
    tags: ["國際HRM", "EPRG模型", "外派人員", "跨文化管理", "平衡表法"],
    slides: [
      {
        id: "u8-s1",
        type: "cover",
        title: "國際人力資源管理",
        subtitle: "International Human Resource Management (IHRM)",
        badge: "單元首頁",
        content: `
          <div class="slide-cover-layout">
            <div class="hero-chip"><i class="fas fa-globe"></i> 全球化經營必修</div>
            <p class="lead-text">企業跨國擴張的成敗，往往不取決於資本與技術，而取決於能否跨越文化藩籬、建立全球化人才供應鏈與跨國治理體系。</p>
            <div class="key-objectives">
              <h4><i class="fas fa-bullseye"></i> 本單元學習核心</h4>
              <ul>
                <li>掌握跨國企業國際化戰略導向：Perlmutter 的 EPRG 模型</li>
                <li>深入解析外派人員 (Expatriates) 的選拔、行前跨文化培訓與返國調適</li>
                <li>應用 Hofstede 文化六維度理論破解跨國團隊溝通障礙</li>
                <li>設計國際外派薪酬體系：資產負債平衡表法 (Balance Sheet Approach)</li>
              </ul>
            </div>
          </div>
        `,
        speakerNotes: "開場強調：台積電、聯發科等台灣企業海外設廠（美、日、德）時，最嚴峻的挑戰就是跨文化管理與法規制度差異。"
      },
      {
        id: "u8-s2",
        type: "framework",
        title: "跨國企業策略導向：Perlmutter EPRG 模型",
        subtitle: "Ethnocentric, Polycentric, Regiocentric, Geocentric",
        badge: "全球戰略導向",
        content: `
          <div class="traits-grid">
            <div class="trait-item">
              <h4><i class="fas fa-flag text-danger"></i> 民族中心 (Ethnocentric)</h4>
              <p><strong>母國優先：</strong> 海外子公司核心關鍵職位皆由母國派遣人員 (PCN) 擔任。強調母國總部控制與標準化，但易產生文化水土不服。</p>
            </div>
            <div class="trait-item">
              <h4><i class="fas fa-map-marker-alt text-primary"></i> 多中心 (Polycentric)</h4>
              <p><strong>在地自主：</strong> 海外子公司主要由當地人 (HCN) 擔任主管。高度適應當地法規與文化，但子公司間缺乏協同交流。</p>
            </div>
            <div class="trait-item">
              <h4><i class="fas fa-network-wired text-success"></i> 全球中心 (Geocentric)</h4>
              <p><strong>全球選秀：</strong> 不分國籍，全球範圍內任人唯賢 (TCN / 全球公民)。能創造最大協同效應，但管理難度與薪酬協調成本極高。</p>
            </div>
          </div>
          <div class="takeaway-box" style="margin-top: 1.25rem;">
            <i class="fas fa-compass"></i> <strong>地區中心 (Regiocentric)：</strong> 在特定地理區域（如亞太區、歐盟區）內進行資源整合與跨國人才輪調。
          </div>
        `,
        speakerNotes: "引導學生思考：台灣多數跨國製造業在海外設廠初期偏向 Ethnocentric，但長期必須轉型為 Polycentric 或 Geocentric。"
      },
      {
        id: "u8-s3",
        type: "process",
        title: "外派人員 (Expatriate) 成功全週期管理",
        subtitle: "Selection, Cross-Cultural Training & Repatriation",
        badge: "外派實務運作",
        content: `
          <div class="star-grid">
            <div class="star-card">
              <div class="star-letter s"><i class="fas fa-user-check"></i></div>
              <h4>1. 科學嚴謹選拔</h4>
              <p class="star-desc">不能只看專業技術！更關鍵是「文化敏銳度、情緒韌性 (EQ) 與配偶/家庭支持度」。</p>
            </div>
            <div class="star-card">
              <div class="star-letter t"><i class="fas fa-chalkboard-teacher"></i></div>
              <h4>2. 行前跨文化培訓</h4>
              <p class="star-desc">語言強化、在地商業禮儀、當地法律風俗與模擬情境適應演練。</p>
            </div>
            <div class="star-card">
              <div class="star-letter a"><i class="fas fa-hands-helping"></i></div>
              <h4>3. 在地支持網絡</h4>
              <p class="star-desc">指派母國導師 (Home Mentor)、提供眷屬安頓補助、子女就學與心理諮商。</p>
            </div>
            <div class="star-card">
              <div class="star-letter r"><i class="fas fa-undo-alt"></i></div>
              <h4>4. 返國生涯安置</h4>
              <p class="star-desc">提前半年規劃返國職位，避免「逆文化衝擊 (Reverse Culture Shock)」導致外派精英歸國後離職。</p>
            </div>
          </div>
        `,
        speakerNotes: "外派失敗的第一大原因常常不是員工個人技術不夠，而是眷屬無法適應當地生活導致家庭壓力過大。"
      },
      {
        id: "u8-s4",
        type: "cards",
        title: "Hofstede 霍夫斯泰德：國家文化六大維度",
        subtitle: "Cultural Dimensions in International Business",
        badge: "跨文化溝通框架",
        content: `
          <div class="two-col-grid">
            <div class="info-card">
              <ul class="styled-bullet">
                <li><strong>權力距離 (Power Distance)：</strong> 社會對階級威權的接受度。亞洲與中東權力距離高；歐美強調平等與授權。</li>
                <li><strong>個人主義 vs. 集體主義 (Individualism)：</strong> 歐美注重個人自我實現；亞洲注重團隊和諧與組織榮譽。</li>
                <li><strong>陽剛 vs. 陰柔 (Masculinity)：</strong> 陽剛文化重視競爭績效；陰柔文化重視生活品質與人際關懷。</li>
              </ul>
            </div>
            <div class="info-card">
              <ul class="styled-bullet">
                <li><strong>不確定性規避 (Uncertainty Avoidance)：</strong> 日本、德國規避度高，重視 SOP 與合約細節；英美容忍度高，擁抱彈性冒險。</li>
                <li><strong>長期導向 (Long-term Orientation)：</strong> 東亞注重儲蓄、毅力與長遠投資；西方偏向看重短期季度財報回報。</li>
                <li><strong>自身放縱 vs. 约束 (Indulgence)：</strong> 衡量社會成員享受生活與追求娛樂慾望的自由程度。</li>
              </ul>
            </div>
          </div>
        `,
        speakerNotes: "分享 Hofstede 模型在跨國管理談判、績效評估與溝通時的關鍵應用。"
      },
      {
        id: "u8-s5",
        type: "process",
        title: "外派薪酬黃金標準：資產負債平衡表法",
        subtitle: "The Balance Sheet Approach to Expatriate Compensation",
        badge: "國際薪酬實務",
        content: `
          <div class="case-study-box">
            <div class="case-header">
              <i class="fas fa-balance-scale"></i>
              <h4>平衡表法核心精神：維持外派人員在母國的原有購買力水準</h4>
            </div>
            <div class="case-body">
              <div class="case-col">
                <h5><i class="fas fa-plus-circle text-primary"></i> 核心四大薪酬板塊</h5>
                <ul>
                  <li><strong>基本薪資 (Base Salary)：</strong> 與母國同等職等對齊。</li>
                  <li><strong>生活費差額加給 (COLA)：</strong> 補貼當地昂貴物價。</li>
                  <li><strong>海外艱苦與風險津貼 (Hardship Allowance)：</strong> 補貼衛生、治安條件。</li>
                  <li><strong>住房與子女教育補助：</strong> 提供安全居所與國際學校學費。</li>
                </ul>
              </div>
              <div class="case-col">
                <h5><i class="fas fa-shield-alt text-success"></i> 稅務平衡原則 (Tax Equalization)</h5>
                <p>公司保證外派人員所負擔的所得稅，不超過其若留在母國原本應繳納的稅額。由公司吸收或退補國際跨國雙重稅負差額。</p>
              </div>
            </div>
          </div>
        `,
        speakerNotes: "講解 Tax Equalization 是跨國人資主管計算外派預算時最重要的概念。"
      },
      {
        id: "u8-s6",
        type: "quiz",
        title: "課程全系列結業檢測與反思",
        subtitle: "Final Capstone & Reflection",
        badge: "全課結業",
        content: `
          <div class="quiz-container">
            <div class="quiz-question">
              <h4><i class="fas fa-question-circle"></i> 測驗題：某跨國科技集團在開拓各國海外分公司時，全面堅持各國總經理必須從台灣母公司總部派遣資深主管擔任，且嚴格執行總部標準作業手冊，這屬於 EPRG 模型中的哪種導向？</h4>
              <div class="quiz-options">
                <div class="quiz-option correct-opt" onclick="selectQuizOption(this, true)">A. 民族中心導向 (Ethnocentric) <i class="fas fa-check-circle check-icon"></i></div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">B. 多中心導向 (Polycentric)</div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">C. 全球中心導向 (Geocentric)</div>
                <div class="quiz-option" onclick="selectQuizOption(this, false)">D. 地區中心導向 (Regiocentric)</div>
              </div>
              <div class="quiz-feedback hidden">
                <div class="alert alert-success">
                  <strong>回答正確！</strong> 以母國經驗為主導、海外核心職位皆由母國人員擔任，是標準的「民族中心導向 (Ethnocentric)」。
                </div>
              </div>
            </div>
            <div class="capstone-congratulations">
              <div class="congrats-icon"><i class="fas fa-medal"></i></div>
              <h3>恭喜完成國立高雄師範大學人力與知識管理研究所《人力資源管理》八大主題！</h3>
              <p>從戰略思維、組織行為、工作分析、招募甄選、績效管理、培訓發展、薪酬管理到國際人力資源管理，建構完整專業的人力資本卓越地圖。</p>
            </div>
          </div>
        `,
        speakerNotes: "總結全課，勉勵學生以知行合一的精神，在各行各業展現高師大人知所的領導風采！"
      }
    ]
  }
];
