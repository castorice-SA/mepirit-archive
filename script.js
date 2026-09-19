// 메피릿 캐릭터 데이터
const characters = {
    m1903: {
        name: "M1903 Springfield",
        code: "US-IE-LN-1903",
        designation: "United States Rifle, Caliber .30-06, Model 1903",
        class: "LANTERN",
        height: "173cm",
        summary:
            "허리 아래까지 내려오는 옅은 금빛 장발 끝에 청록빛이 스민 차분한 성격의 고참 메피릿.",
        image: "./images/m1903.png"
    },

    m1911: {
        name: "M1911 Colt",
        code: "US-IE-LN-1911",
        designation: "United States Pistol, Caliber .45, M1911",
        class: "LANTERN",
        height: "153cm",
        summary:
            "짙은 갈색 장발과 큼직한 갈색 눈을 지닌 활발하고 즉흥적인 메피릿. 평소에는 장난이 많지만 위험할 때는 빠르게 냉정해진다.",
        image: "./images/m1911.png"
    },

    garand: {
        name: "M1 Garand",
        code: "US-IE-LN-1936",
        designation: "United States Rifle, Caliber .30, M1",
        class: "LANTERN",
        height: "170cm",
        summary:
            "밝은 갈색과 금발 사이의 머리카락을 단정히 묶은 성실한 반장. 책임감이 강하며 다른 메피릿들을 세심하게 챙긴다.",
        image: "./images/garand.png"
    },

    thompson: {
        name: "M1928 Thompson",
        code: "US-IE-LN-1928",
        designation: "Thompson Submachine Gun, Model of 1928",
        class: "LANTERN",
        height: "168cm",
        summary:
            "짙은 갈색 웨이브 머리와 녹갈색 눈을 지닌 메피릿. 자존심이 강하고 품위와 단정한 차림을 중요하게 생각한다.",
        image: "./images/thompson.png"
    },

    carbine: {
        name: "M1 Carbine",
        code: "US-IE-LN-1941",
        designation: "United States Carbine, Caliber .30, M1",
        class: "LANTERN",
        height: "159cm",
        summary:
            "복슬한 밀빛 단발과 밝고 둥근 연갈색 눈을 지닌 메피릿. 붙임성이 좋고 장난이 많으며 혼자 남겨지는 것을 싫어한다.",
        image: "./images/carbine.png"
    }
};


// HTML 요소 가져오기
const characterButtons =
    document.querySelectorAll(".character-button");

const characterImage =
    document.querySelector("#characterImage");

const imagePlaceholder =
    document.querySelector("#imagePlaceholder");

const characterCode =
    document.querySelector("#characterCode");

const characterName =
    document.querySelector("#characterName");

const characterDesignation =
    document.querySelector("#characterDesignation");

const characterSummary =
    document.querySelector("#characterSummary");

const recordCode =
    document.querySelector("#recordCode");

const recordClass =
    document.querySelector("#recordClass");

const recordHeight =
    document.querySelector("#recordHeight");

const searchInput =
    document.querySelector("#searchInput");


// 선택한 캐릭터 화면에 표시
function showCharacter(characterId) {
    const character = characters[characterId];

    if (!character) {
        return;
    }

    characterCode.textContent =
        character.code;

    characterName.textContent =
        character.name;

    characterDesignation.textContent =
        character.designation;

    characterSummary.textContent =
        character.summary;

    recordCode.textContent =
        character.code;

    recordClass.textContent =
        character.class;

    recordHeight.textContent =
        character.height;


    // 이미지 처리
    if (character.image !== "") {
        characterImage.src =
            character.image;

        characterImage.style.display =
            "block";

        imagePlaceholder.style.display =
            "none";
    } else {
        characterImage.removeAttribute("src");

        characterImage.style.display =
            "none";

        imagePlaceholder.style.display =
            "block";
    }


    // 선택된 버튼 표시
    characterButtons.forEach(function (button) {
        button.classList.remove("active");
    });

    const selectedButton =
        document.querySelector(
            `[data-character="${characterId}"]`
        );

    selectedButton.classList.add("active");
}


// 버튼을 클릭했을 때 캐릭터 변경
characterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const characterId =
            button.dataset.character;

        showCharacter(characterId);
    });
});


// 검색 기능
searchInput.addEventListener("input", function () {
    const searchWord =
        searchInput.value.toLowerCase();

    characterButtons.forEach(function (button) {
        const characterId =
            button.dataset.character;

        const character =
            characters[characterId];

        const searchableText =
            (
                character.name +
                character.code +
                character.designation +
                character.summary
            ).toLowerCase();

        if (searchableText.includes(searchWord)) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });
});


// 처음 사이트를 열었을 때 표시할 캐릭터
showCharacter("m1903");