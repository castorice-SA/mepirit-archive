// 메피릿 캐릭터 데이터
const characters = {
    m1903: {
        name: "M1903 Springfield",
        code: "US-IE-LN-1903",
        designation: "United States Rifle, Caliber .30-06, Model 1903",
        class: "LANTERN",
        height: "173cm",
        summary: "허리 아래까지 내려오는 옅은 금빛 장발 끝에 청록빛이 스민 차분한 성격의 고참 메피릿.",
        sex: "여성",
        operationalPeriod: "1903년 제식 채용 → 제1차 세계대전 운용 → 제2차 세계대전까지 지속 운용",
        origin: "미합중국, 매사추세츠주 스프링필드",
        classification: "볼트액션 소총",
        armament: [".30-06 Springfield 탄약 사용", "5발 내부 탄창", "볼트액션 작동방식"],
        appearance: {
            title: "173cm의 길고 가느다란 체형",
            items: ["허리 아래까지 내려오는 옅은 금빛 장발.", "머리카락 끝으로 갈수록 희미한 청록빛이 섞여 있다.", "맑고 옅은 푸른 눈동자.", "팔다리가 길고 선이 가늘어 실제 신장보다 조금 더 커 보이는 편.", "정돈된 미인상이지만 딱딱하거나 위압적인 분위기는 거의 없다.", "바람에 머리카락이 흐트러져도 일일이 정리하지 않는 편이다."]
        },
        personality: {
            title: "차분하고 사색적인 성향",
            items: ["타인을 큰 목소리로 통제하거나 강제로 끌고 가는 성격은 아니다.", "상황을 충분히 지켜본 뒤 꼭 필요한 말만 꺼내는 편.", "다른 사람이 실수하면 먼저 상황을 정리하고, 이후 조용히 잘못된 부분을 짚는다.", "책임감은 강하지만 그 책임감을 다른 사람에게 요구하지 않는다.", "자신의 피로나 불편함을 먼저 드러내지 않고 혼자 감당하려는 경향이 있다.", "평소 감정 변화가 크지 않아 차갑게 보일 수 있으나 실제 성격은 상당히 부드럽다.", "탁 트인 장소에서 보내는 시간을 좋아한다.", "특별한 목적 없이 바닷가나 창가에 앉아 수평선을 바라보는 것도 즐긴다.", "여행에서도 짧은 시간에 많은 장소를 보는 것보다 한 곳에 오래 머무는 쪽을 선호한다.", "자신의 의지로 이동하고 목적지를 선택하는 행위 자체에 큰 의미를 둔다."]
        },
        memory: {
            title: "감각의 형태로 남아 있는 오래된 전장",
            items: ["과거의 기억이 하나의 명확한 사건보다는 냄새와 소리, 온도와 촉감처럼 남아 있는 경우가 많다.", "젖은 흙냄새나 먼 곳의 포성, 얼굴을 스쳐 지나가는 차가운 바람 등이 오래된 기억을 자극하기도 한다.", "오랜 기간 제식소총으로 사용되며 여러 세대의 손을 거쳐온 탓에 특정 개인 한 사람보다는 수많은 사용자의 단편적인 감각이 뒤섞여 있다.", "자신에게 남은 기억을 부정하지 않지만, 그것만으로 현재의 자신을 규정하는 것도 원하지 않는다."]
        },
        overall: {
            title: "안정성과 신뢰성을 중시하는 고참 랜턴",
            items: ["급격한 변화보다는 확실하고 검증된 방법을 선호한다.", "위험한 상황에서도 쉽게 동요하지 않는다.", "먼저 행동하기보다 상황을 읽은 뒤 정확한 선택을 하는 데 강하다.", "평화로운 시대에는 전투 능력보다 관찰력과 인내심, 안정적인 성격이 더욱 두드러진다."]
        },
        image: "./images/m1903.png"
    },
    m1911: {
        name: "M1911 Colt",
        code: "US-IE-LN-1911",
        designation: "Pistol, Caliber .45, Automatic, M1911",
        class: "LANTERN",
        height: "153cm",
        summary: "짙은 갈색 장발과 큼직한 갈색 눈을 지닌 활발하고 즉흥적인 메피릿. 평소에는 장난이 많지만 위험할 때는 빠르게 냉정해진다.",
        sex: "여성",
        operationalPeriod: "1911년 제식 채용 → 제1차 세계대전 → 제2차 세계대전 및 이후까지 장기간 운용",
        origin: "미합중국, 코네티컷주 하트퍼드",
        classification: "반자동 제식권총",
        armament: [".45 ACP 탄약 사용", "7발 탄창", "쇼트 리코일 방식 반자동 권총"],
        appearance: {
            title: "153cm의 매우 작은 체구",
            items: ["짙은 갈색의 긴 머리카락.", "크고 둥근 갈색 눈.", "랜턴들 사이에서도 상당히 작은 편이며 외모 역시 어려 보인다.", "표정 변화가 매우 풍부해 감정이 얼굴에 쉽게 드러난다.", "머리를 정돈해놓아도 얼마 지나지 않아 다시 흐트러지는 일이 많다.", "가만히 서 있을 때조차 시선이 계속 주변을 돌아다닌다.", "작은 체격에 비해 움직임은 빠르고 민첩하다."]
        },
        personality: {
            title: "즉흥적이고 호기심이 강한 행동파",
            items: ["관심이 생기면 고민보다 행동이 먼저 나온다.", "처음 보는 장소나 음식, 물건에 쉽게 시선을 빼앗긴다.", "계획을 세워도 더 재미있는 것이 생기면 금방 원래 일정을 잊는다.", "규칙을 완전히 무시하는 것은 아니지만 상황에 따라 얼마든지 융통성 있게 해석한다.", "문제를 발견하면 가장 빠르고 단순한 해결법부터 떠올리는 경향이 있다.", "결과적으로 관리국 입장에서 그 해결법이 더 큰 문제가 되는 경우가 적지 않다.", "평소에는 시끄럽고 장난기가 많다.", "실제 위험을 감지하면 표정과 목소리가 빠르게 가라앉는다.", "주변의 작은 움직임이나 소리를 평소보다 훨씬 세밀하게 인식한다.", "판단이 빠르고 망설임이 적다.", "자신의 체격이나 외형 때문에 약하게 보이는 것을 크게 신경 쓰지는 않지만, 실제 능력까지 낮게 평가받는 것은 싫어한다."]
        },
        memory: {
            title: "가까운 거리의 전투와 사람에게 남은 기억",
            items: ["먼 거리의 풍경보다 손과 숨, 총성과 긴장처럼 가까운 거리의 감각이 강하게 남아 있다.", "사람의 손에 직접 쥐어진 채 움직였다는 기억의 비중이 상당히 크다.", "좁은 공간이나 갑작스럽게 터지는 소리에 몸이 먼저 반응할 때가 있다.", "전쟁에 대한 기억을 일상적으로 무겁게 꺼내지는 않지만, 실제 위험에서는 오래된 경험이 즉시 되살아난다."]
        },
        overall: {
            title: "작고 빠르며 위험에 강한 랜턴",
            items: ["일상적인 생활에서는 대표적인 사고뭉치.", "위험한 상황에서는 빠른 판단과 근거리 상황 인식 능력이 크게 두드러진다.", "새로운 환경에 대한 적응력이 높고 낯선 장소에서도 쉽게 위축되지 않는다.", "평화로운 시대에는 여행, 음식, 새로운 경험처럼 이전에는 누리기 어려웠던 것에 강한 관심을 보인다."]
        },
        image: "./images/m1911.png"
    },
    garand: {
        name: "M1 Garand",
        code: "US-IE-LN-1936",
        designation: "United States Rifle, Caliber .30, M1",
        class: "LANTERN",
        height: "171cm",
        summary: "짙은 적갈색 머리와 밝은 갈색 눈을 지닌 책임감 강한 메피릿. 스스로 할 일을 찾고 주변을 챙기는 데 익숙하다.",
        sex: "여성",
        operationalPeriod: "1930년대 제식 채용 → 제2차 세계대전 본격 운용 → 전후까지 지속 사용",
        origin: "미합중국, 매사추세츠주 스프링필드",
        classification: "반자동 소총",
        armament: [".30-06 Springfield 탄약 사용", "8발 엔블록 클립", "가스 작동식 반자동 방식"],
        appearance: {
            title: "171cm의 건강하고 균형 잡힌 체격",
            items: ["짙은 적갈색 머리.", "밝은 갈색 눈.", "지나치게 마르거나 육중하지 않은 탄탄한 체형.", "평소 머리는 움직임을 방해하지 않도록 단정하게 정리한다.", "반듯한 인상이 강하지만 군인처럼 지나치게 딱딱하게 보이지는 않는다.", "평상복에서는 의외로 편안하고 활동적인 옷차림을 선호한다."]
        },
        personality: {
            title: "높은 책임감과 자기확신",
            items: ["자신에게 맡겨진 일을 남에게 미루는 것을 좋아하지 않는다.", "지시를 기다리기보다 자신이 할 일을 먼저 찾아서 움직인다.", "일정이나 준비가 엉키면 자연스럽게 정리를 시작한다.", "자신이 잘하는 것을 굳이 못한다고 낮추지 않는 편이며 능력에 대한 자신감도 상당하다.", "그 자신감이 다른 사람을 무시하는 방향으로 이어지는 경우는 드물다.", "한번 옳다고 생각한 판단은 쉽게 바꾸지 않아 고집스럽게 보일 때가 있다.", "자신보다 경험이 적거나 작은 사람을 챙기는 것을 자연스럽게 생각한다.", "문제는 상대가 원하지 않아도 먼저 도와주려 한다는 점.", "모든 일을 자신이 책임져야 한다고 생각하는 경향이 있어 필요 이상으로 부담을 짊어질 때가 있다.", "평화로운 생활에서도 목적이나 역할이 없으면 조금 불안해하는 모습을 보인다."]
        },
        memory: {
            title: "수많은 사람에게 신뢰받았다는 기억",
            items: ["‘주력 제식소총’이라는 위치에 있었던 경험이 자아에 큰 영향을 남겼다.", "많은 사람이 자신에게 의지했던 기억은 강한 자부심이기도 하지만 동시에 부담이기도 하다.", "전쟁이 끝난 뒤에도 자신이 누군가에게 필요한 존재여야 한다는 생각을 완전히 버리지 못했다.", "자신을 단순히 성공적인 무기로 기억하는 것보다 맡은 역할을 끝까지 수행했던 존재로 보는 경향이 강하다."]
        },
        overall: {
            title: "안정적이고 책임감 강한 랜턴",
            items: ["상황 정리와 인원 관리에 능숙하다.", "긴급 상황에서도 맡은 역할을 쉽게 포기하지 않는다.", "다른 사람의 신뢰를 받는 환경에서 가장 안정적인 모습을 보인다.", "전쟁이 사라진 지금은 자신이 어떤 새로운 책임과 목적을 가질 수 있는지를 조금씩 배우는 중이다.", "휴가나 외출 자체를 싫어하지 않으며 평범한 놀이와 여행도 즐기지만, 주변 사람이 흩어지면 습관적으로 인원부터 확인한다."]
        },
        image: "./images/garand.png"
    },
    thompson: {
        name: "M1928A1 Thompson",
        code: "US-IE-LN-1928",
        designation: "Submachine Gun, Caliber .45, Thompson, Model of 1928",
        class: "LANTERN",
        height: "166cm",
        summary: "짙은 흑갈색 웨이브 머리와 선명한 청록색 눈을 지닌 사교적인 메피릿. 화려하고 세련된 분위기와 강한 존재감을 지녔다.",
        sex: "여성",
        operationalPeriod: "1920년대 후반 등장 → 제2차 세계대전 전후 본격 운용",
        origin: "미합중국",
        classification: "기관단총",
        armament: [".45 ACP 탄약 사용", "20발·30발 박스탄창 및 드럼탄창 운용", "블로우백 방식 자동화기"],
        appearance: {
            title: "166cm의 균형 잡힌 체형",
            items: ["짙은 흑갈색의 굵은 웨이브 머리.", "선명한 청록색 눈.", "자세가 좋고 움직임에 자신감이 묻어난다.", "실제 체격보다 존재감이 크게 느껴지는 타입.", "외출이나 휴가에서는 다른 랜턴보다 복장과 머리 모양에 신경을 많이 쓴다.", "화려하고 세련된 분위기가 강하며 자신의 외모를 어떻게 표현할지 잘 알고 있다."]
        },
        personality: {
            title: "사교적이고 자신감이 강함",
            items: ["낯선 사람과도 자연스럽게 대화를 시작한다.", "분위기가 조용하면 먼저 이야기를 꺼내 흐름을 만드는 경우가 많다.", "타인의 시선을 두려워하지 않으며 오히려 어느 정도 즐기는 편.", "꾸미는 일이나 새로운 유행, 분위기 좋은 장소에 관심이 많다.", "약간의 허세가 있지만 실제 행동력이 뒤따르기 때문에 단순한 허풍으로 끝나는 경우는 드물다.", "장난기가 많지만 장난과 실제 위험을 구별하는 기준은 분명하다.", "옷이나 액세서리를 선택할 때 단순한 편의성만 고려하지 않는다.", "여행을 가면 유명 관광지뿐 아니라 현지의 상점이나 카페에도 관심을 보인다.", "평화로운 시대에 자신을 꾸미고 원하는 모습으로 살아가는 것을 상당히 즐긴다."]
        },
        memory: {
            title: "화려한 이미지 뒤에 남은 실전 경험",
            items: ["자신의 유명세나 상징적인 이미지와 실제 전장에서의 경험을 구분한다.", "과거를 지나치게 무겁게 이야기하지 않지만 가볍게 희화화되는 것도 선호하지 않는다.", "위험 상황에서는 평소의 장난스러운 태도가 빠르게 사라지고 상당히 현실적인 판단을 내린다.", "자신감은 단순한 허세가 아니라 실제 경험에서 비롯된 부분이 크다."]
        },
        overall: {
            title: "높은 사교성과 강한 존재감을 가진 랜턴",
            items: ["새로운 장소에 쉽게 적응한다.", "사람을 모으고 분위기를 움직이는 능력이 뛰어나다.", "필요할 때는 대담하게 앞으로 나설 수 있다.", "평시에는 패션과 여행, 사교 활동 등 전쟁과 무관한 생활에 강한 관심을 보인다.", "과거의 상징성보다는 현재 자신이 원하는 모습으로 기억되기를 선호한다."]
        },
        image: "./images/thompson.png"
    },
    carbine: {
        name: "M1 Carbine",
        code: "US-IE-LN-1941",
        designation: "United States Carbine, Caliber .30, M1",
        class: "LANTERN",
        height: "158cm",
        summary: "밝은 밤색과 밀빛이 섞인 단발, 호박색 눈을 지닌 붙임성 좋은 메피릿. 사람과 분위기를 빠르게 읽고 자연스럽게 어울린다.",
        sex: "여성",
        operationalPeriod: "1940년대 초반 제식 채용 → 제2차 세계대전 본격 운용 → 전후까지 광범위하게 사용",
        origin: "미합중국 / 미국 내 다수 생산업체",
        classification: "반자동 카빈",
        armament: [".30 Carbine 탄약 사용", "15발 박스탄창", "가스 작동식 반자동 방식"],
        appearance: {
            title: "158cm의 작고 가벼운 체형",
            items: ["밝은 밤색 또는 밀빛이 섞인 연갈색 단발.", "밝은 호박색 눈.", "몸선이 가볍고 민첩한 인상.", "눈웃음이 잘 드러나 전체적으로 접근하기 쉬운 분위기를 가진다.", "랜턴 사이에서는 작은 축에 속해 램프로 착각받는 경우도 있다.", "작은 신체를 콤플렉스로 생각하지는 않으며 오히려 필요할 때 적극적으로 이용한다."]
        },
        personality: {
            title: "밝고 붙임성이 좋은 사교형",
            items: ["낯선 사람과도 쉽게 대화를 시작한다.", "주변 사람이 대화에서 겉돌고 있으면 빠르게 알아채고 자연스럽게 끌어들인다.", "사람의 감정과 분위기를 읽는 능력이 상당히 좋다.", "문제를 정면으로 밀어붙이기보다는 상황에 맞춰 방법을 바꾸는 것을 선호한다.", "필요할 경우 다른 사람에게 도움을 부탁하는 것에도 거리낌이 없다.", "혼자 있는 것보다는 여러 사람이 함께 있는 공간을 선호한다.", "발걸음이 빠르고 가만히 있는 것을 크게 좋아하지 않는다.", "목적 없는 산책이나 가게 구경도 즐긴다.", "장난기가 있고 다른 사람의 장난에 쉽게 휩쓸리기도 한다.", "다만 주변 분위기를 읽는 능력이 좋아 일이 정말 위험해지기 전에 빠르게 태도를 바꾸는 편이다.", "작다는 이유로 약하게 취급하는 것은 싫어한다."]
        },
        memory: {
            title: "사람들과 함께 빠르게 움직였던 기억",
            items: ["무겁고 긴 전투보다 사람을 따라 이동하고 필요한 장소를 오갔던 기억의 비중이 크다.", "전쟁의 기억에서도 이동, 동료, 사람의 목소리와 같은 요소가 강하게 남아 있다.", "혼자서 무엇인가를 해냈다는 기억보다 누군가 곁에서 함께 움직였다는 감각에 익숙하다.", "이런 경험 때문에 전후에도 사람이 많은 생활공간을 편안하게 느낀다."]
        },
        overall: {
            title: "높은 적응력과 뛰어난 친화력을 가진 랜턴",
            items: ["낯선 장소와 새로운 사람에 쉽게 적응한다.", "압박이 심하지 않은 상황에서는 매우 유연하게 행동한다.", "사람과 사람 사이를 이어주는 데 능숙하다.", "체격과 물리적인 힘보다는 움직임과 판단, 상황 적응으로 문제를 해결한다.", "평화로운 시대의 생활에 가장 자연스럽게 녹아든 랜턴 가운데 하나로, 카페나 상점, 공원 같은 평범한 공간에서도 특별한 위화감 없이 시간을 보낸다."]
        },
        image: "./images/carbine.png"
    }
};

// 기존 인물 기록의 성격과 행동 양식을 바탕으로 구성한 관계 기록 초안
const relationships = {
    m1903: [
        { target: "m1911", address: "콜트", affinity: 82, firstImpression: "작고 부산스러워 잠시도 눈을 떼기 어려운 인물.", evaluation: "돌발 행동은 많지만 실제 위험에서 내리는 빠른 판단은 신뢰한다.", quote: "콜트, 먼저 뛰어들기 전에는 한 번만 뒤를 봐줘." },
        { target: "garand", address: "개런드", affinity: 91, firstImpression: "반듯하고 준비가 철저한 믿음직한 후배.", evaluation: "책임을 혼자 지려는 점이 자신과 닮아 있어 자주 쉬게 하려 한다.", quote: "개런드, 이번 일은 혼자 짊어지지 않아도 돼." },
        { target: "thompson", address: "톰슨", affinity: 77, firstImpression: "목소리와 차림새 모두 한눈에 들어오는 인물.", evaluation: "화려한 겉모습보다 사람을 움직이는 힘과 현실적인 판단을 높게 본다.", quote: "톰슨이 앞에 서면 분위기가 금세 달라지는구나." },
        { target: "carbine", address: "카빈", affinity: 86, firstImpression: "가볍고 빠르며 누구에게나 자연스럽게 다가가는 인물.", evaluation: "사람 사이의 빈틈을 메우는 능력을 소중하게 생각한다.", quote: "카빈, 네가 있어서 모두가 조금 더 편해 보여." }
    ],
    m1911: [
        { target: "m1903", address: "스프링필드 선배님", affinity: 85, firstImpression: "조용해서 무서운 사람인 줄 알았지만 생각보다 아주 부드러웠다.", evaluation: "사고를 쳐도 끝까지 이야기를 들어주는 가장 믿음직한 고참.", quote: "선배님, 이번에는 진짜 계획대로 움직였다니까요!" },
        { target: "garand", address: "개런드", affinity: 76, firstImpression: "규칙과 일정을 너무 좋아하는 답답한 모범생.", evaluation: "잔소리는 많지만 가장 먼저 도와주러 오는 사람이라는 걸 알고 있다.", quote: "개런드, 딱 한 번만 내 방식대로 해보면 안 돼?" },
        { target: "thompson", address: "톰슨 언니", affinity: 83, firstImpression: "화려하고 멋져서 곁에 있으면 재미있는 일이 생길 것 같았다.", evaluation: "장난을 받아주면서도 위험한 순간에는 정확히 멈춰 세워주는 언니.", quote: "톰슨 언니, 오늘은 어디로 놀러 갈 거야?" },
        { target: "carbine", address: "카빈", affinity: 94, firstImpression: "처음부터 오래 알고 지낸 것처럼 말이 잘 통했다.", evaluation: "함께 돌아다니기 가장 편하고 사고를 수습할 때도 호흡이 잘 맞는다.", quote: "카빈, 저쪽에 재밌는 거 있어. 같이 가자!" }
    ],
    garand: [
        { target: "m1903", address: "스프링필드 선배", affinity: 92, firstImpression: "말수가 적어도 상황 전체를 놓치지 않는 노련한 선배.", evaluation: "자신이 흔들릴 때 판단을 맡길 수 있는 중요한 기준점으로 여긴다.", quote: "선배가 그렇게 판단했다면 저도 따르겠습니다." },
        { target: "m1911", address: "콜트", affinity: 79, firstImpression: "계획에서 가장 먼저 벗어날 것 같은 요주의 인물.", evaluation: "행동을 통제하기는 어렵지만 순발력과 위기 대처 능력은 인정한다.", quote: "콜트, 출발하기 전에 인원 확인부터 하자." },
        { target: "thompson", address: "톰슨", affinity: 74, firstImpression: "꾸밈과 즉흥적인 선택을 지나치게 중시한다고 느꼈다.", evaluation: "사람을 이끄는 방식은 다르지만 결과를 만들어내는 능력을 존중한다.", quote: "톰슨, 일정만 지켜준다면 그 계획도 나쁘지 않아." },
        { target: "carbine", address: "카빈", affinity: 89, firstImpression: "작고 가벼워 보여 자연스럽게 챙겨야겠다고 생각했다.", evaluation: "도움이 필요할 때 먼저 말해주고 주변까지 살피는 믿음직한 동료.", quote: "카빈, 다녀오면 꼭 나한테 먼저 알려줘." }
    ],
    thompson: [
        { target: "m1903", address: "스프링필드", affinity: 79, firstImpression: "조용한 태도 안에 쉽게 흔들리지 않는 품위가 보였다.", evaluation: "자신과 방식은 다르지만 가장 정확한 조언을 주는 사람이라고 생각한다.", quote: "스프링필드, 오늘만큼은 조금 화려하게 즐겨보자고." },
        { target: "m1911", address: "콜트", affinity: 84, firstImpression: "작은 체구에 비해 에너지가 넘쳐 금세 눈에 들어왔다.", evaluation: "장난을 함께 즐기면서도 위험할 때는 반드시 곁에 두고 살핀다.", quote: "콜트, 재미는 좋지만 퇴로 정도는 확인하고 가자." },
        { target: "garand", address: "개런드", affinity: 75, firstImpression: "빈틈없이 반듯해 장난을 걸어보고 싶은 상대.", evaluation: "융통성은 부족해도 맡은 일을 끝까지 책임지는 태도를 높게 평가한다.", quote: "개런드, 표정 좀 풀어. 준비는 이미 충분하잖아." },
        { target: "carbine", address: "카빈", affinity: 88, firstImpression: "사람과 장소를 빠르게 읽는 감각이 무척 좋은 인물.", evaluation: "외출과 사교 활동에서 가장 호흡이 잘 맞는 동행자.", quote: "카빈, 이번엔 네가 고른 가게부터 가보자." }
    ],
    carbine: [
        { target: "m1903", address: "스프링필드 언니", affinity: 87, firstImpression: "차분해서 다가가기 어려워 보였지만 곁에 있으면 편안했다.", evaluation: "말없이 기다려주고 필요한 순간에 정확한 말을 해주는 든든한 언니.", quote: "언니, 오늘은 창가 말고 밖에서 같이 걸어요." },
        { target: "m1911", address: "콜트", affinity: 95, firstImpression: "첫 대화부터 속도가 잘 맞아 금세 가까워졌다.", evaluation: "함께 움직일 때 가장 즐겁고 서로의 돌발 행동에도 빠르게 대응한다.", quote: "콜트, 뛰어가기 전에 나도 같이 간다고 말해줘!" },
        { target: "garand", address: "개런드 언니", affinity: 90, firstImpression: "자신을 먼저 챙겨주는 마음이 조금 과할 만큼 따뜻했다.", evaluation: "걱정이 많다는 걸 알기에 외출 뒤에는 가장 먼저 돌아왔다고 알린다.", quote: "언니, 인원 확인 끝났으면 이제 같이 놀아요." },
        { target: "thompson", address: "톰슨 언니", affinity: 89, firstImpression: "화려하지만 주변 사람을 놓치지 않는 모습이 인상적이었다.", evaluation: "새로운 장소를 함께 탐색하고 사람들 사이를 누비기 좋은 파트너.", quote: "톰슨 언니, 골목 안쪽에도 재미있는 가게가 있어요." }
    ]
};

const characterOrder = Object.keys(characters);
const totalRecords = characterOrder.length;
const passwordHash = "72ab994fa2eb426c051ef59cad617750bfe06d7cf6311285ff79c19c32afd236";
const accessSessionKey = "mepirit-archive-authorized";
let selectedCharacterId = characterOrder[0];
let activeFilter = "all";
let activeRecordTab = "overview";

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
    recordSex: document.querySelector("#recordSex"),
    recordClass: document.querySelector("#recordClass"),
    recordHeight: document.querySelector("#recordHeight"),
    recordClassification: document.querySelector("#recordClassification"),
    recordOrigin: document.querySelector("#recordOrigin"),
    recordPeriod: document.querySelector("#recordPeriod"),
    recordArmament: document.querySelector("#recordArmament"),
    appearanceTitle: document.querySelector("#appearanceTitle"),
    appearanceList: document.querySelector("#appearanceList"),
    personalityTitle: document.querySelector("#personalityTitle"),
    personalityList: document.querySelector("#personalityList"),
    memoryTitle: document.querySelector("#memoryTitle"),
    memoryList: document.querySelector("#memoryList"),
    overallTitle: document.querySelector("#overallTitle"),
    overallList: document.querySelector("#overallList"),
    relationshipTitle: document.querySelector("#relationshipTitle"),
    relationshipMap: document.querySelector("#relationshipMap"),
    relationshipCenter: document.querySelector("#relationshipCenter"),
    relationshipTargets: document.querySelector("#relationshipTargets"),
    relationshipCards: document.querySelector("#relationshipCards"),
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
const recordTabButtons = Array.from(document.querySelectorAll(".record-tab"));
const recordTabPanels = Array.from(document.querySelectorAll(".record-tab-panel"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function padNumber(number) {
    return String(number).padStart(2, "0");
}

function renderList(element, items) {
    const fragment = document.createDocumentFragment();
    items.forEach(function (item) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        fragment.appendChild(listItem);
    });
    element.replaceChildren(fragment);
}

function showRecordTab(tabName, focusTab) {
    activeRecordTab = tabName;
    recordTabButtons.forEach(function (button) {
        const isActive = button.dataset.recordTab === tabName;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", String(isActive));
        button.tabIndex = isActive ? 0 : -1;
        if (isActive && focusTab) button.focus();
    });
    recordTabPanels.forEach(function (panel) {
        const isActive = panel.dataset.recordPanel === tabName;
        panel.hidden = !isActive;
        panel.classList.toggle("active", isActive);
    });
}

function renderRelationships(characterId) {
    const character = characters[characterId];
    const entries = relationships[characterId] || [];
    const targetFragment = document.createDocumentFragment();
    const cardFragment = document.createDocumentFragment();

    elements.relationshipTitle.textContent = `${character.name} 관계 기록`;
    elements.relationshipCenter.textContent = character.name;
    elements.relationshipMap.setAttribute("aria-label", `${character.name} 중심 관계도`);

    entries.forEach(function (entry) {
        const target = characters[entry.target];
        const cardId = `relationship-card-${entry.target}`;
        const mapButton = document.createElement("button");
        const card = document.createElement("article");
        const header = document.createElement("div");
        const name = document.createElement("strong");
        const affinity = document.createElement("span");
        const details = document.createElement("dl");
        const quote = document.createElement("p");

        mapButton.type = "button";
        mapButton.className = "relation-node";
        mapButton.textContent = target.name;
        mapButton.setAttribute("aria-label", `${target.name} 관계 상세 보기`);
        mapButton.addEventListener("click", function () {
            document.querySelector(`#${cardId}`)?.scrollIntoView({
                block: "nearest",
                behavior: prefersReducedMotion.matches ? "auto" : "smooth"
            });
        });

        card.className = "relationship-card";
        card.id = cardId;
        header.className = "relationship-card-head";
        name.textContent = target.name;
        affinity.className = "affinity";
        affinity.textContent = `AFFINITY ${entry.affinity}%`;
        header.append(name, affinity);

        details.className = "relationship-meta";
        [["호칭", entry.address], ["첫인상", entry.firstImpression], ["현재 평가", entry.evaluation]].forEach(function (row) {
            const term = document.createElement("dt");
            const description = document.createElement("dd");
            term.textContent = row[0];
            description.textContent = row[1];
            details.append(term, description);
        });

        quote.className = "relationship-quote";
        quote.textContent = `“${entry.quote}”`;
        card.append(header, details, quote);
        targetFragment.appendChild(mapButton);
        cardFragment.appendChild(card);
    });

    elements.relationshipTargets.replaceChildren(targetFragment);
    elements.relationshipCards.replaceChildren(cardFragment);
}

function renderDetailedRecord(character, characterId) {
    elements.recordSex.textContent = character.sex;
    elements.recordClassification.textContent = character.classification;
    elements.recordOrigin.textContent = character.origin;
    elements.recordPeriod.textContent = character.operationalPeriod;
    renderList(elements.recordArmament, character.armament);

    ["appearance", "personality", "memory", "overall"].forEach(function (sectionName) {
        elements[`${sectionName}Title`].textContent = character[sectionName].title;
        renderList(elements[`${sectionName}List`], character[sectionName].items);
    });
    renderRelationships(characterId);
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
    renderDetailedRecord(character, characterId);
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

function buildSearchText(character, characterId) {
    function flatten(value) {
        if (Array.isArray(value)) return value.flatMap(flatten);
        if (value && typeof value === "object") return Object.values(value).flatMap(flatten);
        return String(value ?? "");
    }
    const searchableRelationships = (relationships[characterId] || []).map(function (entry) {
        return [entry.address, entry.firstImpression, entry.evaluation, entry.quote];
    });
    return flatten([character, searchableRelationships])
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
        const isVisible = buildSearchText(character, button.dataset.character).includes(searchWord) &&
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
recordTabButtons.forEach(function (button, index) {
    button.addEventListener("click", function () { showRecordTab(button.dataset.recordTab, false); });
    button.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (index + direction + recordTabButtons.length) % recordTabButtons.length;
        showRecordTab(recordTabButtons[nextIndex].dataset.recordTab, true);
    });
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
showRecordTab(activeRecordTab, false);
updateClock();
window.setInterval(updateClock, 1000);
initializeLogin();
