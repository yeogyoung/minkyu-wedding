/**
 * Simple & Clean Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김민규",
    father: "김거환",
    mother: "문영민",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "문여경",
    father: "문일권",
    mother: "조규현",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-02-21",
    time: "11:00",
    venue: "아펠가모 공덕",
    hall: "라로브홀 7층\n\n예식장 사정으로 화환은 정중히 사양하오니 너른 양해 부탁드립니다.",
    address: "서울특별시 마포구 마포대로 92 효성해링턴스퀘어 B동 7층",
    tel: "02-2197-0230",
    mapLinks: {
      kakao: "https://kko.to/ay9RX3sV8S",
      naver: "https://naver.me/xcnaC81L"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 시간과 길을 걸어온 두 사람이\n사랑과 믿음으로 한 가족이 되어\n새로운 출발을 하려 합니다.\n\n지금까지 저희를 아껴주시고\n응원해주신 소중한 분들과 함께\n이 기쁜 순간을 나누고 싶습니다.\n\n바쁘시더라도 귀한 걸음 해주시어\n축하해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "친구의 소개로 처음 만나\n서로의 일상에 자연스럽게 스며든 우리는\n함께하는 시간이 쌓일수록\n서로에게 가장 편안하고 소중한 사람이 되었습니다.\n\n그리고 이제,\n평생을 함께하고 싶은 마음으로\n새로운 시작을 하려 합니다.\n\n저희의 새로운 시작에\n함께해 주세요."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김민규", bank: "우리은행", number: "100-285-4933190" },
      { role: "아버지", name: "김거환", bank: "기업은행", number: "309-015-79901010" },
      { role: "어머니", name: "문영민", bank: "im뱅크", number: "177-080-183735" }
    ],
    bride: [
      { role: "신부", name: "문여경", bank: "신한은행", number: "110-487-005386" },
      { role: "아버지", name: "문일권", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "조규현", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김민규 ♥ 문여경 결혼합니다",
    description: "2027년 2월 21일, 소중한 분들을 초대합니다."
  }
};
