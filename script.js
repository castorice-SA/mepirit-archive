// 메피릿 캐릭터 데이터
const characters = {
    m1903: {
        name: "M1903 Springfield",
        code: "US-IE-LN-1903",
        designation: "United States Rifle, Caliber .30-06, Model 1903",
        class: "LANTERN",
        height: "173cm",
        summary: "허리 아래까지 내려오는 옅은 금빛 장발 끝에 청록빛이 스민 차분한 성격의 고참 메피릿.",
        image: "./images/m1903.png"
    },
    m1911: {
        name: "M1911 Colt",
        code: "US-IE-LN-1911",
        designation: "United States Pistol, Caliber .45, M1911",
        class: "LANTERN",
        height: "153cm",
        summary: "짙은 갈색 장발과 큼직한 갈색 눈을 지닌 활발하고 즉흥적인 메피릿. 평소에는 장난이 많지만 위험할 때는 빠르게 냉정해진다.",
        image: "./images/m1911.png"
    },
    garand: {
        name: "M1 Garand",
        code: "US-IE-LN-1936",
        designation: "United States Rifle, Caliber .30, M1",
        class: "LANTERN",
        height: "170cm",
        summary: "밝은 갈색과 금발 사이의 머리카락을 단정히 묶은 성실한 반장. 책임감이 강하며 다른 메피릿들을 세심하게 챙긴다.",
        image: "./images/garand.png"
    },
    thompson: {
        name: "M1928 Thompson",
        code: "US-IE-LN-1928",
        designation: "Thompson Submachine Gun, Model of 1928",
        class: "LANTERN",
        height: "168cm",
        summary: "짙은 갈색 웨이브 머리와 녹갈색 눈을 지닌 메피릿. 자존심이 강하고 품위와 단정한 차림을 중요하게 생각한다.",
        image: "./images/thompson.png"
    },
    carbine: {
        name: "M1 Carbine",
        code: "US-IE-LN-1941",
        designation: "United States Carbine, Caliber .30, M1",
        class: "LANTERN",
        height: "159cm",
        summary: "복슬한 밀빛 단발과 밝고 둥근 연갈색 눈을 지닌 메피릿. 붙임성이 좋고 장난이 많으며 혼자 남겨지는 것을 싫어한다.",
        image: "./images/carbine.png"
    }
};

const characterOrder = Object.keys(characters);
const totalRecords = characterOrder.length;
const passwordHash = "acfee4ec2d3918bc905df30f6d55394df66d6168835d7b44dd9668b4fef5184d";
const accessSessionKey = "mepirit-archive-authorized";
let selectedCharacterId = characterOrder[0];
let activeFilter = "all";

const elements = {
    loginScreen: document.querySelector("#loginScreen"),
    loginForm: document.querySelector("#loginForm"),
    loginCard: document.querySelector(".login-card"),
    passwordInput: document.querySelector("#passwordInput"),
    togglePassword: document.querySelector("#togglePassword"),
    logoutButton: document.querySelector("#logoutButton"),
    loginMessage: document.querySelector("#loginMessage"),
    welcomeMessage: document.querySelector("#welcomeMessage"),
    archiveApp: document.querySelector("#archiveApp"),
    searchInput: document.querySelector("#searchInput"),
    clearSearch: document.querySelector("#clearSearch"),
    resetFilters: document.querySelector("#resetFilters"),
    characterList: document.querySelector("#characterList"),
    emptyResult: document.querySelector("#emptyResult"),
    selectionHint: document.querySelector("#selectionHint"),
    selectionAnnouncement: document.querySelector("#selectionAnnouncement"),
    indexCount: document.querySelector("#indexCount"),
    headerRecordCount: document.querySelector("#headerRecordCount"),
    allFilterCount: document.querySelector("#allFilterCount"),
    lanternFilterCount: document.querySelector("#lanternFilterCount"),
    lampFilterCount: document.querySelector("#lampFilterCount"),
    selectedRecordLabel: document.querySelector("#selectedRecordLabel"),
    visualLogNumber: document.querySelector("#visualLogNumber"),
    frameRecordCode: document.querySelector("#frameRecordCode"),
    imageBackdrop: document.querySelector("#imageBackdrop"),
    characterImage: document.querySelector("#characterImage"),
    imagePlaceholder: document.querySelector("#imagePlaceholder"),
    openImageButton: document.querySelector("#openImageButton"),
    characterCode: document.querySelector("#characterCode"),
    characterName: document.querySelector("#characterName"),
    characterDesignation: document.querySelector("#characterDesignation"),
    characterStatus: document.querySelector("#characterStatus"),
    profileHeight: document.querySelector("#profileHeight"),
    profileClass: document.querySelector("#profileClass"),
    characterSummary: document.querySelector("#characterSummary"),
    recordCode: document.querySelector("#recordCode"),
    recordDesignation: document.querySelector("#recordDesignation"),
    recordClass: document.querySelector("#recordClass"),
    recordHeight: document.querySelector("#recordHeight"),
    recordSyncStatus: document.querySelector("#recordSyncStatus"),
    recordFooterPosition: document.querySelector("#recordFooterPosition"),
    footerEntityName: document.querySelector("#footerEntityName"),
    footerRecordPosition: document.querySelector("#footerRecordPosition"),
    previousCharacter: document.querySelector("#previousCharacter"),
    nextCharacter: document.querySelector("#nextCharacter"),
    systemClock: document.querySelector("#systemClock"),
    imageModal: document.querySelector("#imageModal"),
    modalImage: document.querySelector("#modalImage"),
    modalCaption: document.querySelector("#modalCaption"),
    closeImageButton: document.querySelector("#closeImageButton")
};

const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function padNumber(number) {
    return String(number).padStart(2, "0");
}

async function hashPassword(value) {
    const bytes = new TextEncoder().encode(value);
    const digest = await window.crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest), function (byte) {
        return byte.toString(16).padStart(2, "0");
    }).join("");
}

function unlockArchive(skipWelcome) {
    elements.archiveApp.removeAttribute("inert");
    elements.archiveApp.setAttribute("aria-hidden", "false");
    document.body.classList.remove("is-locked");

    if (skipWelcome) {
        elements.loginScreen.hidden = true;
        return;
    }

    elements.loginCard.hidden = true;
    elements.welcomeMessage.hidden = false;
    window.setTimeout(function () {
        elements.loginScreen.classList.add("is-closing");
        window.setTimeout(function () {
            elements.loginScreen.hidden = true;
            elements.characterList.querySelector(".character-button.active")?.focus();
        }, 520);
    }, 1150);
}

function lockArchive() {
    window.sessionStorage.removeItem(accessSessionKey);
    if (modalIsOpen()) {
        if (typeof elements.imageModal.close === "function") elements.imageModal.close();
        else elements.imageModal.removeAttribute("open");
    }

    elements.archiveApp.setAttribute("inert", "");
    elements.archiveApp.setAttribute("aria-hidden", "true");
    document.body.classList.add("is-locked");
    elements.loginCard.hidden = false;
    elements.welcomeMessage.hidden = true;
    elements.passwordInput.value = "";
    elements.passwordInput.type = "password";
    elements.togglePassword.textContent = "보기";
    elements.togglePassword.setAttribute("aria-label", "비밀번호 표시");
    elements.loginMessage.textContent = "AUTHORIZATION REQUIRED";
    elements.loginMessage.classList.remove("is-error");
    elements.loginCard.classList.remove("has-error");
    elements.loginScreen.classList.add("is-closing");
    elements.loginScreen.hidden = false;

    window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
            elements.loginScreen.classList.remove("is-closing");
            window.setTimeout(function () {
                elements.passwordInput.focus();
            }, 180);
        });
    });
}

async function handleLogin(event) {
    event.preventDefault();
    const submittedPassword = elements.passwordInput.value;

    if (!submittedPassword) {
        elements.loginMessage.textContent = "비밀번호를 입력해 주세요.";
        elements.loginMessage.classList.add("is-error");
        elements.passwordInput.focus();
        return;
    }

    elements.loginMessage.textContent = "VERIFYING ACCESS...";
    elements.loginMessage.classList.remove("is-error");
    const submittedHash = await hashPassword(submittedPassword);

    if (submittedHash !== passwordHash) {
        elements.loginMessage.textContent = "ACCESS DENIED / 비밀번호를 확인해 주세요.";
        elements.loginMessage.classList.add("is-error");
        elements.loginCard.classList.remove("has-error");
        void elements.loginCard.offsetWidth;
        elements.loginCard.classList.add("has-error");
        elements.passwordInput.select();
        return;
    }

    window.sessionStorage.setItem(accessSessionKey, "true");
    elements.loginMessage.textContent = "ACCESS GRANTED";
    unlockArchive(false);
}

function initializeLogin() {
    if (window.sessionStorage.getItem(accessSessionKey) === "true") {
        unlockArchive(true);
        return;
    }

    elements.loginForm.addEventListener("submit", function (event) {
        handleLogin(event).catch(function () {
            elements.loginMessage.textContent = "인증 처리 중 오류가 발생했습니다.";
            elements.loginMessage.classList.add("is-error");
        });
    });
    elements.passwordInput.addEventListener("input", function () {
        elements.loginMessage.textContent = "AUTHORIZATION REQUIRED";
        elements.loginMessage.classList.remove("is-error");
    });
    elements.togglePassword.addEventListener("click", function () {
        const showPassword = elements.passwordInput.type === "password";
        elements.passwordInput.type = showPassword ? "text" : "password";
        elements.togglePassword.textContent = showPassword ? "숨김" : "보기";
        elements.togglePassword.setAttribute("aria-label", showPassword ? "비밀번호 숨기기" : "비밀번호 표시");
        elements.passwordInput.focus();
    });
    window.requestAnimationFrame(function () {
        elements.passwordInput.focus();
    });
}

function renderCharacterList() {
    const fragment = document.createDocumentFragment();
    characterOrder.forEach(function (characterId, index) {
        const character = characters[characterId];
        const button = document.createElement("button");
        const thumbnail = document.createElement("span");
        const fallback = document.createElement("span");
        const image = document.createElement("img");
        const copy = document.createElement("span");
        const name = document.createElement("strong");
        const code = document.createElement("small");
        const role = document.createElement("span");
        const number = document.createElement("span");

        button.type = "button";
        button.className = "character-button";
        button.dataset.character = characterId;
        button.setAttribute("aria-label", `${character.name} 기록 열기`);
        thumbnail.className = "character-thumb";
        fallback.className = "thumbnail-fallback";
        fallback.textContent = character.name.replace(/[^A-Za-z0-9]/g, "").slice(0, 3).toUpperCase();
        image.src = character.image;
        image.alt = "";
        image.loading = index === 0 ? "eager" : "lazy";
        image.addEventListener("error", function () { image.hidden = true; });
        thumbnail.append(fallback, image);
        copy.className = "button-copy";
        name.textContent = character.name;
        code.textContent = character.code;
        role.className = "button-role";
        role.textContent = character.class;
        copy.append(name, code, role);
        number.className = "button-index";
        number.textContent = padNumber(index + 1);
        number.setAttribute("aria-hidden", "true");
        button.append(thumbnail, copy, number);
        button.addEventListener("click", function () { showCharacter(characterId, true); });
        fragment.appendChild(button);
    });
    elements.characterList.replaceChildren(fragment);
}

function getCharacterButtons() {
    return Array.from(elements.characterList.querySelectorAll(".character-button"));
}

function setCharacterImage(character) {
    function showAvailableImage() {
        elements.characterImage.hidden = false;
        elements.imagePlaceholder.hidden = true;
        elements.openImageButton.disabled = false;
        elements.imageBackdrop.style.backgroundImage = `url("${character.image}")`;
    }
    function showMissingImage() {
        elements.characterImage.hidden = true;
        elements.imagePlaceholder.hidden = false;
        elements.openImageButton.disabled = true;
        elements.imageBackdrop.style.backgroundImage = "none";
    }
    elements.characterImage.onload = showAvailableImage;
    elements.characterImage.onerror = showMissingImage;
    elements.characterImage.alt = `${character.name} 메피릿 캐릭터`;
    elements.characterImage.src = character.image;
    elements.modalImage.src = character.image;
    elements.modalImage.alt = `${character.name} 원본 이미지`;
    elements.modalCaption.textContent = `${character.name} / VISUAL RECORD`;
    if (elements.characterImage.complete) {
        if (elements.characterImage.naturalWidth > 0) showAvailableImage();
        else showMissingImage();
    }
}

function showCharacter(characterId, announce) {
    const character = characters[characterId];
    if (!character) return;
    selectedCharacterId = characterId;
    const position = characterOrder.indexOf(characterId) + 1;
    const formattedPosition = `${padNumber(position)} / ${padNumber(totalRecords)}`;
    elements.frameRecordCode.textContent = character.code;
    elements.characterCode.textContent = character.code;
    elements.characterName.textContent = character.name;
    elements.characterDesignation.textContent = character.designation;
    elements.characterStatus.textContent = `ACTIVE / ${character.class}`;
    elements.profileHeight.textContent = character.height;
    elements.profileClass.textContent = character.class;
    elements.characterSummary.textContent = character.summary;
    elements.recordCode.textContent = character.code;
    elements.recordDesignation.textContent = character.designation;
    elements.recordClass.textContent = character.class;
    elements.recordHeight.textContent = character.height;
    elements.selectedRecordLabel.textContent = formattedPosition;
    elements.visualLogNumber.textContent = `VISUAL LOG / ${padNumber(position)}`;
    elements.recordSyncStatus.textContent = `SYNC ${formattedPosition}`;
    elements.recordFooterPosition.textContent = formattedPosition;
    elements.footerEntityName.textContent = character.name.toUpperCase();
    elements.footerRecordPosition.textContent = formattedPosition;
    getCharacterButtons().forEach(function (button) {
        const isActive = button.dataset.character === characterId;
        button.classList.toggle("active", isActive);
        if (isActive) button.setAttribute("aria-current", "true");
        else button.removeAttribute("aria-current");
    });
    setCharacterImage(character);
    updateSelectionHint();
    document.title = `${character.name} // MEPIRIT ARCHIVE`;
    if (announce) elements.selectionAnnouncement.textContent = `${character.name} 기록을 열었습니다.`;
}

function buildSearchText(character) {
    return [character.name, character.code, character.designation, character.class, character.height, character.summary]
        .join(" ")
        .toLocaleLowerCase("ko");
}

function getVisibleCharacterIds() {
    return getCharacterButtons()
        .filter(function (button) { return !button.hidden; })
        .map(function (button) { return button.dataset.character; });
}

function updateSelectionHint() {
    const activeButton = elements.characterList.querySelector(`[data-character="${selectedCharacterId}"]`);
    const isFilteredOut = activeButton && activeButton.hidden;
    elements.selectionHint.hidden = !isFilteredOut;
    if (isFilteredOut) {
        elements.selectionHint.textContent = "현재 표시 중인 인물은 검색 결과에 포함되지 않습니다. 목록에서 다른 기록을 선택할 수 있습니다.";
    }
}

function applyFilters() {
    const searchWord = elements.searchInput.value.trim().toLocaleLowerCase("ko");
    let visibleCount = 0;
    getCharacterButtons().forEach(function (button) {
        const character = characters[button.dataset.character];
        const isVisible = buildSearchText(character).includes(searchWord) &&
            (activeFilter === "all" || character.class === activeFilter);
        button.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
    });
    elements.indexCount.textContent = `${padNumber(visibleCount)} / ${padNumber(totalRecords)}`;
    elements.emptyResult.hidden = visibleCount !== 0;
    elements.clearSearch.hidden = elements.searchInput.value.length === 0;
    elements.previousCharacter.disabled = visibleCount === 0;
    elements.nextCharacter.disabled = visibleCount === 0;
    updateSelectionHint();
}

function setFilter(filterName) {
    activeFilter = filterName;
    filterButtons.forEach(function (button) {
        const isActive = button.dataset.filter === filterName;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
    applyFilters();
}

function resetFilters() {
    elements.searchInput.value = "";
    setFilter("all");
    elements.searchInput.focus();
}

function moveCharacter(direction) {
    const visibleIds = getVisibleCharacterIds();
    if (visibleIds.length === 0) return;
    const currentIndex = visibleIds.indexOf(selectedCharacterId);
    const nextIndex = currentIndex === -1
        ? (direction > 0 ? 0 : visibleIds.length - 1)
        : (currentIndex + direction + visibleIds.length) % visibleIds.length;
    showCharacter(visibleIds[nextIndex], true);
    elements.characterList.querySelector(".character-button.active")?.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: prefersReducedMotion.matches ? "auto" : "smooth"
    });
}

function updateFilterCounts() {
    const lanternCount = characterOrder.filter(function (id) { return characters[id].class === "LANTERN"; }).length;
    const lampCount = characterOrder.filter(function (id) { return characters[id].class === "LAMP"; }).length;
    elements.headerRecordCount.textContent = `${padNumber(totalRecords)} RECORDS`;
    elements.allFilterCount.textContent = padNumber(totalRecords);
    elements.lanternFilterCount.textContent = padNumber(lanternCount);
    elements.lampFilterCount.textContent = padNumber(lampCount);
}

function updateClock() {
    const now = new Date();
    elements.systemClock.textContent = [now.getHours(), now.getMinutes(), now.getSeconds()].map(padNumber).join(" : ");
    elements.systemClock.dateTime = now.toISOString();
}

function modalIsOpen() {
    return elements.imageModal.hasAttribute("open");
}

function openImageModal() {
    if (elements.openImageButton.disabled) return;
    if (typeof elements.imageModal.showModal === "function") elements.imageModal.showModal();
    else elements.imageModal.setAttribute("open", "");
    elements.closeImageButton.focus();
}

function closeImageModal() {
    if (!modalIsOpen()) return;
    if (typeof elements.imageModal.close === "function") elements.imageModal.close();
    else elements.imageModal.removeAttribute("open");
    elements.openImageButton.focus();
}

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () { setFilter(button.dataset.filter); });
});
elements.searchInput.addEventListener("input", applyFilters);
elements.clearSearch.addEventListener("click", function () {
    elements.searchInput.value = "";
    applyFilters();
    elements.searchInput.focus();
});
elements.resetFilters.addEventListener("click", resetFilters);
elements.logoutButton.addEventListener("click", lockArchive);
elements.previousCharacter.addEventListener("click", function () { moveCharacter(-1); });
elements.nextCharacter.addEventListener("click", function () { moveCharacter(1); });
elements.openImageButton.addEventListener("click", openImageModal);
elements.closeImageButton.addEventListener("click", closeImageModal);
elements.imageModal.addEventListener("click", function (event) {
    if (event.target === elements.imageModal) closeImageModal();
});

document.addEventListener("keydown", function (event) {
    const target = event.target;
    const isTyping = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target.isContentEditable;
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (document.body.classList.contains("is-locked")) return;
    if (modalIsOpen()) {
        if (event.key === "Escape") {
            event.preventDefault();
            closeImageModal();
        }
        return;
    }
    if (event.key === "/" && !isTyping) {
        event.preventDefault();
        elements.searchInput.focus();
    } else if (event.key === "Escape") {
        resetFilters();
        elements.searchInput.blur();
    } else if (!isTyping && event.key === "ArrowUp") {
        event.preventDefault();
        moveCharacter(-1);
    } else if (!isTyping && event.key === "ArrowDown") {
        event.preventDefault();
        moveCharacter(1);
    }
});

renderCharacterList();
updateFilterCounts();
applyFilters();
showCharacter(selectedCharacterId, false);
updateClock();
window.setInterval(updateClock, 1000);
initializeLogin();
