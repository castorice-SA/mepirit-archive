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
        image: "./images/m1911.png",
        imagePosition: "center 6%"
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
    },
    claire: {
        name: "Claire Evelyn Whitmore",
        code: "USMA-IEO-0247",
        designation: "United States Infantry Equipment Administrative Officer",
        class: "ADMINISTRATOR",
        height: "166cm",
        age: "29세",
        summary: "미합중국 보병장비 (랜턴/램프)의 생활·행정·상담·외부활동을 총괄하는 전담 관리관. 온화하지만 안전과 원칙에 대해서는 확실하게 선을 긋는다.",
        sex: "여성",
        operationalPeriod: "현직 / 미합중국 메피릿 관리국 보병장비 관리부",
        origin: "미합중국, 버지니아주 알링턴",
        classification: "인간 관리요원",
        classificationLabel: "인원 분류",
        recordListTitle: "핵심 업무",
        tabLabels: { memory: "주요 업무", overall: "관리 방침" },
        sectionCodes: { memory: "ADMINISTRATIVE DUTIES", overall: "MANAGEMENT POLICY" },
        armament: ["미합중국 보병장비 (랜턴/램프) 개체등록과 생활기록 관리", "기숙사 배정과 외출·외박·해외 방문 일정 승인", "상담·생활분쟁 중재와 신규 램프 적응 지원", "관리국 본부 및 외부기관과의 행정 연락"],
        appearance: {
            title: "166cm의 단정하고 온화한 인상",
            items: ["희고 깨끗한 피부와 허리 아래까지 흘러내리는 짙은 흑갈색 장발.", "머리카락 아래쪽에는 금빛이 희미하게 섞이며 빛에 따라 청록빛이나 보랏빛 광택이 비친다.", "오른쪽 머리에 금색 머리핀과 짙은 적갈색 리본을 착용한다.", "양쪽 눈동자 색이 서로 달라 한쪽은 적색, 다른 한쪽은 선명한 황금빛을 띤다.", "웃을 때에는 온화하지만 업무 중 표정이 굳으면 제법 냉정한 분위기가 드러난다.", "크림색 블라우스나 셔츠, 짙은 색 치마와 버건디 계열 카디건을 개인적인 근무복처럼 즐겨 입는다."]
        },
        personality: {
            title: "온화하지만 선을 확실하게 긋는 관리관",
            items: ["처음 만나는 사람에게도 예의를 갖추며 메피릿을 군사장비가 아닌 동등한 인격체로 대한다.", "명령보다 설명을 선호하고, 규칙이 필요한 이유를 당사자가 납득할 때까지 차분히 이야기한다.", "상대가 이유를 알면서 고의로 규칙을 어겼다고 판단하면 태도가 단호해진다.", "화를 내더라도 목소리를 높이기보다 말수가 줄고 평소의 미소가 사라지는 편이다.", "경험 많은 랜턴과 계보별 선후배에게 중재를 부탁하는 등 메피릿 내부 관계를 적극적으로 활용한다.", "자신을 통제자가 아니라 메피릿이 사회 안에서 살아가도록 행정적으로 돕는 사람이라고 생각한다."]
        },
        memory: {
            title: "현장을 직접 확인하는 보병장비 전담 관리 업무",
            items: ["미합중국 보병장비 (랜턴/램프)의 행정과 생활관리를 총괄한다.", "개인 신상·생활기록 갱신, 기숙사 배정, 외부활동 승인과 여행 일정 접수를 담당한다.", "정기 건강검진과 상태점검 일정을 관리하고 생활분쟁과 계보별 멘토링 상황을 확인한다.", "사고 및 규정 위반 보고서 작성, 외부기관 면담, 각국 정부기관과의 행정협조도 맡는다.", "책상에서 보고서만 받기보다 기숙사·식당·교육시설·관리동을 직접 돌며 현장을 확인한다.", "대부분의 랜턴과 램프의 이름, 생활습관, 주요 기피사항을 직접 기억하고 있다."]
        },
        overall: {
            title: "보호와 자율을 우선하는 관리 방침",
            items: ["제식번호와 운용이력은 과거를 이해하는 자료일 뿐 현재의 인격 전체를 뜻하지 않는다고 본다.", "본인이 원하지 않는 전장경험 진술이나 불필요한 전투능력 재현을 요구하지 않는다.", "랜턴과 램프 사이의 선후배 체계는 관리국이 일률적으로 정하기보다 자연스럽게 형성된 관계를 존중한다.", "규정 위반에는 비교적 관대하지만 타인의 안전을 고의로 위험에 빠뜨리는 행동에는 양보하지 않는다.", "직접적인 군사 지휘권은 없으나 관리구역의 안전을 위해 외출 일시정지, 위험지역 접근금지, 별도 면담을 요청할 수 있다.", "메피릿을 ‘무기였던 사람들’이 아니라 ‘무기에서 태어나 이제는 사람으로 살아가는 이들’로 받아들이며, 전쟁의 목적 없이 살아가도록 돕는 것을 자신의 역할로 여긴다."]
        },
        image: "./images/claire.png",
        imagePosition: "center 18%"
    },
    mp9: {
        name: "MP9",
        code: "CH-IE-LP-MP9",
        designation: "Brügger & Thomet MaschinenPistole 9mm",
        class: "LAMP",
        group: "SWISS",
        height: "155cm",
        summary: "작고 가벼운 체구에 활발한 호기심을 지닌 스위스 보병장비 램프. 생각보다 행동이 한 박자 빠르지만 주변 분위기와 상대가 싫어하는 선은 빠르게 알아차린다.",
        sex: "여성",
        operationalPeriod: "현대 / B&T 제작",
        origin: "스위스",
        classification: "PDW / 기관단총",
        recordListTitle: "기본 정보",
        tabLabels: { memory: "특징", overall: "취향" },
        sectionCodes: { memory: "CHARACTERISTICS", overall: "PREFERENCES" },
        armament: ["제조사 / B&T", "유럽 보병장비 / 스위스 보병장비", "메피릿 분류 / LAMP"],
        appearance: {
            title: "155cm의 작고 가벼운 체구",
            items: ["짙은 회색 머리카락을 길게 기르며 평소에는 높은 양갈래로 묶는다.", "머리끝이 가볍게 바깥으로 뻗어 움직일 때마다 함께 튄다.", "밝은 청록빛이 감도는 회색 눈은 둥글고 또렷하며 표정 변화가 빠르다.", "가만히 서 있을 때도 몸의 중심이 앞으로 기울어 금방이라도 뛰어나갈 듯한 인상을 준다.", "MP9-N보다 조금 더 작고 가느다란 체격과 앳된 인상을 지녔지만 눈매에는 당돌한 기색이 있다."]
        },
        personality: {
            title: "활발하고 호기심 많은 행동파",
            items: ["새로운 물건이나 처음 보는 사람을 발견하면 고민보다 먼저 다가간다.", "가만히 기다리는 것을 어려워하며 심심해지면 주변에 말을 걸거나 스스로 할 일을 만든다.", "장난을 좋아하지만 상대가 정말 싫어하는 선은 의외로 빠르게 알아차린다.", "분위기를 읽고도 재미있을 것 같으면 한 번 건드려보는 것이 문제다.", "작은 체격을 콤플렉스로 여기지 않고 좁은 곳과 빠른 움직임에서 장점으로 활용한다."]
        },
        memory: {
            title: "언니지만 더 철없어 보이는 빠른 램프",
            items: ["생각보다 행동이 한 박자 빠르다.", "자기 물건을 여기저기 놓아두고 잊는 일이 많다.", "주머니에 사탕이나 작은 간식을 넣어두는 버릇이 있다.", "누군가 뛰기 시작하면 이유를 묻기 전에 함께 뛰어간다.", "자신의 키를 놀리는 것보다 MP9-N을 건드리는 일에 훨씬 민감하다.", "동생이 보이지 않으면 가장 먼저 찾으러 다닌다."]
        },
        overall: {
            title: "빠른 움직임과 즉흥적인 외출을 좋아함",
            items: ["빠르게 움직이는 것, 산책, 새로운 장소, 작은 전자기기, 간식, 사람 많은 곳과 즉흥적인 외출을 좋아한다.", "긴 대기시간, 지나치게 엄격한 일정표, 아무것도 하지 않고 가만히 있어야 하는 상황을 싫어한다.", "MP9-N을 지나치게 모범생으로만 취급하는 것도 좋아하지 않는다."]
        },
        image: "./images/mp9.webp",
        imagePosition: "center 9%"
    },
    mp9n: {
        name: "MP9-N",
        code: "CH-IE-LP-MP9N",
        designation: "Brügger & Thomet MaschinenPistole 9mm N",
        class: "LAMP",
        group: "SWISS",
        height: "160cm",
        summary: "MP9과 같은 계열의 스위스 보병장비 램프. 밝고 활동적이지만 행동하기 전에 상황을 확인하며, 정리정돈과 일정 관리에 강한 차분한 여동생이다.",
        sex: "여성",
        operationalPeriod: "현대 / B&T 제작",
        origin: "스위스",
        classification: "PDW / 기관단총",
        recordListTitle: "기본 정보",
        tabLabels: { memory: "특징", overall: "취향" },
        sectionCodes: { memory: "CHARACTERISTICS", overall: "PREFERENCES" },
        armament: ["제조사 / B&T", "유럽 보병장비 / 스위스 보병장비", "메피릿 분류 / LAMP"],
        appearance: {
            title: "160cm의 작고 가느다란 체구",
            items: ["전체적인 생김새가 MP9과 상당히 닮아 같은 계열임을 쉽게 알아볼 수 있다.", "푸른빛이 은은하게 감도는 회색 머리카락을 어깨 아래까지 기른다.", "평소에는 낮은 반묶음이나 단정한 사이드 포니테일로 정리한다.", "맑은 청록회색 눈과 MP9보다 조금 가늘고 차분한 눈매를 지녔다.", "작은 얼굴과 앳된 이목구비에도 자세와 행동이 단정해 언니보다 성숙한 인상을 준다.", "검은색이나 짙은 회색 헤어핀과 얇은 금속 장식처럼 기능적인 소품을 선호한다."]
        },
        personality: {
            title: "밝고 활동적이지만 한 번 생각하는 성격",
            items: ["MP9이 곧바로 달려나가면 잠시 상황을 확인한 뒤 따라가는 편이다.", "정리정돈에 강하고 물건의 위치와 약속시간을 잘 기억한다.", "MP9이 잃어버린 물건을 찾아주는 일도 대부분 MP9-N의 몫이다.", "언니를 말리는 척하다가 결국 함께 재미있는 일에 참가하는 경우가 많다.", "기분이 나쁠수록 목소리를 높이기보다 말수가 줄고 표정이 차분해진다.", "자신을 단순히 MP9의 개량형이나 동생으로만 취급하는 것을 좋아하지 않는다.", "언니와 닮았어도 분명히 서로 다른 사람이라고 생각한다."]
        },
        memory: {
            title: "정돈과 일정 관리에 강한 MP9 자매의 여동생",
            items: ["자신이 사용하는 물건은 항상 정해진 자리에 둔다.", "낯선 사람 앞에서는 MP9보다 훨씬 얌전하다.", "익숙해지면 숨겨둔 장난기가 상당히 드러난다.", "언니를 말리면서도 결국 함께 사고에 휘말린다.", "MP9과 다투는 것은 괜찮지만 다른 사람이 언니를 심하게 몰아붙이는 것은 싫어한다.", "혼자 행동할 수 있지만 MP9이 오래 보이지 않으면 자연스럽게 찾으러 간다."]
        },
        overall: {
            title: "정돈된 일상과 언니와의 시간을 좋아함",
            items: ["정돈된 공간, 작은 액세서리, 기계와 장비 손질, 계획이 있는 외출, 조용한 카페와 창가 자리를 좋아한다.", "새로운 전자기기와 MP9과 둘이 돌아다니는 시간을 즐긴다.", "물건을 아무 곳에 놓는 행동, 약속시간을 지키지 않는 것, 계획 없이 일을 크게 벌이는 것을 싫어한다.", "자신을 MP9의 복제품처럼 취급하거나 MP9이 연락 없이 사라지는 상황을 싫어한다."]
        },
        image: "./images/mp9-n.png",
        imagePosition: "center 16%"
    },
    logWeekly: {
        name: "주간 인원 관리 결과",
        code: "MGA-WL-260919-01",
        designation: "클레어 업무일지 / 주간 관리 보고",
        class: "ROUTINE",
        displayClass: "일상관리",
        group: "LOGS",
        height: "2026.09.19",
        summary: "미합중국 보병장비 소속 메피릿 5인의 주간 생활·정비 상태를 종합하고 차주 관리 방침을 확정하기 위한 내부 보고.",
        sex: "Claire 관리관",
        operationalPeriod: "2026.09.13 — 2026.09.19",
        origin: "미합중국 보병장비 관리부",
        classification: "주간 인원·생활 관리",
        recordListTitle: "관련 근거",
        status: "FILED / ROUTINE",
        sectionCodes: { appearance: "01 / SITUATION", personality: "02 / ASSESSMENT", memory: "03 / COURSES OF ACTION", overall: "04 / DECISION" },
        armament: ["관리국 보병장비 생활관리 기준 제4조", "전주 관리일지 MGA-WL-260912", "개별 면담 및 일일 점검 기록"],
        appearance: {
            title: "주간 생활 및 인원 상태",
            items: ["스프링필드는 생활 리듬이 안정적이나 타인의 상태를 먼저 살피느라 본인의 휴식 시간을 뒤로 미루는 경향이 확인되었다.", "콜트와 카빈의 외출 빈도는 높았으나 복귀 보고와 상호 확인은 대체로 지켜졌다.", "개런드는 공용 정비와 인원 확인을 자발적으로 떠맡아 개인 업무 시간이 늘어났다.", "톰슨은 외부 일정 조정과 인원 간 분위기 환기에 기여했으며 중대한 규정 위반은 없었다."]
        },
        personality: {
            title: "관리상 핵심 판단",
            items: ["현재 인원 간 관계와 생활 안정도는 양호하며 획일적인 통제 강화가 필요한 상황은 아니다.", "다만 개런드와 스프링필드에게 책임이 집중되는 구조는 장기적으로 피로를 누적시킬 가능성이 있다.", "콜트·카빈의 자율성을 유지하되 외출 전후의 간단한 상호 확인 절차는 계속 필요하다."]
        },
        memory: {
            title: "차주 관리 방책 비교",
            items: ["1안 / 현행 유지: 행정 부담은 가장 적으나 책임 편중과 돌발 외출에 대한 보완이 부족하다.", "2안 / 사전 승인 강화: 통제는 쉽지만 자율성이 크게 줄어 생활구역 분위기와 신뢰에 부정적 영향이 예상된다.", "3안 / 자율 신고와 순환 담당제 병행: 외출 자유를 유지하면서 정비·확인 업무를 분산할 수 있다."]
        },
        overall: {
            title: "3안 시행 방침",
            items: ["차주부터 외출은 2인 이상 상호 확인 후 간단한 목적지와 예상 복귀 시각만 등록한다.", "공용 정비와 인원 확인 담당은 매일 순환하며 동일 인원이 연속 이틀 담당하지 않는다.", "관리관은 규정 준수 여부보다 피로 누적과 관계 변화 여부를 우선 관찰한다."]
        },
        followUp: ["순환 담당표를 작성해 생활구역 게시판과 PDA에 동시 등록한다.", "외출 신고 항목을 목적지·동행자·예상 복귀 시각의 세 항목으로 간소화한다.", "개런드와 스프링필드의 휴식 시간을 별도로 확보하고 주중 면담을 진행한다.", "7일간 시범 운용 후 인원 의견을 받아 유지 여부를 재판단한다."]
    },
    logLeave: {
        name: "외출 승인 절차 개선 검토",
        code: "MGA-WL-260918-02",
        designation: "클레어 업무일지 / 외출 관리 개선 보고",
        class: "DECISION",
        displayClass: "상황판단",
        group: "LOGS",
        height: "2026.09.18",
        summary: "즉흥적인 외출이 잦은 인원의 자율성을 보장하면서 실종·연락 두절 위험을 줄이기 위한 승인 절차 개선 보고.",
        sex: "Claire 관리관",
        operationalPeriod: "2026.09.20 시행 검토",
        origin: "미합중국 보병장비 관리부",
        classification: "외출·복귀 안전관리",
        recordListTitle: "관련 근거",
        status: "PENDING / DECISION",
        sectionCodes: { appearance: "01 / SITUATION", personality: "02 / ASSESSMENT", memory: "03 / COURSES OF ACTION", overall: "04 / DECISION" },
        armament: ["관리국 외출 및 복귀 확인 지침", "콜트·카빈·톰슨 외출 기록", "최근 30일 복귀 지연 사례 3건"],
        appearance: {
            title: "현행 절차와 문제점",
            items: ["현행 절차는 목적지와 세부 일정을 사전에 확정하도록 요구해 즉흥적인 일정 변경을 제대로 반영하지 못한다.", "콜트와 카빈은 이동 중 계획을 자주 바꾸며 톰슨은 현장에서 다른 인원을 합류시키는 경우가 있다.", "복귀가 늦어질 때 연락 자체는 이루어졌으나 담당자가 여러 기록을 대조해야 현재 위치를 파악할 수 있었다."]
        },
        personality: {
            title: "통제보다 확인 가능성 확보",
            items: ["외출 자체를 제한하는 것보다 동행자 중 한 명이 현재 위치와 복귀 변경만 남기도록 하는 편이 현실적이다.", "세부 계획 제출을 강제하면 형식적인 보고가 늘고 실제 상황과 기록의 차이가 커질 가능성이 높다.", "스프링필드와 개런드를 상시 인솔자로 지정하면 두 사람에게 다시 책임이 집중된다."]
        },
        memory: {
            title: "외출 관리 방책 비교",
            items: ["1안 / 기존 사전 승인 유지: 행정상 명확하지만 일정 변경 대응이 늦다.", "2안 / 자유 외출 후 사후 보고: 자율성은 높지만 연락 두절 시 초동 확인이 어렵다.", "3안 / 시간대 단위 승인과 대표 연락자 지정: 계획 변경을 허용하면서 최소한의 추적 가능성을 확보한다."]
        },
        overall: {
            title: "3안 조건부 시행",
            items: ["외출 승인은 세부 장소가 아닌 오전·오후·야간 시간대 단위로 부여한다.", "동행자 중 대표 연락자 한 명만 지정하고 변경 사항은 한 줄 보고로 갈음한다.", "복귀 예정 시각을 30분 이상 넘길 경우에만 관리관에게 자동 알림이 전송되도록 한다."]
        },
        followUp: ["PDA 외출 등록 화면을 세 항목으로 단순화한다.", "대표 연락자 지정은 매 외출마다 자율적으로 결정한다.", "야간 외출은 첫 2주 동안 관리관의 개별 확인을 유지한다.", "시범 운용 중 복귀 지연 사례와 인원 만족도를 함께 기록한다."]
    },
    logMaintenance: {
        name: "공용 정비 일정 재조정",
        code: "MGA-WL-260917-03",
        designation: "클레어 업무일지 / 정비 운영 후속 보고",
        class: "FOLLOWUP",
        displayClass: "후속조치",
        group: "LOGS",
        height: "2026.09.17",
        summary: "공용 정비 업무의 특정 인원 편중을 해소하고 개인 정비와 휴식 시간을 함께 보장하기 위한 일정 재조정 보고.",
        sex: "Claire 관리관",
        operationalPeriod: "2026.09.20 — 2026.09.26 시범",
        origin: "미합중국 보병장비 관리부",
        classification: "장비 정비·휴식 보장",
        recordListTitle: "관련 근거",
        status: "APPROVED / FOLLOW-UP",
        sectionCodes: { appearance: "01 / SITUATION", personality: "02 / ASSESSMENT", memory: "03 / COURSES OF ACTION", overall: "04 / DECISION" },
        armament: ["공용 정비구역 운영기록", "개런드 업무량 점검 결과", "개인 정비시간 보장 지침"],
        appearance: {
            title: "정비 업무 편중 현황",
            items: ["개런드가 공용 장비 점검표 작성과 마감 확인을 반복적으로 맡아 개인 정비가 늦어졌다.", "스프링필드는 누락된 작업을 조용히 보완했으나 별도 기록을 남기지 않아 실제 업무량이 드러나지 않았다.", "콜트와 카빈은 요청받은 작업 수행은 빠르지만 고정 담당 구역이 없어 참여 시점이 불규칙했다.", "톰슨은 물자 배치와 외부 조달에 강점이 있어 현장 정리보다 보급 조정에 적합하다."]
        },
        personality: {
            title: "강점에 맞춘 순환 배치 필요",
            items: ["동일한 정비 업무를 균등 배분하는 방식보다 강점을 반영한 역할 순환이 효율적이다.", "마감 책임자를 매일 바꾸고 관리관이 최종 확인하면 개런드의 부담을 줄이면서 품질을 유지할 수 있다.", "업무 완료 여부뿐 아니라 개인 정비와 휴식 시간이 실제로 확보됐는지 함께 확인해야 한다."]
        },
        memory: {
            title: "정비 운영 방책 비교",
            items: ["1안 / 전원 동일 업무 순환: 형평성은 높지만 숙련 차이로 작업 시간이 늘어난다.", "2안 / 숙련자 고정 담당: 품질은 안정적이나 개런드와 스프링필드의 부담이 계속된다.", "3안 / 강점별 역할 순환과 관리관 최종 확인: 업무 효율과 부담 분산을 동시에 기대할 수 있다."]
        },
        overall: {
            title: "3안 1주 시범 운용",
            items: ["점검·정리·보급·마감 네 역할을 구분하고 매일 담당을 순환한다.", "개런드는 점검 기준 안내만 맡고 마감 책임은 다른 인원과 번갈아 수행한다.", "관리관이 최종 확인을 맡아 개인 간 지적과 책임 전가가 생기지 않도록 한다."]
        },
        followUp: ["역할별 체크리스트를 5개 항목 이하로 간소화한다.", "매일 종료 후 실제 소요 시간과 누락 항목만 기록한다.", "개런드와 스프링필드의 개인 정비시간을 일정표에 먼저 고정한다.", "시범 종료일에 전원 의견을 받아 역할 구분을 조정한다."]
    }
};

// 기존 인물 기록의 성격과 행동 양식을 바탕으로 구성한 관계 기록 초안
const relationships = {
    m1903: [
        { target: "m1911", address: "콜트", affinity: 88, firstImpression: "가만히 있지 못하고 눈앞의 흥미를 따라 곧장 움직이는 활기찬 동료.", evaluation: "계획이 다음 골목에서 바뀔 것을 알 만큼 콜트의 즉흥성을 잘 안다. 그 활기가 과거의 기억에 머물던 자신을 현재의 여행으로 자연스럽게 이끌어 준다고 느낀다.", quote: "콜트, 지도대로 가는 건 다음 골목까지겠구나." },
        { target: "garand", address: "개런드", affinity: 91, firstImpression: "반듯하고 준비가 철저한 믿음직한 후배.", evaluation: "책임을 혼자 지려는 점이 자신과 닮아 있어 자주 쉬게 하려 한다.", quote: "개런드, 이번 일은 혼자 짊어지지 않아도 돼." },
        { target: "thompson", address: "톰슨", affinity: 77, firstImpression: "목소리와 차림새 모두 한눈에 들어오는 인물.", evaluation: "화려한 겉모습보다 사람을 움직이는 힘과 현실적인 판단을 높게 본다.", quote: "톰슨이 앞에 서면 분위기가 금세 달라지는구나." },
        { target: "carbine", address: "카빈", affinity: 86, firstImpression: "가볍고 빠르며 누구에게나 자연스럽게 다가가는 인물.", evaluation: "사람 사이의 빈틈을 메우는 능력을 소중하게 생각한다.", quote: "카빈, 네가 있어서 모두가 조금 더 편해 보여." },
        { target: "claire", address: "휘트모어 관리관", affinity: 89, firstImpression: "말보다 먼저 사람의 상태를 살피는 차분한 관리관.", evaluation: "과거를 억지로 묻지 않고 현재의 선택을 존중해 신뢰하고 있다.", quote: "관리관님이라면 우리가 무엇을 지키고 싶은지 이해해 주실 거예요." }
    ],
    m1911: [
        { target: "m1903", address: "스프링필드", affinity: 88, firstImpression: "낯선 풍경을 오래 바라보며 쉽게 걸음을 떼지 않는 조용하고 섬세한 동료.", evaluation: "생각에 잠긴 스프링필드를 마냥 기다리기보다 직접 불러 함께 움직인다. 격식 없이 이름을 부르고 여행의 속도로 끌어낼 만큼 편하고 가까운 사이다.", quote: "스프링필드! 너 거기서 하루 종일 서 있을 거야?" },
        { target: "garand", address: "개런드", affinity: 76, firstImpression: "규칙과 일정을 너무 좋아하는 답답한 모범생.", evaluation: "잔소리는 많지만 가장 먼저 도와주러 오는 사람이라는 걸 알고 있다.", quote: "개런드, 딱 한 번만 내 방식대로 해보면 안 돼?" },
        { target: "thompson", address: "톰슨 언니", affinity: 83, firstImpression: "화려하고 멋져서 곁에 있으면 재미있는 일이 생길 것 같았다.", evaluation: "장난을 받아주면서도 위험한 순간에는 정확히 멈춰 세워주는 언니.", quote: "톰슨 언니, 오늘은 어디로 놀러 갈 거야?" },
        { target: "carbine", address: "카빈", affinity: 94, firstImpression: "처음부터 오래 알고 지낸 것처럼 말이 잘 통했다.", evaluation: "함께 돌아다니기 가장 편하고 사고를 수습할 때도 호흡이 잘 맞는다.", quote: "카빈, 저쪽에 재밌는 거 있어. 같이 가자!" },
        { target: "claire", address: "클레어 관리관님", affinity: 86, firstImpression: "웃는 얼굴로 규칙을 설명해 방심하기 쉬운 사람.", evaluation: "웬만한 장난은 받아주지만 미소가 사라지면 즉시 멈춰야 한다는 것을 안다.", quote: "관리관님, 이번 건 보고서까지 쓸 일은 아니지 않을까요?" }
    ],
    garand: [
        { target: "m1903", address: "스프링필드 선배", affinity: 92, firstImpression: "말수가 적어도 상황 전체를 놓치지 않는 노련한 선배.", evaluation: "자신이 흔들릴 때 판단을 맡길 수 있는 중요한 기준점으로 여긴다.", quote: "선배가 그렇게 판단했다면 저도 따르겠습니다." },
        { target: "m1911", address: "콜트", affinity: 79, firstImpression: "계획에서 가장 먼저 벗어날 것 같은 요주의 인물.", evaluation: "행동을 통제하기는 어렵지만 순발력과 위기 대처 능력은 인정한다.", quote: "콜트, 출발하기 전에 인원 확인부터 하자." },
        { target: "thompson", address: "톰슨", affinity: 74, firstImpression: "꾸밈과 즉흥적인 선택을 지나치게 중시한다고 느꼈다.", evaluation: "사람을 이끄는 방식은 다르지만 결과를 만들어내는 능력을 존중한다.", quote: "톰슨, 일정만 지켜준다면 그 계획도 나쁘지 않아." },
        { target: "carbine", address: "카빈", affinity: 89, firstImpression: "작고 가벼워 보여 자연스럽게 챙겨야겠다고 생각했다.", evaluation: "도움이 필요할 때 먼저 말해주고 주변까지 살피는 믿음직한 동료.", quote: "카빈, 다녀오면 꼭 나한테 먼저 알려줘." },
        { target: "claire", address: "휘트모어 관리관", affinity: 93, firstImpression: "역할과 책임의 경계를 분명히 아는 신뢰할 만한 담당자.", evaluation: "혼자 책임을 떠안으려 할 때 일을 나누도록 설득해 주는 중요한 협력자.", quote: "관리관님, 현장 확인은 제가 함께하겠습니다." }
    ],
    thompson: [
        { target: "m1903", address: "스프링필드", affinity: 79, firstImpression: "조용한 태도 안에 쉽게 흔들리지 않는 품위가 보였다.", evaluation: "자신과 방식은 다르지만 가장 정확한 조언을 주는 사람이라고 생각한다.", quote: "스프링필드, 오늘만큼은 조금 화려하게 즐겨보자고." },
        { target: "m1911", address: "콜트", affinity: 84, firstImpression: "작은 체구에 비해 에너지가 넘쳐 금세 눈에 들어왔다.", evaluation: "장난을 함께 즐기면서도 위험할 때는 반드시 곁에 두고 살핀다.", quote: "콜트, 재미는 좋지만 퇴로 정도는 확인하고 가자." },
        { target: "garand", address: "개런드", affinity: 75, firstImpression: "빈틈없이 반듯해 장난을 걸어보고 싶은 상대.", evaluation: "융통성은 부족해도 맡은 일을 끝까지 책임지는 태도를 높게 평가한다.", quote: "개런드, 표정 좀 풀어. 준비는 이미 충분하잖아." },
        { target: "carbine", address: "카빈", affinity: 88, firstImpression: "사람과 장소를 빠르게 읽는 감각이 무척 좋은 인물.", evaluation: "외출과 사교 활동에서 가장 호흡이 잘 맞는 동행자.", quote: "카빈, 이번엔 네가 고른 가게부터 가보자." },
        { target: "claire", address: "클레어", affinity: 82, firstImpression: "단정한 차림과 부드러운 태도 속에 단호함을 숨긴 사람.", evaluation: "서류보다 현장을 이해해 대화가 통하지만, 일정에는 예상보다 엄격하다.", quote: "클레어, 외출 계획은 완벽해. 결재만 남았다고." }
    ],
    carbine: [
        { target: "m1903", address: "스프링필드 언니", affinity: 87, firstImpression: "차분해서 다가가기 어려워 보였지만 곁에 있으면 편안했다.", evaluation: "말없이 기다려주고 필요한 순간에 정확한 말을 해주는 든든한 언니.", quote: "언니, 오늘은 창가 말고 밖에서 같이 걸어요." },
        { target: "m1911", address: "콜트", affinity: 95, firstImpression: "첫 대화부터 속도가 잘 맞아 금세 가까워졌다.", evaluation: "함께 움직일 때 가장 즐겁고 서로의 돌발 행동에도 빠르게 대응한다.", quote: "콜트, 뛰어가기 전에 나도 같이 간다고 말해줘!" },
        { target: "garand", address: "개런드 언니", affinity: 90, firstImpression: "자신을 먼저 챙겨주는 마음이 조금 과할 만큼 따뜻했다.", evaluation: "걱정이 많다는 걸 알기에 외출 뒤에는 가장 먼저 돌아왔다고 알린다.", quote: "언니, 인원 확인 끝났으면 이제 같이 놀아요." },
        { target: "thompson", address: "톰슨 언니", affinity: 89, firstImpression: "화려하지만 주변 사람을 놓치지 않는 모습이 인상적이었다.", evaluation: "새로운 장소를 함께 탐색하고 사람들 사이를 누비기 좋은 파트너.", quote: "톰슨 언니, 골목 안쪽에도 재미있는 가게가 있어요." },
        { target: "claire", address: "클레어 관리관님", affinity: 92, firstImpression: "이름과 습관을 빠르게 기억해 주어 처음부터 편하게 다가갈 수 있었다.", evaluation: "도움을 요청해도 부담을 주지 않고 함께 해결책을 찾는 믿음직한 관리관.", quote: "관리관님, 이번 외출 명단은 제가 다 확인했어요!" }
    ],
    claire: [
        { target: "m1903", address: "스프링필드", affinity: 91, firstImpression: "상황을 오래 관찰한 뒤 꼭 필요한 말만 건네는 안정적인 고참.", evaluation: "후배들을 맡길 수 있는 조용한 협력자이며, 혼자 감당하려는 습관은 세심히 살핀다.", quote: "스프링필드, 이번에는 당신도 쉬는 일정에 포함이에요." },
        { target: "m1911", address: "콜트", affinity: 87, firstImpression: "호기심과 행동이 생각보다 먼저 움직이는 예측하기 어려운 인물.", evaluation: "사고는 잦아도 위험을 읽는 감각과 솔직함을 신뢰하며 설명으로 납득시키려 한다.", quote: "콜트, 이유를 설명해 줄 테니 우선 의자에 앉아요." },
        { target: "garand", address: "개런드", affinity: 94, firstImpression: "별도의 지시 없이도 필요한 일을 찾아 움직이는 책임감 강한 인물.", evaluation: "관리 업무를 가장 안정적으로 돕지만 과한 책임감으로 지치지 않도록 제지한다.", quote: "개런드, 맡은 일은 끝났어요. 나머지는 제가 할게요." },
        { target: "thompson", address: "톰슨", affinity: 84, firstImpression: "사람과 분위기를 움직일 줄 아는 자신감 넘치는 인물.", evaluation: "사교성과 현장 판단을 높게 평가하지만 일정 변경은 미리 알리도록 단단히 약속받는다.", quote: "톰슨, 좋은 계획이에요. 승인서가 먼저라는 점만 빼면요." },
        { target: "carbine", address: "카빈", affinity: 93, firstImpression: "낯선 사람도 자연스럽게 대화 안으로 이끄는 친화력 좋은 인물.", evaluation: "생활구역의 분위기와 작은 변화를 빠르게 전해주는 소중한 관찰자이자 조력자.", quote: "카빈, 오늘 식당 분위기는 어땠는지 들려줄래요?" }
    ],
    mp9: [
        { target: "mp9n", address: "MP9-N", affinity: 98, firstImpression: "자신과 가장 닮았지만 훨씬 차분하고 정돈된 동생.", evaluation: "늘 자신이 언니라고 주장하지만 생활에서는 동생에게 챙김을 받는 일이 더 많다. 다투어도 MP9-N이 보이지 않으면 가장 먼저 찾으러 간다.", quote: "내가 언니니까 먼저 갈게. 넌 바로 따라와!" }
    ],
    mp9n: [
        { target: "mp9", address: "언니", affinity: 98, firstImpression: "생각보다 행동이 먼저 나가지만 혼자 두고 볼 수 없는 가장 가까운 가족.", evaluation: "말리고 뒷정리하는 일이 많아도 결국 함께 움직이는 친구이자 자매다. 언니가 곤란해지면 누구보다 먼저 나선다.", quote: "언니, 잠깐만요. 적어도 어디로 가는지는 말하고 뛰어가요." }
    ]
};

const characterOrder = Object.keys(characters);
const totalRecords = characterOrder.length;
const passwordSalt = "mepirit-archive-v21-client-guard";
const passwordHash = "9794bc307b4ff47ef2591c0f5bcdce6178b1ba23df43a1a3677627975b6cf65b";
const accessSessionKey = "mepirit-archive-authorized";
const loginSecurityKey = "mepirit-archive-login-security";
const securityPolicy = Object.freeze({ maxAttempts: 5, initialLockMs: 30000, maxLockMs: 300000, idleTimeoutMs: 900000, sessionTimeoutMs: 3600000 });
let selectedCharacterId = characterOrder[0];
let activeCollection = "US";
let activeFilter = "all";
let activeRecordTab = "overview";
let bootSequenceToken = 0;
let lockoutTimerId = 0;
let sessionTimerId = 0;
let idleTimerId = 0;
let sessionExpiresAt = 0;
let lastActivityAt = 0;

const elements = {
    loginScreen: document.querySelector("#loginScreen"),
    loginForm: document.querySelector("#loginForm"),
    loginCard: document.querySelector(".login-card"),
    passwordInput: document.querySelector("#passwordInput"),
    togglePassword: document.querySelector("#togglePassword"),
    loginSubmit: document.querySelector("#loginSubmit"),
    logoutButton: document.querySelector("#logoutButton"),
    loginMessage: document.querySelector("#loginMessage"),
    welcomeMessage: document.querySelector("#welcomeMessage"),
    pdaBoot: document.querySelector("#pdaBoot"),
    pdaBootStep: document.querySelector("#pdaBootStep"),
    pdaBootPercent: document.querySelector("#pdaBootPercent"),
    pdaBootBar: document.querySelector("#pdaBootBar"),
    skipBootButton: document.querySelector("#skipBootButton"),
    archiveApp: document.querySelector("#archiveApp"),
    searchInput: document.querySelector("#searchInput"),
    clearSearch: document.querySelector("#clearSearch"),
    resetFilters: document.querySelector("#resetFilters"),
    characterList: document.querySelector("#characterList"),
    emptyResult: document.querySelector("#emptyResult"),
    selectionHint: document.querySelector("#selectionHint"),
    selectionAnnouncement: document.querySelector("#selectionAnnouncement"),
    indexCount: document.querySelector("#indexCount"),
    indexKicker: document.querySelector("#indexKicker"),
    indexTitle: document.querySelector("#indexTitle"),
    indexHelpText: document.querySelector("#indexHelpText"),
    filterTabs: document.querySelector(".filter-tabs"),
    headerRecordCount: document.querySelector("#headerRecordCount"),
    allFilterCount: document.querySelector("#allFilterCount"),
    lanternFilterCount: document.querySelector("#lanternFilterCount"),
    lampFilterCount: document.querySelector("#lampFilterCount"),
    administratorFilterCount: document.querySelector("#administratorFilterCount"),
    routineFilterCount: document.querySelector("#routineFilterCount"),
    decisionFilterCount: document.querySelector("#decisionFilterCount"),
    followupFilterCount: document.querySelector("#followupFilterCount"),
    administratorFilterButton: document.querySelector('[data-filter="ADMINISTRATOR"]'),
    selectedRecordLabel: document.querySelector("#selectedRecordLabel"),
    visualLogNumber: document.querySelector("#visualLogNumber"),
    visualLabel: document.querySelector("#visualLabel"),
    frameRecordCode: document.querySelector("#frameRecordCode"),
    imageFrame: document.querySelector("#imageFrame"),
    visualPanel: document.querySelector(".visual-panel"),
    recordPanel: document.querySelector(".record-panel"),
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
    profilePrimaryLabel: document.querySelector("#profilePrimaryLabel"),
    profileSecondaryLabel: document.querySelector("#profileSecondaryLabel"),
    readRecordText: document.querySelector("#readRecordText"),
    characterSummary: document.querySelector("#characterSummary"),
    recordKicker: document.querySelector("#recordKicker"),
    recordTitle: document.querySelector("#recordTitle"),
    documentTypeLabel: document.querySelector("#documentTypeLabel"),
    documentStamp: document.querySelector("#documentStamp"),
    recordSummaryTitle: document.querySelector("#recordSummaryTitle"),
    recordInfoTitle: document.querySelector("#recordInfoTitle"),
    recordCodeLabel: document.querySelector("#recordCodeLabel"),
    recordDesignationLabel: document.querySelector("#recordDesignationLabel"),
    recordSexLabel: document.querySelector("#recordSexLabel"),
    recordHeightLabel: document.querySelector("#recordHeightLabel"),
    recordClassificationLabel: document.querySelector("#recordClassificationLabel"),
    recordOriginLabel: document.querySelector("#recordOriginLabel"),
    recordPeriodLabel: document.querySelector("#recordPeriodLabel"),
    recordCode: document.querySelector("#recordCode"),
    recordDesignation: document.querySelector("#recordDesignation"),
    recordSex: document.querySelector("#recordSex"),
    recordAgeLabel: document.querySelector("#recordAgeLabel"),
    recordAge: document.querySelector("#recordAge"),
    recordClassLabel: document.querySelector("#recordClassLabel"),
    recordClass: document.querySelector("#recordClass"),
    recordHeight: document.querySelector("#recordHeight"),
    recordClassification: document.querySelector("#recordClassification"),
    recordOrigin: document.querySelector("#recordOrigin"),
    recordPeriod: document.querySelector("#recordPeriod"),
    recordArmament: document.querySelector("#recordArmament"),
    recordListTitle: document.querySelector("#recordListTitle"),
    appearanceTitle: document.querySelector("#appearanceTitle"),
    appearanceList: document.querySelector("#appearanceList"),
    appearanceSectionCode: document.querySelector("#appearanceSectionCode"),
    personalityTitle: document.querySelector("#personalityTitle"),
    personalityList: document.querySelector("#personalityList"),
    personalitySectionCode: document.querySelector("#personalitySectionCode"),
    memoryTitle: document.querySelector("#memoryTitle"),
    memoryList: document.querySelector("#memoryList"),
    memorySectionCode: document.querySelector("#memorySectionCode"),
    overallTitle: document.querySelector("#overallTitle"),
    overallList: document.querySelector("#overallList"),
    overallSectionCode: document.querySelector("#overallSectionCode"),
    memoryTabButton: document.querySelector("#recordTabMemory"),
    overallTabButton: document.querySelector("#recordTabOverall"),
    overviewTabButton: document.querySelector("#recordTabOverview"),
    appearanceTabButton: document.querySelector("#recordTabAppearance"),
    personalityTabButton: document.querySelector("#recordTabPersonality"),
    relationshipsTabButton: document.querySelector("#recordTabRelationships"),
    archiveNoticeTitle: document.querySelector("#archiveNoticeTitle"),
    archiveNoticeText: document.querySelector("#archiveNoticeText"),
    relationshipTitle: document.querySelector("#relationshipTitle"),
    relationshipLead: document.querySelector("#relationshipLead"),
    relationshipMap: document.querySelector("#relationshipMap"),
    relationshipCenter: document.querySelector("#relationshipCenter"),
    relationshipTargets: document.querySelector("#relationshipTargets"),
    relationshipCards: document.querySelector("#relationshipCards"),
    relationshipSection: document.querySelector("#relationshipSection"),
    workLogActionsSection: document.querySelector("#workLogActionsSection"),
    workLogActionsTitle: document.querySelector("#workLogActionsTitle"),
    workLogActionsList: document.querySelector("#workLogActionsList"),
    workLogDocument: document.querySelector("#workLogDocument"),
    workLogDocumentCode: document.querySelector("#workLogDocumentCode"),
    workLogDocumentDate: document.querySelector("#workLogDocumentDate"),
    workLogDocumentTitle: document.querySelector("#workLogDocumentTitle"),
    workLogDocumentAuthor: document.querySelector("#workLogDocumentAuthor"),
    workLogDocumentDepartment: document.querySelector("#workLogDocumentDepartment"),
    workLogDocumentCategory: document.querySelector("#workLogDocumentCategory"),
    workLogDocumentPeriod: document.querySelector("#workLogDocumentPeriod"),
    workLogDocumentSummary: document.querySelector("#workLogDocumentSummary"),
    workLogDocumentBasis: document.querySelector("#workLogDocumentBasis"),
    workLogDocumentSituationTitle: document.querySelector("#workLogDocumentSituationTitle"),
    workLogDocumentSituation: document.querySelector("#workLogDocumentSituation"),
    workLogDocumentAssessmentTitle: document.querySelector("#workLogDocumentAssessmentTitle"),
    workLogDocumentAssessment: document.querySelector("#workLogDocumentAssessment"),
    workLogDocumentCoursesTitle: document.querySelector("#workLogDocumentCoursesTitle"),
    workLogDocumentCourses: document.querySelector("#workLogDocumentCourses"),
    workLogDocumentDecisionTitle: document.querySelector("#workLogDocumentDecisionTitle"),
    workLogDocumentDecision: document.querySelector("#workLogDocumentDecision"),
    workLogDocumentFollowUp: document.querySelector("#workLogDocumentFollowUp"),
    recordSyncStatus: document.querySelector("#recordSyncStatus"),
    recordFooterPosition: document.querySelector("#recordFooterPosition"),
    footerEntityName: document.querySelector("#footerEntityName"),
    footerEdition: document.querySelector("#footerEdition"),
    footerRecordPosition: document.querySelector("#footerRecordPosition"),
    statusbar: document.querySelector(".statusbar"),
    previousCharacter: document.querySelector("#previousCharacter"),
    nextCharacter: document.querySelector("#nextCharacter"),
    systemClock: document.querySelector("#systemClock"),
    sessionStatus: document.querySelector("#sessionStatus"),
    imageModal: document.querySelector("#imageModal"),
    modalImage: document.querySelector("#modalImage"),
    modalCaption: document.querySelector("#modalCaption"),
    closeImageButton: document.querySelector("#closeImageButton")
};

const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const collectionButtons = Array.from(document.querySelectorAll(".collection-button"));
const recordTabButtons = Array.from(document.querySelectorAll(".record-tab"));
const recordTabPanels = Array.from(document.querySelectorAll(".record-tab-panel"));
const uiSizeButtons = Array.from(document.querySelectorAll("[data-ui-size]"));
const workLogFilterButtons = filterButtons.filter(function (button) { return button.classList.contains("work-log-filter"); });
const entityFilterButtons = filterButtons.filter(function (button) {
    return button.dataset.filter !== "all" && !button.classList.contains("work-log-filter");
});
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const uiSizeStorageKey = "mepirit-pda-type-size";
const seoulClockFormatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
});

function padNumber(number) {
    return String(number).padStart(2, "0");
}

function getCharacterCollection(character) {
    if (character.group === "SWISS") return "SWISS";
    if (character.group === "LOGS") return "LOGS";
    return "US";
}

function getCollectionCharacterIds(collectionName = activeCollection) {
    return characterOrder.filter(function (id) {
        return getCharacterCollection(characters[id]) === collectionName;
    });
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

function updateCollectionPresentation(collectionName) {
    const isWorkLog = collectionName === "LOGS";
    document.body.classList.toggle("work-log-mode", isWorkLog);
    elements.indexKicker.textContent = isWorkLog ? "01 / WORK LOG INDEX" : "01 / ENTITY INDEX";
    elements.indexTitle.textContent = isWorkLog ? "업무일지 색인" : "인물 색인";
    elements.indexHelpText.innerHTML = isWorkLog
        ? "목록에서 업무일지를 선택하면<br>관리 업무 보고서를 열람할 수 있습니다."
        : "목록에서 인물을 선택하면<br>보관된 기록을 열람할 수 있습니다.";
    elements.characterList.setAttribute("aria-label", isWorkLog ? "클레어 업무일지" : "검색된 캐릭터");
    elements.filterTabs.setAttribute("aria-label", isWorkLog ? "업무일지 기록 분류" : "선택한 보병장비의 하위 분류 필터");
    elements.searchInput.placeholder = isWorkLog ? "일지 제목, 보고 번호, 내용 검색" : "이름, 식별 번호, 기록 검색";
    elements.visualLabel.textContent = isWorkLog ? "ADMINISTRATOR RECORD" : "CHARACTER PORTRAIT";
    elements.recordKicker.textContent = isWorkLog ? "03 / MANAGEMENT REPORT" : "03 / ENTITY DOSSIER";
    elements.recordTitle.textContent = isWorkLog ? "업무 보고" : "인물 기록";
    elements.documentTypeLabel.textContent = isWorkLog ? "MANAGEMENT / REPORT" : "ENTITY / GENERAL";
    elements.documentStamp.textContent = isWorkLog ? "결재 완료" : "열람 가능";
    elements.recordSummaryTitle.textContent = isWorkLog ? "보고 목적" : "기초 기록";
    elements.recordInfoTitle.textContent = isWorkLog ? "문서 정보" : "식별 정보";
    elements.profilePrimaryLabel.innerHTML = isWorkLog ? "DATE <span>보고일</span>" : "HEIGHT <span>신장</span>";
    elements.profileSecondaryLabel.innerHTML = isWorkLog ? "TYPE <span>구분</span>" : "CLASS <span>분류</span>";
    elements.readRecordText.textContent = isWorkLog ? "업무 기록" : "인물 기록";
    elements.recordCodeLabel.textContent = isWorkLog ? "문서 번호" : "식별 번호";
    elements.recordDesignationLabel.textContent = isWorkLog ? "문서 명칭" : "정식 명칭";
    elements.recordSexLabel.textContent = isWorkLog ? "작성자" : "성별";
    elements.recordHeightLabel.textContent = isWorkLog ? "보고일" : "신장";
    elements.recordClassificationLabel.textContent = isWorkLog ? "보고 분야" : "병기 분류";
    elements.recordOriginLabel.textContent = isWorkLog ? "담당 부서" : "출신";
    elements.recordPeriodLabel.textContent = isWorkLog ? "적용 기간" : "활동 시기";
    elements.overviewTabButton.textContent = "개요";
    elements.appearanceTabButton.textContent = isWorkLog ? "상황" : "외형";
    elements.personalityTabButton.textContent = isWorkLog ? "판단" : "성향";
    elements.memoryTabButton.textContent = isWorkLog ? "방책" : "전쟁 기억";
    elements.overallTabButton.textContent = isWorkLog ? "최종 방침" : "종합";
    elements.relationshipsTabButton.textContent = isWorkLog ? "조치" : "관계";
    elements.footerEdition.innerHTML = isWorkLog
        ? 'MANAGEMENT REPORT ARCHIVE <span aria-hidden="true">/</span> 03'
        : 'ENTITY RECORD COLLECTION <span aria-hidden="true">/</span> 01';
    elements.previousCharacter.setAttribute("aria-label", isWorkLog ? "이전 업무일지" : "이전 캐릭터");
    elements.nextCharacter.setAttribute("aria-label", isWorkLog ? "다음 업무일지" : "다음 캐릭터");
    elements.previousCharacter.title = isWorkLog ? "이전 업무일지 (↑)" : "이전 캐릭터 (↑)";
    elements.nextCharacter.title = isWorkLog ? "다음 업무일지 (↓)" : "다음 캐릭터 (↓)";
    entityFilterButtons.forEach(function (button) {
        button.hidden = isWorkLog || (collectionName === "SWISS" && button.dataset.filter === "ADMINISTRATOR");
    });
    workLogFilterButtons.forEach(function (button) { button.hidden = !isWorkLog; });
}

function getRelationshipDisplayName(characterId) {
    return characterId === "claire" ? "Claire 관리관" : characters[characterId].name;
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
    const characterDisplayName = getRelationshipDisplayName(characterId);
    const entries = relationships[characterId] || [];
    const targetFragment = document.createDocumentFragment();
    const cardFragment = document.createDocumentFragment();

    elements.relationshipTitle.textContent = `${characterDisplayName} 관계 기록`;
    elements.relationshipLead.textContent = `${characterDisplayName}의 시점을 기준으로 한 상호 관계 기록입니다. 관계도에서 대상을 선택하면 해당 기록으로 이동합니다.`;
    elements.relationshipCenter.textContent = characterDisplayName;
    elements.relationshipMap.setAttribute("aria-label", `${characterDisplayName} 중심 관계도`);
    elements.relationshipMap.classList.toggle("has-five", entries.length === 5);
    elements.relationshipMap.classList.toggle("is-pair", entries.length === 1);

    entries.forEach(function (entry, index) {
        const target = characters[entry.target];
        const targetDisplayName = getRelationshipDisplayName(entry.target);
        const reverseEntry = (relationships[entry.target] || []).find(function (candidate) {
            return candidate.target === characterId;
        });
        const cardId = `relationship-card-${entry.target}`;
        const mapButton = document.createElement("button");
        const mapName = document.createElement("span");
        const mapAffinity = document.createElement("small");
        const card = document.createElement("article");
        const header = document.createElement("div");
        const name = document.createElement("strong");
        const affinity = document.createElement("span");
        const details = document.createElement("dl");
        const quote = document.createElement("p");
        const reverseRecord = document.createElement("details");
        const reverseSummary = document.createElement("summary");
        const reverseBody = document.createElement("div");
        const reverseEvaluation = document.createElement("p");
        const reverseQuote = document.createElement("p");

        mapButton.type = "button";
        mapButton.className = "relation-node";
        mapButton.classList.toggle("active", index === 0);
        mapButton.setAttribute("aria-pressed", String(index === 0));
        mapButton.style.setProperty("--affinity", `${entry.affinity}%`);
        mapName.textContent = targetDisplayName;
        mapAffinity.textContent = `유대 ${entry.affinity}%`;
        mapButton.append(mapName, mapAffinity);
        mapButton.setAttribute("aria-label", `${targetDisplayName} 관계 상세 보기`);
        mapButton.addEventListener("click", function () {
            elements.relationshipTargets.querySelectorAll(".relation-node").forEach(function (node) {
                const isActive = node === mapButton;
                node.classList.toggle("active", isActive);
                node.setAttribute("aria-pressed", String(isActive));
            });
            elements.relationshipCards.querySelectorAll(".relationship-card").forEach(function (relationshipCard) {
                relationshipCard.classList.toggle("active", relationshipCard.id === cardId);
            });
            document.querySelector(`#${cardId}`)?.scrollIntoView({
                block: "nearest",
                behavior: prefersReducedMotion.matches ? "auto" : "smooth"
            });
        });

        card.className = "relationship-card";
        card.classList.toggle("active", index === 0);
        card.id = cardId;
        header.className = "relationship-card-head";
        name.textContent = targetDisplayName;
        affinity.className = "affinity";
        affinity.textContent = `AFFINITY ${entry.affinity}%`;
        affinity.style.setProperty("--affinity", `${entry.affinity}%`);
        header.append(name, affinity);

        details.className = "relationship-meta";
        [
            ["내 호칭", entry.address],
            ["상대 호칭", reverseEntry ? reverseEntry.address : "기록 없음"],
            ["첫인상", entry.firstImpression],
            ["현재 평가", entry.evaluation]
        ].forEach(function (row) {
            const term = document.createElement("dt");
            const description = document.createElement("dd");
            term.textContent = row[0];
            description.textContent = row[1];
            details.append(term, description);
        });

        quote.className = "relationship-quote";
        quote.textContent = `“${entry.quote}”`;

        card.append(header, details, quote);
        if (reverseEntry) {
            reverseRecord.className = "relationship-reverse";
            reverseSummary.textContent = `${targetDisplayName} 시점 기록`;
            reverseEvaluation.textContent = reverseEntry.evaluation;
            reverseQuote.className = "relationship-reverse-quote";
            reverseQuote.textContent = `“${reverseEntry.quote}”`;
            reverseBody.append(reverseEvaluation, reverseQuote);
            reverseRecord.append(reverseSummary, reverseBody);
            card.appendChild(reverseRecord);
        }
        targetFragment.appendChild(mapButton);
        cardFragment.appendChild(card);
    });

    elements.relationshipTargets.replaceChildren(targetFragment);
    elements.relationshipCards.replaceChildren(cardFragment);
}

function renderDetailedRecord(character, characterId) {
    const isWorkLog = character.group === "LOGS";
    elements.recordSex.textContent = character.sex;
    const hasAge = Boolean(character.age);
    elements.recordAgeLabel.hidden = !hasAge;
    elements.recordAge.hidden = !hasAge;
    elements.recordAge.textContent = character.age || "";
    elements.recordClassLabel.textContent = isWorkLog ? "보고 분류" : (character.classificationLabel || "메피릿 분류");
    elements.recordClassification.textContent = character.classification;
    elements.recordOrigin.textContent = character.origin;
    elements.recordPeriod.textContent = character.operationalPeriod;
    elements.recordListTitle.textContent = character.recordListTitle || "주요 무장";
    elements.memoryTabButton.textContent = isWorkLog ? "방책" : (character.tabLabels?.memory || "전쟁 기억");
    elements.overallTabButton.textContent = isWorkLog ? "최종 방침" : (character.tabLabels?.overall || "종합");
    elements.appearanceSectionCode.textContent = character.sectionCodes?.appearance || "APPEARANCE PROFILE";
    elements.personalitySectionCode.textContent = character.sectionCodes?.personality || "PERSONALITY PROFILE";
    elements.memorySectionCode.textContent = character.sectionCodes?.memory || "WAR MEMORY RECORD";
    elements.overallSectionCode.textContent = character.sectionCodes?.overall || "GENERAL ASSESSMENT";
    if (isWorkLog) {
        elements.archiveNoticeTitle.textContent = "FICTIONAL MANAGEMENT RECORD";
        elements.archiveNoticeText.textContent = "메피릿 세계관을 위한 허구의 관리국 내부 기록입니다. 업무 보고 양식의 표지·목적·관련 근거 구조를 PDA 기록 형식에 맞게 재구성했습니다.";
    } else if (character.group === "SWISS") {
        elements.archiveNoticeTitle.textContent = "SWISS ARCHIVE SOURCE";
        elements.archiveNoticeText.textContent = "스위스 보병장비 등록부를 바탕으로 정리한 램프 기록입니다. 각 메피릿은 독립된 인격체로 기록됩니다.";
    } else if (character.class === "ADMINISTRATOR") {
        elements.archiveNoticeTitle.textContent = "PERSONNEL RECORD SOURCE";
        elements.archiveNoticeText.textContent = "미합중국 메피릿 관리국 보병장비 관리부 인원기록을 바탕으로 정리한 관리요원 기록입니다.";
    } else {
        elements.archiveNoticeTitle.textContent = "ARCHIVE SOURCE";
        elements.archiveNoticeText.textContent = "미합중국 보병장비 인원 등록부를 바탕으로 정리한 인물 기록입니다. 각 메피릿은 독립된 인격체로 기록됩니다.";
    }
    renderList(elements.recordArmament, character.armament);

    ["appearance", "personality", "memory", "overall"].forEach(function (sectionName) {
        elements[`${sectionName}Title`].textContent = character[sectionName].title;
        renderList(elements[`${sectionName}List`], character[sectionName].items);
    });
    elements.relationshipSection.hidden = isWorkLog;
    elements.workLogActionsSection.hidden = !isWorkLog;
    if (isWorkLog) {
        elements.workLogActionsTitle.textContent = `${character.name} / 후속 조치`;
        renderList(elements.workLogActionsList, character.followUp || []);
        elements.workLogDocumentCode.textContent = character.code;
        elements.workLogDocumentDate.textContent = character.height;
        elements.workLogDocumentTitle.textContent = character.name;
        elements.workLogDocumentAuthor.textContent = character.sex;
        elements.workLogDocumentDepartment.textContent = character.origin;
        elements.workLogDocumentCategory.textContent = character.classification;
        elements.workLogDocumentPeriod.textContent = character.operationalPeriod;
        elements.workLogDocumentSummary.textContent = character.summary;
        elements.workLogDocumentSituationTitle.textContent = character.appearance.title;
        elements.workLogDocumentAssessmentTitle.textContent = character.personality.title;
        elements.workLogDocumentCoursesTitle.textContent = character.memory.title;
        elements.workLogDocumentDecisionTitle.textContent = character.overall.title;
        renderList(elements.workLogDocumentBasis, character.armament);
        renderList(elements.workLogDocumentSituation, character.appearance.items);
        renderList(elements.workLogDocumentAssessment, character.personality.items);
        renderList(elements.workLogDocumentCourses, character.memory.items);
        renderList(elements.workLogDocumentDecision, character.overall.items);
        renderList(elements.workLogDocumentFollowUp, character.followUp || []);
    } else {
        renderRelationships(characterId);
    }
}

async function hashPassword(value) {
    const encoder = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey("raw", encoder.encode(value), "PBKDF2", false, ["deriveBits"]);
    const derivedBits = await window.crypto.subtle.deriveBits({
        name: "PBKDF2",
        hash: "SHA-256",
        salt: encoder.encode(passwordSalt),
        iterations: 120000
    }, keyMaterial, 256);
    return Array.from(new Uint8Array(derivedBits), function (byte) {
        return byte.toString(16).padStart(2, "0");
    }).join("");
}

function hashesMatch(first, second) {
    if (first.length !== second.length) return false;
    let difference = 0;
    for (let index = 0; index < first.length; index += 1) {
        difference |= first.charCodeAt(index) ^ second.charCodeAt(index);
    }
    return difference === 0;
}

function readJsonStorage(storage, key) {
    try {
        const value = storage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch {
        return null;
    }
}

function writeJsonStorage(storage, key, value) {
    try {
        storage.setItem(key, JSON.stringify(value));
        return true;
    } catch {
        return false;
    }
}

function getLoginSecurityState() {
    const stored = readJsonStorage(window.localStorage, loginSecurityKey);
    if (!stored || typeof stored !== "object") return { attempts: 0, lockLevel: 0, lockUntil: 0, updatedAt: 0 };
    if (Date.now() - Number(stored.updatedAt || 0) > 86400000) return { attempts: 0, lockLevel: 0, lockUntil: 0, updatedAt: 0 };
    return {
        attempts: Math.max(0, Number(stored.attempts) || 0),
        lockLevel: Math.max(0, Number(stored.lockLevel) || 0),
        lockUntil: Math.max(0, Number(stored.lockUntil) || 0),
        updatedAt: Math.max(0, Number(stored.updatedAt) || 0)
    };
}

function saveLoginSecurityState(state) {
    state.updatedAt = Date.now();
    writeJsonStorage(window.localStorage, loginSecurityKey, state);
}

function clearLoginSecurityState() {
    window.clearInterval(lockoutTimerId);
    lockoutTimerId = 0;
    try { window.localStorage.removeItem(loginSecurityKey); } catch { /* Storage access may be disabled. */ }
    elements.passwordInput.disabled = false;
    elements.togglePassword.disabled = false;
    elements.loginSubmit.disabled = false;
}

function formatRemainingTime(milliseconds) {
    const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateLoginLockout() {
    const state = getLoginSecurityState();
    const remaining = state.lockUntil - Date.now();
    const locked = remaining > 0;
    elements.passwordInput.disabled = locked;
    elements.togglePassword.disabled = locked;
    elements.loginSubmit.disabled = locked;
    if (locked) {
        elements.loginMessage.textContent = `SECURITY LOCK / ${formatRemainingTime(remaining)} 후 다시 시도하세요.`;
        elements.loginMessage.classList.add("is-error");
        return true;
    }
    if (state.lockUntil) {
        state.lockUntil = 0;
        saveLoginSecurityState(state);
        elements.loginMessage.textContent = "잠금이 해제되었습니다. 비밀번호를 다시 입력해 주세요.";
        elements.loginMessage.classList.remove("is-error");
    }
    window.clearInterval(lockoutTimerId);
    lockoutTimerId = 0;
    return false;
}

function startLoginLockoutCountdown() {
    window.clearInterval(lockoutTimerId);
    if (!updateLoginLockout()) return;
    lockoutTimerId = window.setInterval(updateLoginLockout, 1000);
}

function recordFailedLogin() {
    const state = getLoginSecurityState();
    state.attempts += 1;
    if (state.attempts >= securityPolicy.maxAttempts) {
        state.attempts = 0;
        state.lockLevel += 1;
        const lockDuration = Math.min(securityPolicy.initialLockMs * (2 ** (state.lockLevel - 1)), securityPolicy.maxLockMs);
        state.lockUntil = Date.now() + lockDuration;
        saveLoginSecurityState(state);
        startLoginLockoutCountdown();
        return;
    }
    saveLoginSecurityState(state);
    const remainingAttempts = securityPolicy.maxAttempts - state.attempts;
    elements.loginMessage.textContent = `ACCESS DENIED / 남은 시도 ${remainingAttempts}회`;
    elements.loginMessage.classList.add("is-error");
    elements.loginSubmit.disabled = false;
    elements.passwordInput.select();
}

function readAccessSession() {
    const session = readJsonStorage(window.sessionStorage, accessSessionKey);
    if (!session || typeof session.expiresAt !== "number" || session.expiresAt <= Date.now()) {
        try { window.sessionStorage.removeItem(accessSessionKey); } catch { /* Storage access may be disabled. */ }
        return null;
    }
    return session;
}

function createAccessSession() {
    const issuedAt = Date.now();
    const session = { issuedAt, expiresAt: issuedAt + securityPolicy.sessionTimeoutMs };
    writeJsonStorage(window.sessionStorage, accessSessionKey, session);
    return session;
}

function stopSessionMonitoring() {
    window.clearInterval(sessionTimerId);
    window.clearTimeout(idleTimerId);
    sessionTimerId = 0;
    idleTimerId = 0;
    sessionExpiresAt = 0;
    lastActivityAt = 0;
    elements.sessionStatus.textContent = "SESSION LOCKED";
}

function scheduleIdleLock() {
    window.clearTimeout(idleTimerId);
    const remaining = securityPolicy.idleTimeoutMs - (Date.now() - lastActivityAt);
    if (remaining <= 0) {
        lockArchive("SESSION LOCKED / 15분 동안 활동이 없어 자동 로그아웃되었습니다.");
        return;
    }
    idleTimerId = window.setTimeout(function () {
        lockArchive("SESSION LOCKED / 15분 동안 활동이 없어 자동 로그아웃되었습니다.");
    }, remaining);
}

function updateSessionSecurity() {
    if (document.body.classList.contains("is-locked")) return;
    const now = Date.now();
    if (now >= sessionExpiresAt) {
        lockArchive("SESSION EXPIRED / 60분 세션이 만료되었습니다.");
        return;
    }
    if (now - lastActivityAt >= securityPolicy.idleTimeoutMs) {
        lockArchive("SESSION LOCKED / 15분 동안 활동이 없어 자동 로그아웃되었습니다.");
        return;
    }
    elements.sessionStatus.textContent = `SESSION ${formatRemainingTime(sessionExpiresAt - now)}`;
}

function noteSessionActivity() {
    if (document.body.classList.contains("is-locked")) return;
    lastActivityAt = Date.now();
    scheduleIdleLock();
}

function startSessionMonitoring(expiresAt) {
    stopSessionMonitoring();
    sessionExpiresAt = expiresAt;
    lastActivityAt = Date.now();
    scheduleIdleLock();
    updateSessionSecurity();
    sessionTimerId = window.setInterval(updateSessionSecurity, 1000);
}

function finishPdaBoot(token = bootSequenceToken) {
    if (token !== bootSequenceToken || elements.loginScreen.hidden) return;
    bootSequenceToken += 1;
    elements.pdaBootBar.style.width = "100%";
    elements.pdaBootPercent.textContent = "100%";
    elements.pdaBootStep.textContent = "인물 기록망 연결 완료.";
    window.setTimeout(function () {
        elements.loginScreen.classList.add("is-closing");
        window.setTimeout(function () {
            elements.loginScreen.hidden = true;
            elements.pdaBoot.hidden = true;
            elements.welcomeMessage.hidden = true;
            elements.characterList.querySelector(".character-button.active")?.focus();
        }, prefersReducedMotion.matches ? 0 : 520);
    }, prefersReducedMotion.matches ? 0 : 180);
}

function startPdaBoot() {
    const token = ++bootSequenceToken;
    const steps = [
        { progress: 8, text: "PDA 보안 채널을 초기화하는 중...", delay: 0 },
        { progress: 34, text: "관리관 접근 권한을 확인하는 중...", delay: 320 },
        { progress: 63, text: "국가별 보병장비 명단을 동기화하는 중...", delay: 670 },
        { progress: 86, text: "초상 및 관계 기록을 복호화하는 중...", delay: 1020 }
    ];

    elements.loginCard.hidden = true;
    elements.pdaBoot.hidden = false;
    elements.welcomeMessage.hidden = false;
    elements.pdaBootBar.style.width = "0";
    elements.pdaBootPercent.textContent = "000%";
    elements.pdaBootStep.textContent = steps[0].text;

    if (prefersReducedMotion.matches) {
        finishPdaBoot(token);
        return;
    }

    steps.forEach(function (step) {
        window.setTimeout(function () {
            if (token !== bootSequenceToken) return;
            elements.pdaBootBar.style.width = `${step.progress}%`;
            elements.pdaBootPercent.textContent = `${String(step.progress).padStart(3, "0")}%`;
            elements.pdaBootStep.textContent = step.text;
        }, step.delay);
    });
    window.setTimeout(function () { finishPdaBoot(token); }, 1370);
}

function applyUiSize(size, persist = true) {
    const selectedSize = size === "large" ? "large" : "normal";
    document.body.classList.toggle("ui-large", selectedSize === "large");
    uiSizeButtons.forEach(function (button) {
        const isActive = button.dataset.uiSize === selectedSize;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
    if (persist) window.localStorage.setItem(uiSizeStorageKey, selectedSize);
}

function triggerPdaTransition() {
    if (prefersReducedMotion.matches) return;
    const animatedElements = [
        [elements.imageFrame, "is-scanning"],
        [elements.visualPanel, "is-decoding"],
        [elements.recordPanel, "is-decrypting"],
        [elements.statusbar, "is-transferring"]
    ];
    animatedElements.forEach(function (entry) {
        const [element, className] = entry;
        element.classList.remove(className);
        void element.offsetWidth;
        element.classList.add(className);
        window.setTimeout(function () { element.classList.remove(className); }, 760);
    });
}

function unlockArchive(skipWelcome, expiresAt) {
    elements.archiveApp.removeAttribute("inert");
    elements.archiveApp.setAttribute("aria-hidden", "false");
    document.body.classList.remove("is-locked");
    startSessionMonitoring(expiresAt);

    if (skipWelcome) {
        elements.loginScreen.hidden = true;
        elements.pdaBoot.hidden = true;
        elements.welcomeMessage.hidden = true;
        return;
    }

    startPdaBoot();
}

function lockArchive(message = "AUTHORIZATION REQUIRED") {
    bootSequenceToken += 1;
    stopSessionMonitoring();
    try { window.sessionStorage.removeItem(accessSessionKey); } catch { /* Storage access may be disabled. */ }
    if (modalIsOpen()) {
        if (typeof elements.imageModal.close === "function") elements.imageModal.close();
        else elements.imageModal.removeAttribute("open");
    }

    elements.archiveApp.setAttribute("inert", "");
    elements.archiveApp.setAttribute("aria-hidden", "true");
    document.body.classList.add("is-locked");
    elements.loginCard.hidden = false;
    elements.pdaBoot.hidden = true;
    elements.welcomeMessage.hidden = true;
    elements.pdaBootBar.style.width = "0";
    elements.pdaBootPercent.textContent = "000%";
    elements.passwordInput.value = "";
    elements.passwordInput.type = "password";
    elements.togglePassword.textContent = "보기";
    elements.togglePassword.setAttribute("aria-label", "비밀번호 표시");
    elements.loginMessage.textContent = typeof message === "string" ? message : "AUTHORIZATION REQUIRED";
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
    if (updateLoginLockout()) return;
    const submittedPassword = elements.passwordInput.value;

    if (!submittedPassword) {
        elements.loginMessage.textContent = "비밀번호를 입력해 주세요.";
        elements.loginMessage.classList.add("is-error");
        elements.passwordInput.focus();
        return;
    }

    elements.loginMessage.textContent = "VERIFYING ACCESS...";
    elements.loginMessage.classList.remove("is-error");
    elements.loginSubmit.disabled = true;
    const submittedHash = await hashPassword(submittedPassword);

    if (!hashesMatch(submittedHash, passwordHash)) {
        elements.loginCard.classList.remove("has-error");
        void elements.loginCard.offsetWidth;
        elements.loginCard.classList.add("has-error");
        recordFailedLogin();
        return;
    }

    clearLoginSecurityState();
    const session = createAccessSession();
    elements.loginMessage.textContent = "ACCESS GRANTED";
    unlockArchive(false, session.expiresAt);
}

function initializeLogin() {
    elements.loginForm.addEventListener("submit", function (event) {
        handleLogin(event).catch(function () {
            elements.loginMessage.textContent = "인증 처리 중 오류가 발생했습니다.";
            elements.loginMessage.classList.add("is-error");
            if (!updateLoginLockout()) elements.loginSubmit.disabled = false;
        });
    });
    elements.passwordInput.addEventListener("input", function () {
        if (updateLoginLockout()) return;
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
    ["pointerdown", "keydown", "touchstart", "scroll"].forEach(function (eventName) {
        document.addEventListener(eventName, noteSessionActivity, { passive: true });
    });
    document.addEventListener("visibilitychange", function () {
        if (!document.hidden) updateSessionSecurity();
    });
    const session = readAccessSession();
    if (session) {
        unlockArchive(true, session.expiresAt);
        return;
    }
    startLoginLockoutCountdown();
    window.requestAnimationFrame(function () {
        if (!elements.passwordInput.disabled) elements.passwordInput.focus();
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
        button.dataset.class = character.filter || character.class;
        button.dataset.collection = getCharacterCollection(character);
        button.setAttribute("aria-label", `${character.name} ${character.group === "LOGS" ? "업무일지" : "기록"} 열기`);
        thumbnail.className = "character-thumb";
        fallback.className = "thumbnail-fallback";
        fallback.textContent = character.group === "LOGS" ? "LOG" : character.name.replace(/[^A-Za-z0-9]/g, "").slice(0, 3).toUpperCase();
        image.alt = "";
        image.loading = index === 0 ? "eager" : "lazy";
        image.addEventListener("error", function () { image.hidden = true; });
        thumbnail.append(fallback);
        if (character.image) {
            image.src = character.image;
            thumbnail.append(image);
        }
        copy.className = "button-copy";
        name.textContent = character.name;
        code.textContent = character.code;
        role.className = "button-role";
        role.textContent = character.displayClass || character.class;
        copy.append(name, code, role);
        number.className = "button-index";
        const displayIndex = character.group === "LOGS"
            ? getCollectionCharacterIds("LOGS").indexOf(characterId) + 1
            : index + 1;
        number.textContent = padNumber(displayIndex);
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
    elements.characterImage.alt = character.group === "LOGS" ? `${character.name} 업무일지 표지 이미지` : `${character.name} 메피릿 캐릭터`;
    elements.characterImage.style.objectPosition = character.imagePosition || "";
    if (!character.image) {
        elements.characterImage.removeAttribute("src");
        elements.modalImage.removeAttribute("src");
        elements.modalImage.alt = "";
        elements.modalCaption.textContent = `${character.name} / NO VISUAL DATA`;
        showMissingImage();
        return;
    }
    elements.characterImage.src = character.image;
    elements.modalImage.src = character.image;
    elements.modalImage.alt = character.group === "LOGS" ? `${character.name} 업무일지 이미지` : `${character.name} 원본 이미지`;
    elements.modalCaption.textContent = `${character.name} / ${character.group === "LOGS" ? "WORK LOG RECORD" : "VISUAL RECORD"}`;
    if (elements.characterImage.complete) {
        if (elements.characterImage.naturalWidth > 0) showAvailableImage();
        else showMissingImage();
    }
}

function showCharacter(characterId, announce) {
    const character = characters[characterId];
    if (!character) return;
    selectedCharacterId = characterId;
    const collectionCharacterIds = getCollectionCharacterIds();
    const position = collectionCharacterIds.indexOf(characterId) + 1;
    const formattedPosition = `${padNumber(position)} / ${padNumber(collectionCharacterIds.length)}`;
    elements.frameRecordCode.textContent = character.code;
    elements.characterCode.textContent = character.code;
    elements.characterName.textContent = character.name;
    elements.characterDesignation.textContent = character.designation;
    elements.characterStatus.textContent = character.status || `ACTIVE / ${character.class}`;
    elements.profileHeight.textContent = character.height;
    elements.profileClass.textContent = character.displayClass || character.class;
    elements.characterSummary.textContent = character.summary;
    elements.recordCode.textContent = character.code;
    elements.recordDesignation.textContent = character.designation;
    elements.recordClass.textContent = character.displayClass || character.class;
    elements.recordHeight.textContent = character.height;
    renderDetailedRecord(character, characterId);
    elements.selectedRecordLabel.textContent = formattedPosition;
    elements.visualLogNumber.textContent = `${character.group === "LOGS" ? "WORK LOG" : "VISUAL LOG"} / ${padNumber(position)}`;
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
    if (announce) {
        elements.selectionAnnouncement.textContent = `${character.name} ${character.group === "LOGS" ? "업무일지를" : "기록을"} 열었습니다.`;
        triggerPdaTransition();
    }
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
        elements.selectionHint.textContent = activeCollection === "LOGS"
            ? "현재 열람 중인 업무일지는 검색 결과에 포함되지 않습니다. 목록에서 다른 일지를 선택할 수 있습니다."
            : "현재 표시 중인 인물은 검색 결과에 포함되지 않습니다. 목록에서 다른 기록을 선택할 수 있습니다.";
    }
}

function applyFilters() {
    const searchWord = elements.searchInput.value.trim().toLocaleLowerCase("ko");
    const collectionTotal = getCollectionCharacterIds().length;
    let visibleCount = 0;
    getCharacterButtons().forEach(function (button) {
        const character = characters[button.dataset.character];
        const filterValue = character.filter || character.class;
        const isVisible = getCharacterCollection(character) === activeCollection &&
            buildSearchText(character, button.dataset.character).includes(searchWord) &&
            (activeFilter === "all" || filterValue === activeFilter);
        button.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
    });
    elements.indexCount.textContent = `${padNumber(visibleCount)} / ${padNumber(collectionTotal)}`;
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

function setCollection(collectionName, announce) {
    if (!collectionButtons.some(function (button) { return button.dataset.collection === collectionName; })) return;
    activeCollection = collectionName;
    activeFilter = "all";
    elements.searchInput.value = "";
    updateCollectionPresentation(collectionName);
    collectionButtons.forEach(function (button) {
        const isActive = button.dataset.collection === collectionName;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
    filterButtons.forEach(function (button) {
        const isActive = button.dataset.filter === "all";
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
    updateFilterCounts();
    applyFilters();
    const firstCharacterId = getCollectionCharacterIds()[0];
    if (firstCharacterId) showCharacter(firstCharacterId, announce);
    showRecordTab("overview", false);
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
    const collectionCharacterIds = getCollectionCharacterIds();
    function countType(type) {
        return collectionCharacterIds.filter(function (id) {
            return (characters[id].filter || characters[id].class) === type;
        }).length;
    }
    elements.headerRecordCount.textContent = `${padNumber(collectionCharacterIds.length)} RECORDS`;
    elements.allFilterCount.textContent = padNumber(collectionCharacterIds.length);
    elements.lanternFilterCount.textContent = padNumber(countType("LANTERN"));
    elements.lampFilterCount.textContent = padNumber(countType("LAMP"));
    elements.administratorFilterCount.textContent = padNumber(countType("ADMINISTRATOR"));
    elements.routineFilterCount.textContent = padNumber(countType("ROUTINE"));
    elements.decisionFilterCount.textContent = padNumber(countType("DECISION"));
    elements.followupFilterCount.textContent = padNumber(countType("FOLLOWUP"));
}

function updateClock() {
    const now = new Date();
    const parts = Object.fromEntries(seoulClockFormatter.formatToParts(now)
        .filter(function (part) { return part.type !== "literal"; })
        .map(function (part) { return [part.type, part.value]; }));
    const seoulDate = `${parts.year}.${parts.month}.${parts.day}`;
    const seoulTime = `${parts.hour} : ${parts.minute} : ${parts.second}`;
    elements.systemClock.textContent = `${seoulDate} / ${seoulTime} KST`;
    elements.systemClock.dateTime = `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}+09:00`;
    elements.systemClock.title = `서울 기준 ${seoulDate} ${seoulTime}`;
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
uiSizeButtons.forEach(function (button) {
    button.addEventListener("click", function () { applyUiSize(button.dataset.uiSize); });
});
collectionButtons.forEach(function (button) {
    button.addEventListener("click", function () { setCollection(button.dataset.collection, true); });
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
elements.skipBootButton.addEventListener("click", function () { finishPdaBoot(); });
elements.logoutButton.addEventListener("click", function () { lockArchive("AUTHORIZATION REQUIRED"); });
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

updateCollectionPresentation(activeCollection);
renderCharacterList();
applyUiSize(window.localStorage.getItem(uiSizeStorageKey) || "normal", false);
updateFilterCounts();
applyFilters();
showCharacter(selectedCharacterId, false);
showRecordTab(activeRecordTab, false);
updateClock();
window.setInterval(updateClock, 1000);
initializeLogin();
