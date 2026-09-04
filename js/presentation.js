/**
 * 互動式簡報播放引擎 (Presentation Engine)
 * 負責投影片的狀態控制、渲染、鍵盤快捷鍵、全螢幕與手勢
 */

class SlidePresentation {
  constructor() {
    this.currentUnit = null;
    this.currentSlideIndex = 0;
    this.isFullscreen = false;
    this.notesVisible = false;

    // DOM 元素引用
    this.container = document.getElementById("presentation-container");
    this.viewport = document.getElementById("slide-viewport");
    this.progressBar = document.getElementById("slide-progress-bar");
    this.slideBadge = document.getElementById("slide-badge");
    this.slideUnitIndicator = document.getElementById("slide-unit-indicator");
    this.slideMainTitle = document.getElementById("slide-main-title");
    this.slideSubTitle = document.getElementById("slide-sub-title");
    this.slidePageIndicator = document.getElementById("slide-page-indicator");
    this.slideContentBody = document.getElementById("slide-content-body");
    
    this.prevBtn = document.getElementById("btn-prev-slide");
    this.nextBtn = document.getElementById("btn-next-slide");
    this.slidePicker = document.getElementById("slide-picker-select");
    this.fullscreenBtn = document.getElementById("btn-toggle-fullscreen");
    this.notesBtn = document.getElementById("btn-toggle-notes");
    this.notesDrawer = document.getElementById("speaker-notes-drawer");
    this.notesContent = document.getElementById("speaker-notes-content");

    this.initEvents();
  }

  /**
   * 初始化事件監聽
   */
  initEvents() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => this.prevSlide());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => this.nextSlide());
    }
    if (this.slidePicker) {
      this.slidePicker.addEventListener("change", (e) => {
        this.goToSlide(parseInt(e.target.value, 10));
      });
    }
    if (this.fullscreenBtn) {
      this.fullscreenBtn.addEventListener("click", () => this.toggleFullscreen());
    }
    if (this.notesBtn) {
      this.notesBtn.addEventListener("click", () => this.toggleSpeakerNotes());
    }

    // 鍵盤導航快捷鍵
    document.addEventListener("keydown", (e) => {
      // 避免在搜尋框輸入時觸發簡報快捷鍵
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;

      // 下一頁快捷鍵: →, Space, PageDown, PgDn (含簡報筆常見鍵值)
      if (
        e.key === "ArrowRight" ||
        e.key === "PageDown" ||
        e.key === "PgDn" ||
        e.code === "PageDown" ||
        e.keyCode === 34 ||
        e.key === " "
      ) {
        e.preventDefault();
        this.nextSlide();
        return;
      }

      // 上一頁快捷鍵: ←, PageUp, PgUp (含簡報筆常見鍵值)
      if (
        e.key === "ArrowLeft" ||
        e.key === "PageUp" ||
        e.key === "PgUp" ||
        e.code === "PageUp" ||
        e.keyCode === 33
      ) {
        e.preventDefault();
        this.prevSlide();
        return;
      }

      switch (e.key) {
        case "f":
        case "F":
          e.preventDefault();
          this.toggleFullscreen();
          break;
        case "n":
        case "N":
          e.preventDefault();
          this.toggleSpeakerNotes();
          break;
        case "Home":
          e.preventDefault();
          this.goToSlide(0);
          break;
        case "End":
          e.preventDefault();
          if (this.currentUnit) {
            this.goToSlide(this.currentUnit.slides.length - 1);
          }
          break;
      }
    });

    // 行動裝置左右滑動 (Touch Swipe) 支援
    let touchStartX = 0;
    let touchEndX = 0;

    if (this.viewport) {
      this.viewport.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      this.viewport.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe(touchStartX, touchEndX);
      }, { passive: true });
    }

    // 監聽全螢幕變化事件
    document.addEventListener("fullscreenchange", () => {
      this.isFullscreen = !!document.fullscreenElement;
      this.updateFullscreenIcon();
    });
  }

  handleSwipe(startX, endX) {
    const threshold = 50; // 最小滑動距離
    if (startX - endX > threshold) {
      // 向左滑動 -> 下一頁
      this.nextSlide();
    } else if (endX - startX > threshold) {
      // 向右滑動 -> 上一頁
      this.prevSlide();
    }
  }

  /**
   * 載入指定單元
   */
  loadUnit(unitId, slideIndex = 0) {
    const module = COURSE_MODULES.find(m => m.id === unitId);
    if (!module) return;

    this.currentUnit = module;
    this.currentSlideIndex = Math.max(0, Math.min(slideIndex, module.slides.length - 1));

    // 更新下拉選單
    this.populateSlidePicker();

    // 渲染目前投影片
    this.renderCurrentSlide();

    // 同步麵包屑
    if (window.app) {
      window.app.updateBreadcrumb(module);
    }
  }

  /**
   * 建立跳頁選單
   */
  populateSlidePicker() {
    if (!this.slidePicker || !this.currentUnit) return;
    this.slidePicker.innerHTML = "";

    this.currentUnit.slides.forEach((slide, idx) => {
      const opt = document.createElement("option");
      opt.value = idx;
      opt.textContent = `${idx + 1}. ${slide.title}`;
      this.slidePicker.appendChild(opt);
    });
  }

  /**
   * 渲染當前投影片
   */
  renderCurrentSlide() {
    if (!this.currentUnit) return;
    const slides = this.currentUnit.slides;
    const slide = slides[this.currentSlideIndex];
    if (!slide) return;

    // 1. 更新頁眉資訊
    if (this.slideBadge) this.slideBadge.textContent = slide.badge || "重點精華";
    if (this.slideUnitIndicator) {
      this.slideUnitIndicator.textContent = `單元 ${this.currentUnit.unitNumber} ｜ ${this.currentUnit.title}`;
    }
    if (this.slideMainTitle) this.slideMainTitle.textContent = slide.title;
    if (this.slideSubTitle) this.slideSubTitle.textContent = slide.subtitle || "";
    if (this.slidePageIndicator) {
      this.slidePageIndicator.textContent = `${this.currentSlideIndex + 1} / ${slides.length}`;
    }

    // 2. 更新內容 HTML
    if (this.slideContentBody) {
      this.slideContentBody.innerHTML = slide.content;
    }

    // 3. 更新進度條
    if (this.progressBar) {
      const progressPercent = ((this.currentSlideIndex + 1) / slides.length) * 100;
      this.progressBar.style.width = `${progressPercent}%`;
    }

    // 4. 更新按鈕啟用狀態
    if (this.prevBtn) this.prevBtn.disabled = this.currentSlideIndex === 0;
    if (this.nextBtn) this.nextBtn.disabled = this.currentSlideIndex === slides.length - 1;

    // 5. 更新跳頁選單值
    if (this.slidePicker) {
      this.slidePicker.value = this.currentSlideIndex;
    }

    // 6. 更新講師講義備忘錄
    if (this.notesContent) {
      this.notesContent.textContent = slide.speakerNotes || "本頁尚無額外補充備忘錄。";
    }

    // 視窗滾動回頂部
    if (this.viewport) {
      this.viewport.scrollTop = 0;
    }
  }

  nextSlide() {
    if (!this.currentUnit) return;
    if (this.currentSlideIndex < this.currentUnit.slides.length - 1) {
      this.currentSlideIndex++;
      this.renderCurrentSlide();
    }
  }

  prevSlide() {
    if (!this.currentUnit) return;
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
      this.renderCurrentSlide();
    }
  }

  goToSlide(index) {
    if (!this.currentUnit) return;
    if (index >= 0 && index < this.currentUnit.slides.length) {
      this.currentSlideIndex = index;
      this.renderCurrentSlide();
    }
  }

  /**
   * 全螢幕切換
   */
  toggleFullscreen() {
    if (!document.fullscreenElement) {
      if (this.container.requestFullscreen) {
        this.container.requestFullscreen();
      } else if (this.container.webkitRequestFullscreen) {
        this.container.webkitRequestFullscreen();
      }
      this.container.classList.add("fullscreen-mode");
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      this.container.classList.remove("fullscreen-mode");
    }
  }

  updateFullscreenIcon() {
    if (!this.fullscreenBtn) return;
    const icon = this.fullscreenBtn.querySelector("i");
    if (!icon) return;

    if (this.isFullscreen) {
      icon.className = "fas fa-compress";
      this.container.classList.add("fullscreen-mode");
    } else {
      icon.className = "fas fa-expand";
      this.container.classList.remove("fullscreen-mode");
    }
  }

  /**
   * 講師備忘錄開關
   */
  toggleSpeakerNotes() {
    this.notesVisible = !this.notesVisible;
    if (this.notesDrawer) {
      this.notesDrawer.classList.toggle("open", this.notesVisible);
    }
    if (this.notesBtn) {
      this.notesBtn.classList.toggle("active", this.notesVisible);
      const icon = this.notesBtn.querySelector("i");
      if (icon) {
        icon.className = this.notesVisible ? "fas fa-sticky-note" : "far fa-sticky-note";
      }
    }
  }
}

/**
 * 測驗題選項點擊互動全域函式
 */
window.selectQuizOption = function(element, isCorrect) {
  const container = element.closest(".quiz-container");
  if (!container) return;

  const options = container.querySelectorAll(".quiz-option");
  options.forEach(opt => {
    opt.classList.remove("selected-correct", "selected-wrong");
    opt.style.pointerEvents = "none"; // 點擊後鎖定避免重複
  });

  if (isCorrect) {
    element.classList.add("selected-correct");
  } else {
    element.classList.add("selected-wrong");
    const correctOne = container.querySelector(".correct-opt");
    if (correctOne) correctOne.classList.add("selected-correct");
  }

  const feedback = container.querySelector(".quiz-feedback");
  if (feedback) {
    feedback.classList.remove("hidden");
  }
};
