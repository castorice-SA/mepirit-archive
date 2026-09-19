// 메피릿 캐릭터 데이터
// 새 캐릭터는 아래와 같은 형식으로 한 항목만 추가하면 왼쪽 목록에도 자동으로 표시됩니다.
const characters = {
    m1903: {
        name: "M1903 Springfield",
        shortCode: "M03",
        code: "US-IE-LN-1903",
        designation: "United States Rifle, Caliber .30-06, Model 1903",
        class: "LANTERN",
        classCode: "LN",
        height: "173 CM",
        eyes: "맑은 푸른색",
        hair: "옅은 금빛 장발 · 청록빛 끝",
        role: "볼트액션 소총",
        eraShort: "WWI–WWII",
        era: "제1·2차 세계대전기",
        affiliation: "미합중국 보병장비",
        status: "ACTIVE / LANTERN",
        summary:
            "허리 아래까지 내려오는 옅은 금빛 장발 끝에 청록빛이 스민 차분한 성격의 고참 메피릿. 사색적인 면이 강하고 바람과 바다가 가까운 장소를 선호하며, 후배들 앞에서는 자연스럽게 여유 있는 태도를 유지한다.",
        image: "./images/m1903.png",
        traits: ["차분함", "사색적", "바다 선호", "고참"],
        fieldNote:
            "바람과 바다가 가까운 장소에서 안정도가 높게 측정된다. 혼자 조용히 수평선을 바라보는 시간이 길다.",
        archiveNote:
            "외부 활동 허가 이후 프랑스 방문 기록이 추가되었다. 일반 열람 등급에서는 생활 관찰 기록만 공개된다.",
        management: {
            condition: "STABLE / 양호",
            preference: "바람이 잘 드는 해안과 조용한 외부 공간",
            assignment: "외부 관찰 및 후배 동행 배치",
            caution: "책임을 혼자 떠안는 경향이 있어 장기 일정 뒤 충분한 휴식을 권고한다.",
            stability: 94
        },
        history: [
            {
                code: "LOG 01 / CLEARANCE",
                title: "외부 활동 허가",
                text: "국제회의 승인 이후 프랑스 방문 희망을 등록하고 정식 외부 활동 대상에 포함되었다."
            },
            {
                code: "LOG 02 / DUNKIRK",
                title: "덩케르크 도착 관찰",
                text: "호텔 앞에서 바닷바람과 수평선을 장시간 관찰했다. 주변의 평범한 거리 풍경에도 높은 관심을 보였다."
            },
            {
                code: "LOG 03 / ROUTINE",
                title: "생활 안정 기록",
                text: "해안과 정원 등 개방된 공간에서 정서 안정 지표가 상승하는 경향이 반복 확인되었다."
            }
        ],
        relations: [
            {
                target: "M1897 Trench Gun",
                type: "오랜 동료",
                note: "최고참들끼리 말수가 많지 않아도 서로의 상태를 빠르게 파악한다."
            },
            {
                target: "M1911 Colt",
                type: "여행 동행",
                note: "즉흥적인 행동을 제지하면서도 필요할 때는 가장 먼저 곁을 지켜준다."
            },
            {
                target: "M1917 Enfield",
                type: "경쟁 관계",
                note: "오랜 경쟁 의식이 남아 있으나 실전 판단과 능력은 서로 인정하고 있다."
            }
        ]
    },

    m1911: {
        name: "M1911 Colt",
        shortCode: "1911",
        code: "US-IE-LN-1911",
        designation: "United States Pistol, Caliber .45, M1911",
        class: "LANTERN",
        classCode: "LN",
        height: "153 CM",
        eyes: "큼직한 갈색",
        hair: "짙은 갈색 장발",
        role: "반자동 권총",
        eraShort: "WWI–WWII",
        era: "제1·2차 세계대전기",
        affiliation: "미합중국 보병장비",
        status: "ACTIVE / LANTERN",
        summary:
            "짙은 갈색 장발과 큼직한 갈색 눈을 지닌 활발하고 즉흥적인 메피릿. 평소에는 장난이 많고 새로운 장소에 대한 호기심이 강하지만, 위험이 닥치면 빠르게 냉정해져 정확한 판단을 내린다.",
        image: "./images/m1911.png",
        traits: ["활발함", "즉흥적", "장난기", "위기 시 냉정"],
        fieldNote:
            "관심 대상이 여러 개 보이면 이동 경로를 자주 바꾼다. 실제 위험 상황에서는 행동 속도와 집중력이 크게 상승한다.",
        archiveNote:
            "외부 일정 중 빵집, 기념품점, 해안 방문을 우선 요청했다. 단독 이동 방지를 위한 동행 배치가 권장된다.",
        management: {
            condition: "STABLE / 활력 높음",
            preference: "사람이 많은 거리, 간식 가게, 새로운 관광지",
            assignment: "판단이 빠른 고참과 2인 이상 동행",
            caution: "호기심에 이끌려 예정 경로를 벗어날 수 있으므로 집합 시간을 반복 고지한다.",
            stability: 91
        },
        history: [
            {
                code: "LOG 01 / CLEARANCE",
                title: "외부 활동 허가",
                text: "프랑스, 이탈리아, 영국을 희망 방문국으로 제출하고 여행 대상 인원에 포함되었다."
            },
            {
                code: "LOG 02 / CITY WALK",
                title: "도시 탐색 기록",
                text: "덩케르크 도착 직후 빵집과 기념품점, 해안 방향을 차례로 확인하며 높은 활동성을 보였다."
            },
            {
                code: "LOG 03 / RESPONSE",
                title: "위기 대응 평가",
                text: "평상시의 즉흥적인 태도와 달리 돌발 상황에서는 판단 속도와 명령 이행률이 안정적으로 유지된다."
            }
        ],
        relations: [
            {
                target: "M1903 Springfield",
                type: "신뢰하는 선배",
                note: "외부 활동에서 자주 곁을 지키며, 제지를 받으면서도 가장 먼저 의견을 묻는다."
            },
            {
                target: "M1 Garand",
                type: "관리 대상",
                note: "일정 이탈 때문에 자주 주의를 듣지만 중요한 순간에는 지시를 빠르게 따른다."
            },
            {
                target: "M1 Carbine",
                type: "장난 동료",
                note: "가벼운 장난과 외출 계획을 함께 세우며 생활 구역의 분위기를 밝게 만든다."
            }
        ]
    },

    garand: {
        name: "M1 Garand",
        shortCode: "M1G",
        code: "US-IE-LN-1936",
        designation: "United States Rifle, Caliber .30, M1",
        class: "LANTERN",
        classCode: "LN",
        height: "170 CM",
        eyes: "선명한 청색",
        hair: "밝은 갈색·금발 묶음",
        role: "반자동 소총 / 반장",
        eraShort: "WWII",
        era: "제2차 세계대전기",
        affiliation: "미합중국 보병장비",
        status: "ACTIVE / LANTERN",
        summary:
            "밝은 갈색과 금발 사이의 머리카락을 단정히 묶은 성실한 반장. 책임감이 강하고 일정과 인원을 꼼꼼하게 확인하며, 다른 메피릿들이 무사히 돌아오는 것을 자신의 일보다 우선한다.",
        image: "./images/garand.png",
        traits: ["성실함", "책임감", "반장", "세심함"],
        fieldNote:
            "외출 전 지갑, 신분증, 휴대전화, 비상 연락망과 집합 시간을 반복 확인한다. 누구도 혼자 남겨두지 않는다.",
        archiveNote:
            "집단 일정의 안전성과 복귀율이 매우 높다. 다만 모든 책임을 스스로 부담하려는 경향이 관찰된다.",
        management: {
            condition: "STABLE / 책임 부하 관찰",
            preference: "정리된 일정표, 전원 동행, 사전 점검",
            assignment: "소규모 외부 활동의 인원 통솔",
            caution: "타인의 실수까지 자신의 책임으로 돌리지 않도록 업무를 분담한다.",
            stability: 96
        },
        history: [
            {
                code: "LOG 01 / LEADER",
                title: "반장 지정 기록",
                text: "생활 구역의 일정 전달과 인원 확인을 안정적으로 수행해 보병장비 반장 역할을 맡았다."
            },
            {
                code: "LOG 02 / CHECKLIST",
                title: "외부 일정 점검",
                text: "출발 전 필수 물품과 연락 수단을 전원 확인하고 단독 행동 금지 원칙을 재고지했다."
            },
            {
                code: "LOG 03 / RETURN",
                title: "복귀 인원 확인",
                text: "일정 종료 뒤 마지막 인원이 숙소에 들어온 것을 확인한 후에야 개인 정비를 시작했다."
            }
        ],
        relations: [
            {
                target: "M1 Carbine",
                type: "보호 대상",
                note: "혼자 남지 않도록 자주 확인하며 장난을 제지하면서도 생활 전반을 세심히 챙긴다."
            },
            {
                target: "M1911 Colt",
                type: "통솔 대상",
                note: "즉흥적인 경로 변경을 가장 자주 지적하지만 판단력과 대응 능력은 신뢰한다."
            },
            {
                target: "M1928 Thompson",
                type: "동료 고참",
                note: "일정 운영 방식은 다르지만 외부 활동의 질서와 안전을 함께 유지한다."
            }
        ]
    },

    thompson: {
        name: "M1928 Thompson",
        shortCode: "T28",
        code: "US-IE-LN-1928",
        designation: "Thompson Submachine Gun, Model of 1928",
        class: "LANTERN",
        classCode: "LN",
        height: "168 CM",
        eyes: "녹갈색",
        hair: "짙은 갈색 웨이브",
        role: "기관단총",
        eraShort: "INTERWAR–WWII",
        era: "전간기·제2차 세계대전기",
        affiliation: "미합중국 보병장비",
        status: "ACTIVE / LANTERN",
        summary:
            "짙은 갈색 웨이브 머리와 녹갈색 눈을 지닌 메피릿. 자존심이 강하고 품위와 단정한 차림을 중요하게 생각하며, 일정이 급하더라도 식사와 휴식의 질을 쉽게 포기하지 않는다.",
        image: "./images/thompson.png",
        traits: ["품위 중시", "자존심", "단정함", "현실적"],
        fieldNote:
            "쇼윈도의 옷차림과 가게 구성을 세밀하게 살핀다. 무리한 일정 속에서도 제대로 된 식사를 요구하는 편이다.",
        archiveNote:
            "외부 활동 중 복장과 예절을 안정적으로 유지한다. 후배 메피릿들이 행동 기준으로 삼는 경우가 많다.",
        management: {
            condition: "STABLE / 양호",
            preference: "단정한 복장, 정식 식사, 질서 있는 상점가",
            assignment: "공식 행사 및 외부 방문 동행",
            caution: "체면을 지키려 불편을 늦게 보고할 수 있으므로 휴식 여부를 직접 확인한다.",
            stability: 93
        },
        history: [
            {
                code: "LOG 01 / APPEARANCE",
                title: "대외 복장 점검",
                text: "공식 외부 활동에 앞서 인원들의 복장 상태와 소지품 정리를 자발적으로 도왔다."
            },
            {
                code: "LOG 02 / DUNKIRK",
                title: "상점가 관찰",
                text: "덩케르크 시내의 쇼윈도와 현지 복식을 관찰하며 귀환 전 방문 후보지를 정리했다."
            },
            {
                code: "LOG 03 / SUPPLY",
                title: "식사 일정 조정",
                text: "과도하게 압축된 외부 일정을 조정해 전 인원이 정식 식사를 마친 뒤 이동하도록 했다."
            }
        ],
        relations: [
            {
                target: "M3 Grease Gun",
                type: "존경받는 선배",
                note: "무덤덤한 후배가 행동과 복장을 참고하는 대상이다. 직접적인 표현은 적어도 꾸준히 챙긴다."
            },
            {
                target: "M1 Garand",
                type: "동료 고참",
                note: "일정의 안전성과 완성도를 두고 의견을 나누며 서로의 판단을 실무적으로 보완한다."
            },
            {
                target: "M1 Carbine",
                type: "후배",
                note: "산만한 차림을 정돈해 주는 일이 잦지만 붙임성 있는 태도는 긍정적으로 평가한다."
            }
        ]
    },

    carbine: {
        name: "M1 Carbine",
        shortCode: "M1C",
        code: "US-IE-LN-1941",
        designation: "United States Carbine, Caliber .30, M1",
        class: "LANTERN",
        classCode: "LN",
        height: "159 CM",
        eyes: "밝은 연갈색",
        hair: "복슬한 밀빛 단발",
        role: "경량 반자동 소총",
        eraShort: "WWII",
        era: "제2차 세계대전기",
        affiliation: "미합중국 보병장비",
        status: "ACTIVE / LANTERN",
        summary:
            "복슬한 밀빛 단발과 밝고 둥근 연갈색 눈을 지닌 메피릿. 붙임성이 좋고 장난이 많아 낯선 장소에서도 빠르게 사람들과 어울리지만, 혼자 남겨지는 상황에는 유난히 민감하다.",
        image: "./images/carbine.png",
        traits: ["붙임성", "장난기", "민첩함", "외로움에 민감"],
        fieldNote:
            "동행자가 가까이 있을 때 가장 안정적이며 현지인과의 짧은 교류에도 적극적이다. 혼자 대기하는 시간은 짧게 유지한다.",
        archiveNote:
            "작은 체구와 빠른 적응력 덕분에 시내 활동에서 선두를 맡는 경우가 많다. 복귀 확인은 별도로 시행한다.",
        management: {
            condition: "STABLE / 동행 권장",
            preference: "활기찬 거리, 빵집, 대화 가능한 동행자",
            assignment: "2인 이상 생활조 및 현지 교류 보조",
            caution: "단독 대기 시간이 길어지지 않도록 배치하고 복귀 여부를 직접 확인한다.",
            stability: 90
        },
        history: [
            {
                code: "LOG 01 / CONTACT",
                title: "현지 교류 기록",
                text: "언어가 완전히 통하지 않는 상황에서도 손짓과 미소로 계산을 마치고 일행보다 먼저 빵집을 나왔다."
            },
            {
                code: "LOG 02 / FORMATION",
                title: "동행 배치 조정",
                text: "외부 활동 시 선두 반 걸음 위치를 선호하며 후방 인원과의 거리를 반복 확인하는 모습이 관찰되었다."
            },
            {
                code: "LOG 03 / ROUTINE",
                title: "생활 안정 기록",
                text: "공동 공간에서 활동할 때 높은 안정도를 유지했으며 단독 대기 시간이 길어질수록 불안 지표가 상승했다."
            }
        ],
        relations: [
            {
                target: "M1 Garand",
                type: "의지하는 반장",
                note: "잔소리를 들어도 가장 먼저 돌아가 상황을 알리며 일정 중 위치를 자주 확인한다."
            },
            {
                target: "M1911 Colt",
                type: "장난 동료",
                note: "외출 계획과 가벼운 장난을 함께 벌이지만 위험한 순간에는 서로의 지시를 빠르게 따른다."
            },
            {
                target: "M1928 Thompson",
                type: "고참",
                note: "복장과 행동을 지적받는 일이 잦지만 외부 활동에서는 자연스럽게 곁을 따라다닌다."
            }
        ]
    }
};

const characterOrder = Object.keys(characters);
const totalRecords = characterOrder.length;

let selectedCharacterId = characterOrder[0];
let activeFilter = "all";
let activeTab = "overview";

const elements = {
    characterList: document.querySelector("#characterList"),
    searchInput: document.querySelector("#searchInput"),
    emptyResult: document.querySelector("#emptyResult"),
    indexCount: document.querySelector("#indexCount"),
    headerRecordCount: document.querySelector("#headerRecordCount"),
    allFilterCount: document.querySelector("#allFilterCount"),
    lanternFilterCount: document.querySelector("#lanternFilterCount"),
    lampFilterCount: document.querySelector("#lampFilterCount"),
    selectedRecordLabel: document.querySelector("#selectedRecordLabel"),
    systemClock: document.querySelector("#systemClock"),

    characterImage: document.querySelector("#characterImage"),
    imagePlaceholder: document.querySelector("#imagePlaceholder"),
    imageBackdrop: document.querySelector("#imageBackdrop"),
    openImageButton: document.querySelector("#openImageButton"),
    frameRecordCode: document.querySelector("#frameRecordCode"),
    visualLogNumber: document.querySelector("#visualLogNumber"),

    characterCode: document.querySelector("#characterCode"),
    characterName: document.querySelector("#characterName"),
    characterDesignation: document.querySelector("#characterDesignation"),
    characterStatus: document.querySelector("#characterStatus"),
    profileHeight: document.querySelector("#profileHeight"),
    profileEyes: document.querySelector("#profileEyes"),
    profileHair: document.querySelector("#profileHair"),
    profileRole: document.querySelector("#profileRole"),
    profileEra: document.querySelector("#profileEra"),
    profileClass: document.querySelector("#profileClass"),
    traitTags: document.querySelector("#traitTags"),
    fieldNote: document.querySelector("#fieldNote"),

    characterSummary: document.querySelector("#characterSummary"),
    recordCode: document.querySelector("#recordCode"),
    recordDesignation: document.querySelector("#recordDesignation"),
    recordClass: document.querySelector("#recordClass"),
    recordHeight: document.querySelector("#recordHeight"),
    recordAppearance: document.querySelector("#recordAppearance"),
    recordEra: document.querySelector("#recordEra"),
    recordAffiliation: document.querySelector("#recordAffiliation"),
    archiveNote: document.querySelector("#archiveNote"),
    queryText: document.querySelector("#queryText"),
    recordSectionTitle: document.querySelector("#recordSectionTitle"),
    recordSyncStatus: document.querySelector("#recordSyncStatus"),
    recordFooterPosition: document.querySelector("#recordFooterPosition"),

    historyList: document.querySelector("#historyList"),
    relationList: document.querySelector("#relationList"),
    managementCondition: document.querySelector("#managementCondition"),
    managementPreference: document.querySelector("#managementPreference"),
    managementAssignment: document.querySelector("#managementAssignment"),
    managementCaution: document.querySelector("#managementCaution"),
    stabilityValue: document.querySelector("#stabilityValue"),
    stabilityBar: document.querySelector("#stabilityBar"),

    footerEntityName: document.querySelector("#footerEntityName"),
    footerRecordPosition: document.querySelector("#footerRecordPosition"),
    previousCharacter: document.querySelector("#previousCharacter"),
    nextCharacter: document.querySelector("#nextCharacter"),

    imageModal: document.querySelector("#imageModal"),
    modalImage: document.querySelector("#modalImage"),
    modalCaption: document.querySelector("#modalCaption"),
    closeImageButton: document.querySelector("#closeImageButton")
};

const filterButtons = document.querySelectorAll(".filter-button");
const recordTabs = document.querySelectorAll(".record-tab");
const tabPanels = document.querySelectorAll(".tab-panel");

function padNumber(number) {
    return String(number).padStart(2, "0");
}

function renderCharacterList() {
    elements.characterList.innerHTML = "";

    characterOrder.forEach(function (characterId) {
        const character = characters[characterId];
        const button = document.createElement("button");

        button.type = "button";
        button.className = "character-button";
        button.dataset.character = characterId;
        button.setAttribute("aria-label", `${character.name} 기록 열기`);

        button.innerHTML = `
            <span class="character-thumb">
                <span class="thumbnail-fallback">${character.shortCode}</span>
                <img src="${character.image}" alt="" loading="lazy">
            </span>
            <span class="button-copy">
                <strong>${character.name}</strong>
                <small>${character.code}</small>
            </span>
            <span class="button-class">${character.classCode}</span>
        `;

        const thumbnail = button.querySelector("img");
        thumbnail.addEventListener("error", function () {
            thumbnail.hidden = true;
        });

        button.addEventListener("click", function () {
            showCharacter(characterId);
        });

        elements.characterList.appendChild(button);
    });
}

function getCharacterButtons() {
    return Array.from(document.querySelectorAll(".character-button"));
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

    if (!character.image) {
        elements.characterImage.removeAttribute("src");
        showMissingImage();
        return;
    }

    elements.characterImage.onload = showAvailableImage;
    elements.characterImage.onerror = showMissingImage;
    elements.characterImage.alt = `${character.name} 메피릿 캐릭터`;
    elements.characterImage.src = character.image;

    if (elements.characterImage.complete) {
        if (elements.characterImage.naturalWidth > 0) {
            showAvailableImage();
        } else {
            showMissingImage();
        }
    }

    elements.modalImage.src = character.image;
    elements.modalImage.alt = `${character.name} 원본 이미지`;
    elements.modalCaption.textContent = `${character.name.toUpperCase()} / VISUAL RECORD`;
}

function renderTraits(traits) {
    elements.traitTags.innerHTML = "";

    traits.forEach(function (trait) {
        const tag = document.createElement("span");
        tag.className = "trait-tag";
        tag.textContent = trait;
        elements.traitTags.appendChild(tag);
    });
}

function renderHistory(history) {
    elements.historyList.innerHTML = "";

    history.forEach(function (entry) {
        const article = document.createElement("article");
        article.className = "timeline-entry";

        const code = document.createElement("span");
        const title = document.createElement("h4");
        const text = document.createElement("p");

        code.textContent = entry.code;
        title.textContent = entry.title;
        text.textContent = entry.text;

        article.append(code, title, text);
        elements.historyList.appendChild(article);
    });
}

function renderRelations(relations) {
    elements.relationList.innerHTML = "";

    relations.forEach(function (relation) {
        const article = document.createElement("article");
        article.className = "relation-card";

        const header = document.createElement("header");
        const target = document.createElement("h4");
        const type = document.createElement("span");
        const note = document.createElement("p");

        target.textContent = relation.target;
        type.textContent = relation.type;
        note.textContent = relation.note;

        header.append(target, type);
        article.append(header, note);
        elements.relationList.appendChild(article);
    });
}

function renderManagement(management) {
    elements.managementCondition.textContent = management.condition;
    elements.managementPreference.textContent = management.preference;
    elements.managementAssignment.textContent = management.assignment;
    elements.managementCaution.textContent = management.caution;
    elements.stabilityValue.textContent = `${management.stability}%`;
    elements.stabilityBar.style.width = `${management.stability}%`;
}

function updateRecordPositions(characterId) {
    const position = characterOrder.indexOf(characterId) + 1;
    const formattedPosition = `${padNumber(position)} / ${padNumber(totalRecords)}`;

    elements.visualLogNumber.textContent = `VISUAL LOG / ${padNumber(position)}`;
    elements.recordSyncStatus.textContent = `SYNC ${formattedPosition}`;
    elements.recordFooterPosition.textContent = formattedPosition;
    elements.footerRecordPosition.textContent = formattedPosition;
    elements.selectedRecordLabel.textContent = `RECORD ${formattedPosition}`;
}

function updateActiveButton(characterId) {
    getCharacterButtons().forEach(function (button) {
        const isSelected = button.dataset.character === characterId;
        button.classList.toggle("active", isSelected);

        if (isSelected) {
            button.setAttribute("aria-current", "true");
        } else {
            button.removeAttribute("aria-current");
        }
    });
}

function showCharacter(characterId) {
    const character = characters[characterId];

    if (!character) {
        return;
    }

    selectedCharacterId = characterId;

    elements.frameRecordCode.textContent = character.code;
    elements.characterCode.textContent = character.code;
    elements.characterName.textContent = character.name;
    elements.characterDesignation.textContent = character.designation;
    elements.characterStatus.textContent = character.status;

    elements.profileHeight.textContent = character.height;
    elements.profileEyes.textContent = character.eyes;
    elements.profileHair.textContent = character.hair;
    elements.profileRole.textContent = character.role;
    elements.profileEra.textContent = character.eraShort;
    elements.profileClass.textContent = character.class;
    elements.fieldNote.textContent = character.fieldNote;

    elements.characterSummary.textContent = character.summary;
    elements.recordCode.textContent = character.code;
    elements.recordDesignation.textContent = character.designation;
    elements.recordClass.textContent = character.class;
    elements.recordHeight.textContent = character.height;
    elements.recordAppearance.textContent = `${character.hair} / ${character.eyes}`;
    elements.recordEra.textContent = character.era;
    elements.recordAffiliation.textContent = character.affiliation;
    elements.archiveNote.textContent = character.archiveNote;

    elements.footerEntityName.textContent = character.name.toUpperCase();

    setCharacterImage(character);
    renderTraits(character.traits);
    renderHistory(character.history);
    renderRelations(character.relations);
    renderManagement(character.management);
    updateRecordPositions(characterId);
    updateActiveButton(characterId);
    updateQueryText();

    document.title = `${character.name} // MEPIRIT ARCHIVE`;
}

function buildSearchText(character) {
    return [
        character.name,
        character.code,
        character.designation,
        character.class,
        character.height,
        character.eyes,
        character.hair,
        character.role,
        character.era,
        character.affiliation,
        character.summary,
        character.fieldNote,
        character.traits.join(" ")
    ].join(" ").toLowerCase();
}

function applyFilters() {
    const searchWord = elements.searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    getCharacterButtons().forEach(function (button) {
        const character = characters[button.dataset.character];
        const matchesSearch = buildSearchText(character).includes(searchWord);
        const matchesFilter = activeFilter === "all" || character.class === activeFilter;
        const isVisible = matchesSearch && matchesFilter;

        button.hidden = !isVisible;

        if (isVisible) {
            visibleCount += 1;
        }
    });

    elements.indexCount.textContent = `${padNumber(visibleCount)} / ${padNumber(totalRecords)} SHOWN`;
    elements.emptyResult.hidden = visibleCount !== 0;
}

function updateFilterCounts() {
    const lanternCount = characterOrder.filter(function (characterId) {
        return characters[characterId].class === "LANTERN";
    }).length;

    const lampCount = characterOrder.filter(function (characterId) {
        return characters[characterId].class === "LAMP";
    }).length;

    elements.headerRecordCount.textContent = `${padNumber(totalRecords)} RECORDS`;
    elements.allFilterCount.textContent = padNumber(totalRecords);
    elements.lanternFilterCount.textContent = padNumber(lanternCount);
    elements.lampFilterCount.textContent = padNumber(lampCount);
}

const tabTitles = {
    overview: "ENTITY / GENERAL",
    history: "ENTITY / HISTORY",
    relations: "ENTITY / RELATIONS",
    management: "ENTITY / MANAGEMENT"
};

function updateQueryText() {
    elements.queryText.textContent = `> query --entity ${selectedCharacterId} --section ${activeTab}`;
}

function activateTab(tabName) {
    if (!tabTitles[tabName]) {
        return;
    }

    activeTab = tabName;
    elements.recordSectionTitle.textContent = tabTitles[tabName];

    recordTabs.forEach(function (tab) {
        const isActive = tab.dataset.tab === tabName;
        tab.classList.toggle("active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
    });

    tabPanels.forEach(function (panel) {
        const isActive = panel.dataset.panel === tabName;
        panel.classList.toggle("active", isActive);
        panel.hidden = !isActive;
    });

    updateQueryText();
}

function getVisibleCharacterIds() {
    const visibleIds = getCharacterButtons()
        .filter(function (button) {
            return !button.hidden;
        })
        .map(function (button) {
            return button.dataset.character;
        });

    return visibleIds.length > 0 ? visibleIds : characterOrder;
}

function moveCharacter(direction) {
    const visibleIds = getVisibleCharacterIds();
    let currentIndex = visibleIds.indexOf(selectedCharacterId);

    if (currentIndex === -1) {
        currentIndex = 0;
    } else {
        currentIndex = (currentIndex + direction + visibleIds.length) % visibleIds.length;
    }

    showCharacter(visibleIds[currentIndex]);

    const activeButton = document.querySelector(".character-button.active");
    activeButton?.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function updateClock() {
    const now = new Date();
    const hours = padNumber(now.getHours());
    const minutes = padNumber(now.getMinutes());
    const seconds = padNumber(now.getSeconds());

    elements.systemClock.textContent = `${hours} : ${minutes} : ${seconds}`;
    elements.systemClock.dateTime = now.toISOString();
}

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        activeFilter = button.dataset.filter;

        filterButtons.forEach(function (filterButton) {
            filterButton.classList.toggle("active", filterButton === button);
        });

        applyFilters();
    });
});

recordTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
        activateTab(tab.dataset.tab);
    });
});

elements.searchInput.addEventListener("input", applyFilters);

elements.previousCharacter.addEventListener("click", function () {
    moveCharacter(-1);
});

elements.nextCharacter.addEventListener("click", function () {
    moveCharacter(1);
});

elements.openImageButton.addEventListener("click", function () {
    if (elements.openImageButton.disabled) {
        return;
    }

    if (typeof elements.imageModal.showModal === "function") {
        elements.imageModal.showModal();
    } else {
        elements.imageModal.setAttribute("open", "");
    }
});

elements.closeImageButton.addEventListener("click", function () {
    elements.imageModal.close();
});

elements.imageModal.addEventListener("click", function (event) {
    const bounds = elements.imageModal.getBoundingClientRect();
    const clickedOutside =
        event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom;

    if (clickedOutside) {
        elements.imageModal.close();
    }
});

document.addEventListener("keydown", function (event) {
    const target = event.target;
    const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target.isContentEditable;

    if (event.key === "/" && !isTyping) {
        event.preventDefault();
        elements.searchInput.focus();
        return;
    }

    if (event.key === "Escape" && !elements.imageModal.open) {
        elements.searchInput.value = "";
        activeFilter = "all";

        filterButtons.forEach(function (button) {
            button.classList.toggle("active", button.dataset.filter === "all");
        });

        applyFilters();
        elements.searchInput.blur();
        return;
    }

    if (!isTyping && event.key === "ArrowUp") {
        event.preventDefault();
        moveCharacter(-1);
    }

    if (!isTyping && event.key === "ArrowDown") {
        event.preventDefault();
        moveCharacter(1);
    }
});

renderCharacterList();
updateFilterCounts();
applyFilters();
activateTab("overview");
showCharacter(selectedCharacterId);
updateClock();
setInterval(updateClock, 1000);
