/**
 * 人力資源管理 (HRM) 大學學院風門戶主控制器
 * 支援首頁視角 (Academic Home Portal) 與簡報演講廳 (Lecture Hall) 雙向無縫切換
 */

class HRMApp {
  constructor() {
    this.currentView = "portal";     // "portal" (主頁) 或 "lecture" (演講廳)
    this.currentUnitId = "unit-1";
    this.viewMode = "presentation";  // "presentation" (投影片) 或 "handout" (講義)
    this.deckSubMode = "embedded";    // "embedded" (HTML 簡報) 或 "interactive" (導讀測驗)
    this.searchQuery = "";

    // DOM 元素引用
    this.portalView = document.getElementById("portal-view");
    this.lectureHallView = document.getElementById("lecture-hall-view");
    this.curriculumCardsContainer = document.getElementById("curriculum-cards-container");
    this.sidebarUnitList = document.getElementById("sidebar-unit-list");
    this.searchInput = document.getElementById("search-units-input");
    this.themeToggleBtn = document.getElementById("theme-toggle-btn");

    // 導航按鈕
    this.menuHomeLink = document.getElementById("menu-home-link");
    this.brandHomeLink = document.getElementById("brand-home-link");
    this.btnEnterLectureHall = document.getElementById("btn-enter-lecture-hall");
    this.btnHeroLaunch = document.getElementById("btn-hero-launch");
    this.btnBackHome = document.getElementById("btn-back-home");
    this.navDropdownMenu = document.getElementById("nav-dropdown-menu");

    // 簡報與內嵌元素
    this.deckModeBar = document.getElementById("deck-mode-bar");
    this.btnModeEmbedded = document.getElementById("btn-mode-embedded");
    this.btnModeInteractive = document.getElementById("btn-mode-interactive");
    this.embeddedDeckContainer = document.getElementById("embedded-deck-container");
    this.embeddedIframe = document.getElementById("embedded-iframe");
    this.embeddedDeckTitle = document.getElementById("embedded-deck-title");
    this.btnOpenNewTab = document.getElementById("btn-open-new-tab");
    this.btnEmbeddedFullscreen = document.getElementById("btn-embedded-fullscreen");

    this.presentationContainer = document.getElementById("presentation-container");
    this.handoutContainer = document.getElementById("handout-container");
    this.tabPresentation = document.getElementById("tab-presentation-view");
    this.tabHandout = document.getElementById("tab-handout-view");

    this.activeUnitBadge = document.getElementById("active-unit-badge");
    this.activeUnitTitle = document.getElementById("active-unit-title");

    this.shortcutsModal = document.getElementById("shortcuts-modal");
    this.openShortcutsBtn = document.getElementById("btn-open-shortcuts");
    this.closeShortcutsBtn = document.getElementById("btn-close-shortcuts");
    this.slideShortcutsBtn = document.getElementById("btn-slide-shortcuts");
    this.deckShortcutsBtn = document.getElementById("btn-deck-shortcuts");
    this.drawerShortcutsBtn = document.getElementById("btn-drawer-shortcuts");

    // 載具智慧偵測與標籤引用
    this.deviceModeBadge = document.getElementById("device-mode-badge");
    this.deviceModeText = document.getElementById("device-mode-text");
    this.drawerDeviceName = document.getElementById("drawer-device-name");
    this.currentDeviceMode = "desktop";

    // 行動版側邊滑動抽屜引用
    this.mobileToggleBtn = document.getElementById("mobile-toggle-btn");
    this.mobileNavDrawer = document.getElementById("mobile-nav-drawer");
    this.mobileDrawerOverlay = document.getElementById("mobile-drawer-overlay");
    this.btnCloseDrawer = document.getElementById("btn-close-drawer");
    this.drawerHomeLink = document.getElementById("drawer-home-link");
    this.drawerLectureLink = document.getElementById("drawer-lecture-link");
    this.drawerUnitsList = document.getElementById("drawer-units-list");

    // 行動/平板快速主題切換
    this.mobileUnitSelector = document.getElementById("mobile-unit-selector");

    // 線上瀏覽聲明與 Toast 提示
    this.academyToast = document.getElementById("academy-toast");
    this.toastMessage = document.getElementById("toast-message");
    this.toastTimeout = null;

    this.initDeviceDetection();
    this.initPrintInterception();
    this.initTheme();
    this.initPresentation();
    this.renderPortalCurriculum();
    this.renderSidebarUnits();
    this.renderDrawerUnits();
    this.populateMobileUnitSelector();
    this.initEventListeners();

    // 檢查網址錨點或 LocalStorage 狀態
    const savedUnit = localStorage.getItem("hrm_last_unit") || "unit-1";
    this.selectUnit(savedUnit, false);
  }

  /**
   * 初始化簡報播放引擎
   */
  initPresentation() {
    window.presentation = new SlidePresentation();
  }

  /**
   * 初始化深淺色主題
   */
  initTheme() {
    const savedTheme = localStorage.getItem("hrm_theme") || "light";
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      this.updateThemeIcon(true);
    } else {
      document.body.classList.remove("dark-mode");
      this.updateThemeIcon(false);
    }
  }

  toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("hrm_theme", isDark ? "dark" : "light");
    this.updateThemeIcon(isDark);
  }

  updateThemeIcon(isDark) {
    if (!this.themeToggleBtn) return;
    const icon = this.themeToggleBtn.querySelector("i");
    if (icon) {
      icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
    }
  }

  /**
   * 智慧載具自動偵測與版面調整引擎 (Device Detection & Adaptive Layouts)
   * 自動判別：電腦 (Desktop > 1024px)、平板 (Tablet 768px~1024px)、手機 (Mobile < 768px)
   */
  initDeviceDetection() {
    this.detectAndApplyDeviceMode();
    let resizeTimer = null;
    window.addEventListener("resize", () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.detectAndApplyDeviceMode();
      }, 100);
    });

    window.addEventListener("orientationchange", () => {
      setTimeout(() => {
        this.detectAndApplyDeviceMode();
      }, 150);
    });
  }

  detectAndApplyDeviceMode() {
    const width = window.innerWidth;
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    const isLandscape = window.innerWidth > window.innerHeight;

    let mode = "desktop";
    let label = "電腦版設計";
    let icon = "fas fa-desktop";

    if (width < 768) {
      mode = "mobile";
      label = "手機版設計";
      icon = "fas fa-mobile-alt";
    } else if (width <= 1024) {
      mode = "tablet";
      label = "平板版設計";
      icon = "fas fa-tablet-alt";
    } else {
      mode = "desktop";
      label = "電腦版設計";
      icon = "fas fa-desktop";
    }

    this.currentDeviceMode = mode;

    // 更新 DOM 標籤類別 (html 與 body 均加上)
    const elements = [document.documentElement, document.body];
    elements.forEach(el => {
      el.classList.remove(
        "device-desktop",
        "device-tablet",
        "device-mobile",
        "has-touch",
        "no-touch",
        "orientation-landscape",
        "orientation-portrait"
      );
      el.classList.add(`device-${mode}`);
      el.classList.add(isTouch ? "has-touch" : "no-touch");
      el.classList.add(isLandscape ? "orientation-landscape" : "orientation-portrait");
    });

    // 更新頂部載具指示標籤
    if (this.deviceModeBadge) {
      this.deviceModeBadge.title = `載具智慧判別：已切換至「${label}」 (解析度 ${width}px)`;
    }
    if (this.deviceModeText) {
      this.deviceModeText.innerHTML = `<i class="${icon}"></i> ${label}`;
    }
    if (this.drawerDeviceName) {
      this.drawerDeviceName.textContent = label;
    }
  }

  /**
   * 列印防護與線上專屬瀏覽聲明 (Print Prevention & Toast)
   */
  initPrintInterception() {
    // 覆蓋全域 window.print
    window.print = () => {
      this.showToast("【線上研讀聲明】本課程全部內容僅供線上即時瀏覽研讀，不提供列印與另存 PDF 功能。");
    };

    // 攔截鍵盤 Ctrl+P / Cmd+P
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "p" || e.key === "P")) {
        e.preventDefault();
        e.stopPropagation();
        this.showToast("【線上研讀聲明】本課程全部內容僅供線上即時瀏覽研讀，不提供列印與另存 PDF 功能。");
      }
    }, true);
  }

  showToast(message, duration = 3800) {
    if (!this.academyToast || !this.toastMessage) return;
    this.toastMessage.textContent = message;
    this.academyToast.classList.add("show");

    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.academyToast.classList.remove("show");
    }, duration);
  }

  /**
   * 行動版側邊抽屜導覽控制
   */
  openMobileDrawer() {
    if (this.mobileNavDrawer) {
      this.mobileNavDrawer.classList.add("active");
      this.mobileNavDrawer.setAttribute("aria-hidden", "false");
    }
    if (this.mobileDrawerOverlay) {
      this.mobileDrawerOverlay.classList.add("active");
    }
    document.body.style.overflow = "hidden";
  }

  closeMobileDrawer() {
    if (this.mobileNavDrawer) {
      this.mobileNavDrawer.classList.remove("active");
      this.mobileNavDrawer.setAttribute("aria-hidden", "true");
    }
    if (this.mobileDrawerOverlay) {
      this.mobileDrawerOverlay.classList.remove("active");
    }
    document.body.style.overflow = "";
  }

  renderDrawerUnits() {
    if (!this.drawerUnitsList) return;
    this.drawerUnitsList.innerHTML = "";

    COURSE_MODULES.forEach(module => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `drawer-unit-item ${module.id === this.currentUnitId ? "active" : ""}`;
      btn.innerHTML = `
        <span class="drawer-unit-badge">主題 ${module.unitNumber}</span>
        <span class="drawer-unit-title">${module.title}</span>
        <i class="fas fa-chevron-right drawer-unit-arrow"></i>
      `;
      btn.addEventListener("click", () => {
        this.selectUnit(module.id);
        this.closeMobileDrawer();
        this.switchAppView("lecture");
      });
      this.drawerUnitsList.appendChild(btn);
    });
  }

  populateMobileUnitSelector() {
    if (!this.mobileUnitSelector) return;
    this.mobileUnitSelector.innerHTML = "";
    COURSE_MODULES.forEach(module => {
      const opt = document.createElement("option");
      opt.value = module.id;
      opt.textContent = `單元 ${module.unitNumber} ｜ ${module.title}`;
      this.mobileUnitSelector.appendChild(opt);
    });
    this.mobileUnitSelector.value = this.currentUnitId;
    this.mobileUnitSelector.addEventListener("change", (e) => {
      this.selectUnit(e.target.value);
    });
  }

  /**
   * 切換主頁 (Portal) 與 簡報演講廳 (Lecture Hall) 視角
   */
  switchAppView(targetView) {
    this.currentView = targetView;

    if (targetView === "portal") {
      if (this.portalView) this.portalView.classList.remove("hidden-view");
      if (this.lectureHallView) this.lectureHallView.classList.add("hidden-view");
      if (this.menuHomeLink) this.menuHomeLink.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (this.portalView) this.portalView.classList.add("hidden-view");
      if (this.lectureHallView) this.lectureHallView.classList.remove("hidden-view");
      if (this.menuHomeLink) this.menuHomeLink.classList.remove("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  /**
   * 渲染主頁八大課程主題卡片
   */
  renderPortalCurriculum() {
    if (!this.curriculumCardsContainer) return;
    this.curriculumCardsContainer.innerHTML = "";

    COURSE_MODULES.forEach((module, idx) => {
      const card = document.createElement("div");
      card.className = "curriculum-card";
      card.dataset.unitId = module.id;

      card.innerHTML = `
        <div>
          <div class="curriculum-card-meta">
            <span class="card-topic-badge">主題 ${module.unitNumber}</span>
          </div>
          <div class="curriculum-card-body">
            <h3>${module.title}</h3>
            <div class="en-sub">${module.englishTitle}</div>
            <p>${module.summary}</p>
          </div>
        </div>
        <div class="curriculum-card-footer">
          <button class="btn-open-deck">
            <span>開啟課堂簡報</span> <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      `;

      card.addEventListener("click", () => {
        this.selectUnit(module.id);
        this.switchAppView("lecture");
      });

      this.curriculumCardsContainer.appendChild(card);
    });
  }

  /**
   * 渲染演講廳側邊欄單元目錄
   */
  renderSidebarUnits() {
    if (!this.sidebarUnitList) return;
    this.sidebarUnitList.innerHTML = "";

    const filtered = COURSE_MODULES.filter(m => {
      const q = this.searchQuery.toLowerCase();
      return (
        m.title.toLowerCase().includes(q) ||
        m.englishTitle.toLowerCase().includes(q) ||
        m.tags.some(t => t.toLowerCase().includes(q))
      );
    });

    if (filtered.length === 0) {
      this.sidebarUnitList.innerHTML = `
        <li style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          查無相符單元
        </li>
      `;
      return;
    }

    filtered.forEach(module => {
      const li = document.createElement("li");
      li.className = `dropdown-module-link ${module.id === this.currentUnitId ? "active" : ""}`;
      li.style.cursor = "pointer";
      li.dataset.unitId = module.id;

      if (module.id === this.currentUnitId) {
        li.style.background = "var(--bg-surface-alt)";
        li.style.borderLeftColor = "var(--academy-gold)";
        li.style.fontWeight = "700";
      }

      li.innerHTML = `
        <span class="dropdown-unit-num">${module.unitNumber}</span>
        <div style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          ${module.title}
        </div>
      `;

      li.addEventListener("click", () => {
        this.selectUnit(module.id);
      });

      this.sidebarUnitList.appendChild(li);
    });
  }

  /**
   * 切換選擇指定主題單元
   */
  selectUnit(unitId) {
    this.currentUnitId = unitId;
    localStorage.setItem("hrm_last_unit", unitId);

    const module = COURSE_MODULES.find(m => m.id === unitId);
    if (!module) return;

    // 1. 載入原生簡報
    if (window.presentation) {
      window.presentation.loadUnit(unitId, 0);
    }

    // 2. 處理外部 HTML 簡報
    if (module.htmlFile) {
      if (this.embeddedDeckTitle) {
        this.embeddedDeckTitle.textContent = `${module.title} 課堂簡報網頁`;
      }
      if (this.embeddedIframe) {
        this.embeddedIframe.src = module.htmlFile;
      }
      if (this.btnOpenNewTab) {
        this.btnOpenNewTab.href = module.htmlFile;
      }
      if (this.btnModeEmbedded) {
        this.btnModeEmbedded.style.display = "inline-flex";
      }
      this.setDeckSubMode(this.deckSubMode);
    } else {
      if (this.btnModeEmbedded) {
        this.btnModeEmbedded.style.display = "none";
      }
      this.setDeckSubMode("interactive");
    }

    // 3. 更新側邊欄樣式與行動端選單狀態
    this.renderSidebarUnits();
    if (this.mobileUnitSelector && this.mobileUnitSelector.value !== unitId) {
      this.mobileUnitSelector.value = unitId;
    }
    if (this.drawerUnitsList) {
      this.drawerUnitsList.querySelectorAll(".drawer-unit-item").forEach(item => {
        item.classList.remove("active");
      });
      const targetIdx = COURSE_MODULES.findIndex(m => m.id === unitId);
      if (targetIdx >= 0 && this.drawerUnitsList.children[targetIdx]) {
        this.drawerUnitsList.children[targetIdx].classList.add("active");
      }
    }

    // 4. 更新麵包屑
    this.updateBreadcrumb(module);

    // 5. 若處於講義模式，重新渲染講義
    if (this.viewMode === "handout") {
      this.renderHandoutView(module);
    }
  }

  /**
   * 切換簡報子模式 (內嵌完整 HTML vs 原生導讀簡報)
   */
  setDeckSubMode(subMode) {
    this.deckSubMode = subMode;

    if (subMode === "embedded") {
      if (this.embeddedDeckContainer) this.embeddedDeckContainer.style.display = "flex";
      if (this.presentationContainer) this.presentationContainer.style.display = "none";
      if (this.btnModeEmbedded) this.btnModeEmbedded.classList.add("active");
      if (this.btnModeInteractive) this.btnModeInteractive.classList.remove("active");
    } else {
      if (this.embeddedDeckContainer) this.embeddedDeckContainer.style.display = "none";
      if (this.presentationContainer) this.presentationContainer.style.display = "flex";
      if (this.btnModeEmbedded) this.btnModeEmbedded.classList.remove("active");
      if (this.btnModeInteractive) this.btnModeInteractive.classList.add("active");
    }
  }

  /**
   * 更新麵包屑導航
   */
  updateBreadcrumb(module) {
    if (this.activeUnitBadge) {
      this.activeUnitBadge.textContent = `單元 ${module.unitNumber}`;
    }
    if (this.activeUnitTitle) {
      this.activeUnitTitle.textContent = module.title;
    }
  }

  /**
   * 切換檢視模式 (簡報播放器 vs 講義清單)
   */
  switchViewMode(mode) {
    this.viewMode = mode;

    if (mode === "presentation") {
      if (this.deckModeBar) this.deckModeBar.style.display = "flex";
      this.setDeckSubMode(this.deckSubMode);
      if (this.handoutContainer) this.handoutContainer.style.display = "none";
      if (this.tabPresentation) this.tabPresentation.classList.add("active");
      if (this.tabHandout) this.tabHandout.classList.remove("active");
    } else {
      if (this.deckModeBar) this.deckModeBar.style.display = "none";
      if (this.embeddedDeckContainer) this.embeddedDeckContainer.style.display = "none";
      if (this.presentationContainer) this.presentationContainer.style.display = "none";
      if (this.handoutContainer) this.handoutContainer.style.display = "flex";
      if (this.tabPresentation) this.tabPresentation.classList.remove("active");
      if (this.tabHandout) this.tabHandout.classList.add("active");

      const module = COURSE_MODULES.find(m => m.id === this.currentUnitId);
      if (module) {
        this.renderHandoutView(module);
      }
    }
  }

  /**
   * 渲染講義長條檢視模式 (所有投影片連續展開)
   */
  renderHandoutView(module) {
    if (!this.handoutContainer) return;
    this.handoutContainer.innerHTML = "";

    const header = document.createElement("div");
    header.className = "handout-summary-banner";
    header.style.padding = "1.5rem";
    header.style.background = "var(--bg-surface)";
    header.style.border = "1px solid var(--border-classic)";
    header.style.borderRadius = "var(--radius-md)";
    header.style.marginBottom = "1.5rem";

    const externalBtn = module.htmlFile ? `
      <a href="${module.htmlFile}" target="_blank" class="ctrl-btn" style="text-decoration: none;">
        <i class="fas fa-external-link-alt"></i> 開啟主題簡報
      </a>
    ` : "";

    header.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div>
          <span class="card-topic-badge">主題 ${module.unitNumber} 課堂講義</span>
          <h2 style="font-size: 1.5rem; font-weight: 800; margin-top: 0.4rem; color: var(--text-primary); font-family: var(--font-serif-tc);">${module.title}</h2>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">${module.summary}</p>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
          ${externalBtn}
          <div class="online-only-pill" title="本課程全部內容僅供線上即時研讀">
            <i class="fas fa-lock"></i> 100% 線上專屬研讀
          </div>
        </div>
      </div>
    `;
    this.handoutContainer.appendChild(header);

    module.slides.forEach((slide, idx) => {
      const slideCard = document.createElement("div");
      slideCard.className = "handout-slide-card";
      slideCard.style.border = "1px solid var(--border-classic)";
      slideCard.style.borderRadius = "var(--radius-md)";

      slideCard.innerHTML = `
        <div class="slide-header">
          <div class="slide-title-area">
            <div class="slide-meta-row">
              <span class="slide-badge">${slide.badge || "核心精華"}</span>
              <span class="slide-unit-indicator">投影片 ${idx + 1} of ${module.slides.length}</span>
            </div>
            <h3 class="slide-main-title">${slide.title}</h3>
            ${slide.subtitle ? `<p class="slide-sub-title">${slide.subtitle}</p>` : ""}
          </div>
          <span class="slide-page-indicator">第 ${idx + 1} 頁</span>
        </div>
        <div class="slide-content-body">
          ${slide.content}
        </div>
        ${slide.speakerNotes ? `
          <div style="margin-top: 1.5rem; padding: 1rem; background: var(--bg-surface-alt); border-radius: var(--radius-sm); border-left: 4px solid var(--academy-gold); font-size: 0.85rem; color: var(--text-secondary);">
            <strong style="color: var(--text-gold);"><i class="fas fa-sticky-note"></i> 教授學習備忘錄：</strong>
            ${slide.speakerNotes}
          </div>
        ` : ""}
      `;

      this.handoutContainer.appendChild(slideCard);
    });
  }

  /**
   * 內嵌全螢幕切換
   */
  toggleEmbeddedFullscreen() {
    if (!document.fullscreenElement) {
      if (this.embeddedDeckContainer.requestFullscreen) {
        this.embeddedDeckContainer.requestFullscreen();
      } else if (this.embeddedDeckContainer.webkitRequestFullscreen) {
        this.embeddedDeckContainer.webkitRequestFullscreen();
      }
      this.embeddedDeckContainer.classList.add("fullscreen-mode");
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      this.embeddedDeckContainer.classList.remove("fullscreen-mode");
    }
  }

  /**
   * 註冊各類事件監聽
   */
  initEventListeners() {
    // 1. 視角切換監聽 (主頁 vs 演講廳)
    if (this.brandHomeLink) {
      this.brandHomeLink.addEventListener("click", () => this.switchAppView("portal"));
    }
    if (this.menuHomeLink) {
      this.menuHomeLink.addEventListener("click", () => this.switchAppView("portal"));
    }
    if (this.btnBackHome) {
      this.btnBackHome.addEventListener("click", () => this.switchAppView("portal"));
    }
    if (this.btnEnterLectureHall) {
      this.btnEnterLectureHall.addEventListener("click", () => this.switchAppView("lecture"));
    }
    if (this.btnHeroLaunch) {
      this.btnHeroLaunch.addEventListener("click", () => this.switchAppView("lecture"));
    }

    // 2. 下拉選單中點擊單元直達
    if (this.navDropdownMenu) {
      this.navDropdownMenu.querySelectorAll(".dropdown-module-link").forEach(link => {
        link.addEventListener("click", (e) => {
          const unitId = link.dataset.unit;
          if (unitId) {
            this.selectUnit(unitId);
            this.switchAppView("lecture");
          }
        });
      });
    }

    // 3. 首頁錨點平滑滾動（若當前在演講廳，先切回主頁再滾動）
    ["menu-curriculum-link", "menu-grading-link", "menu-faculty-link", "menu-biblio-link"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("click", (e) => {
          if (this.currentView !== "portal") {
            this.switchAppView("portal");
          }
        });
      }
    });

    // 4. 深淺色主題切換
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener("click", () => this.toggleTheme());
    }

    // 5. 簡報子模式切換 (內嵌 HTML vs 原生簡報)
    if (this.btnModeEmbedded) {
      this.btnModeEmbedded.addEventListener("click", () => this.setDeckSubMode("embedded"));
    }
    if (this.btnModeInteractive) {
      this.btnModeInteractive.addEventListener("click", () => this.setDeckSubMode("interactive"));
    }

    // 6. 內嵌全螢幕
    if (this.btnEmbeddedFullscreen) {
      this.btnEmbeddedFullscreen.addEventListener("click", () => this.toggleEmbeddedFullscreen());
    }

    document.addEventListener("fullscreenchange", () => {
      const isFull = !!document.fullscreenElement;
      if (!isFull && this.embeddedDeckContainer) {
        this.embeddedDeckContainer.classList.remove("fullscreen-mode");
      }
    });

    // 7. 檢視模式切換 (簡報 vs 講義)
    if (this.tabPresentation) {
      this.tabPresentation.addEventListener("click", () => this.switchViewMode("presentation"));
    }
    if (this.tabHandout) {
      this.tabHandout.addEventListener("click", () => this.switchViewMode("handout"));
    }

    // 8. 演講廳搜尋過濾
    if (this.searchInput) {
      this.searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.trim();
        this.renderSidebarUnits();
      });
    }

    // 9. 簡報鍵盤快捷鍵指南 Modal (以按此 icon 再出現)
    const openShortcuts = () => {
      if (this.shortcutsModal) {
        this.shortcutsModal.classList.add("active");
      }
    };
    const closeShortcuts = () => {
      if (this.shortcutsModal) {
        this.shortcutsModal.classList.remove("active");
      }
    };

    if (this.openShortcutsBtn) this.openShortcutsBtn.addEventListener("click", openShortcuts);
    if (this.slideShortcutsBtn) this.slideShortcutsBtn.addEventListener("click", openShortcuts);
    if (this.deckShortcutsBtn) this.deckShortcutsBtn.addEventListener("click", openShortcuts);
    if (this.drawerShortcutsBtn) {
      this.drawerShortcutsBtn.addEventListener("click", () => {
        this.closeMobileDrawer();
        openShortcuts();
      });
    }

    if (this.closeShortcutsBtn) this.closeShortcutsBtn.addEventListener("click", closeShortcuts);
    if (this.shortcutsModal) {
      this.shortcutsModal.addEventListener("click", (e) => {
        if (e.target === this.shortcutsModal) {
          closeShortcuts();
        }
      });
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.shortcutsModal && this.shortcutsModal.classList.contains("active")) {
        closeShortcuts();
      }
    });

    // 支援外部嵌入簡報模式下的 PgUp / PgDn 快速翻頁
    window.addEventListener("keydown", (e) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;
      if (this.currentView === "lecture" && this.deckSubMode === "embedded" && this.embeddedIframe) {
        try {
          const iwin = this.embeddedIframe.contentWindow;
          if (iwin) {
            if (e.key === "PageDown" || e.key === "PgDn" || e.code === "PageDown" || e.keyCode === 34) {
              e.preventDefault();
              iwin.scrollBy({ top: iwin.innerHeight * 0.9, behavior: "smooth" });
            } else if (e.key === "PageUp" || e.key === "PgUp" || e.code === "PageUp" || e.keyCode === 33) {
              e.preventDefault();
              iwin.scrollBy({ top: -iwin.innerHeight * 0.9, behavior: "smooth" });
            }
          }
        } catch (err) {}
      }
    });

    // 10. 行動版側邊滑動抽屜事件監聽
    if (this.mobileToggleBtn) {
      this.mobileToggleBtn.addEventListener("click", () => this.openMobileDrawer());
    }
    if (this.btnCloseDrawer) {
      this.btnCloseDrawer.addEventListener("click", () => this.closeMobileDrawer());
    }
    if (this.mobileDrawerOverlay) {
      this.mobileDrawerOverlay.addEventListener("click", () => this.closeMobileDrawer());
    }
    if (this.drawerHomeLink) {
      this.drawerHomeLink.addEventListener("click", () => {
        this.closeMobileDrawer();
        this.switchAppView("portal");
      });
    }
    if (this.drawerLectureLink) {
      this.drawerLectureLink.addEventListener("click", () => {
        this.closeMobileDrawer();
        this.switchAppView("lecture");
      });
    }
  }
}

// 頁面載入啟動
document.addEventListener("DOMContentLoaded", () => {
  window.app = new HRMApp();
});
