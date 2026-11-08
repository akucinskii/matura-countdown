# Countdown timer
Project Information
- 프로젝트 소개: React를 활용하여 목표 날짜까지의 남은 시간을 실시간으로 계산하고 시각화하는 카운트다운 웹입니다.
- 선택 이유: 뭘 할지 보던 중에 문득 이번 년도가 얼마나 남았지 생각하다가 그런거 하면 방에다 패드로 해놔야겠다 생각하고 골라봤습니다. 그러고 찾아봤는데 컴포넌트 간 데이터 전달 구조와 `useEffect`를 이용한 실시간 타이머 구현 방식을 직접 분석하고, 텍스트·스타일·데이터 커스텀을 실습하기에 간편하고 가장 알맞은 구조를 가지고 있어서 선택하였습니다.
- 원본 GitHub URL: https://github.com/akucinskii/matura-countdown
- 라이선스: Standard Open Source License
- Vercel URL: https://assign10-c01-22201044.vercel.app

Installation
1) 사전 요구사항
컴퓨터에 Node.js가 설치되어 있어야 합니다.
2) 설치 및 실행 단계
프로젝트 폴더 경로로 이동한 뒤에 필요한 의존성 패키지를 설치합니다.
npm install
로컬 개발 서버를 실행합니다.
npm start
3) 터미널에 안내되는 로컬 주소를 복사해서 웹 브라우저에 입력하여 실행 화면을 확인합니다.

Weekly Review
1) 새롭게 배운 내용 3가지
- useState, useEffect을 활용한 실시간 동적 타이머 구현 구조: setTimeout과 상태 관리를 결합하여 1초마다 남은 시간을 갱신하고 화면을 실시간으로 화면을 바꾸는걸 이해했습니다.
- Tailwind CSS를 이용한 직관적인 수정: bg-slate-900, 텍스트 크기 및 간격 조절 등을 써서 다른 CSS 파일 수정 없이 빠르고 효율적으로 UI 테마를 변경하는 방법을 이해했습니다.
- 오픈소스 분석하고 수정: 오픈소스 프로젝트의 파일 구조를 분석하고 목적에 맞게 텍스트와 스타일 그리고 데이터를 체계적으로 수정하고 적용하는 실습을 경험했습니다.

2) 어려웠던 점과 해결 방법
어려웠던 점: 처음 접하는 오픈소스 프로젝트라 레이블들이 어떤 컴포넌트(App.jsx, Clock.jsx, BigCard.jsx 등)에 분산되어 있는지 파악하고 수정 위치를 찾는 과정이 다소 애매하고 어딨는지 애먹었습니다.
해결 방법: 코드가 실행되는 흐름을 따라가면서 관계를 하나씩 이해하다보니까 텍스트와 목표 날짜 변경 등이 있는 파일을 찾으면서 순서대로 수정하고 해결하였습니다.

3) AI 활용 내용 및 느낀 점
AI 활용 내용: 라이센스 파일이 보이지 않아서 왜 그런가 물어봤었고 처음에 깃을 가져오고 코드를 분석할 때 위치랑 해석하는데 조금 애먹어서 도움을 받아서 이해를 했습니다. 수정 같은건 전부 제가 했구요.
느낀 점: 낯선 오픈소스 코드를 분석하고 수정하는 과제가 처음에는 막막하게 느껴졌지만, AI의 도움은 받았지만 컴포넌트 단위로 구조를 쪼개서 이해하고 스스로 수정을 해내가면서 리액트에 대해서 조금 더 이해를 하게 됐습니다.

1. Project Structure
* package.json: 프로젝트에 필요한 라이브러리 목록을 관리하고 웹을 start하거나 build할 때 쓰는 명령어들을 모아둔 요약본 파일입니다.
* src/App.jsx: 웹사이트의 뼈대를 잡는 가장 메인으로 여러 하위 컴포넌트들을 하나로 모아 전체 페이지의 화면 레이아웃을 완성해 줍니다.
* src/index.js: 리액트 앱이 처음 실행될 때 가장 먼저 작동하는 시작점으로 메인 화면을 실제 브라우저 화면에 집어넣어 눈에 보이게 띄워주는 역할을 합니다.

2. React Component
* App.jsx: 전체 화면의 레이아웃 뼈대를 구성하고 하위 요소들의 배치를 총괄하는 메인 컨테이너 컴포넌트입니다.
* Clock.jsx: 목표 일자까지 남은 일, 시간, 분, 초 단위를 동적으로 계산해서 실시간으로 화면에 갱신하여 보여주는 핵심 타이머 컴포넌트입니다.

3. Code Analysis
타이머 컴포넌트(Clock.jsx 등)에서 실시간 카운트다운을 구현하기 위해 사용된 상태 관리 및 주기적 연산 로직의 핵심 코드입니다.

const [timeLeft, setTimeLeft] = useState(calcTimeLeft());
useEffect(() => {
  const timer = setTimeout(() => {
    setTimeLeft(calcTimeLeft());
  }, 1000);
  return () => clearTimeout(timer);
});

* 동작 원리 설명:
    1. useState 훅을 활용하여 남은 시간을 계산하는 함수(calcTimeLeft)의 연산결과를 초기 상태값(timeLeft)으로 설정합니다.
    2. useEffect 내부에서 setTimeout 함수를 호출하여 1초마다 남은 시간을 재계산하도록 타이머를 실행시킵니다.
    3. 시간이 갱신될 때마다 setTimeLeft가 새로운 상태를 반영하여 화면도 그것에 맞춰서 실시간으로 업데이트해줍니다 그러면 결과적으로 화면에 카운트다운 숫자가 실시간으로 줄어드는 효과를 만들어 냅니다.


* 수정하기

<BigCard.jsx>
* 맨 위 단어들 영어로 수정
수정 전

        <p>{item.days > 1 ? " dni” : " dni”}</p>
      </div>
      <div className="">
        <Smallblock item={item.hours} />
        <p>{item.days > 1 ? " godzin" : " godzin"}</p>
      </div>
      <div className="">
        <Smallblock item={item.minutes} />
        <p>{item.days > 1 ? " minut" : "minut”}</p>
      </div>
      <div className="">
        <Smallblock item={item.seconds} />
        <p>{item.days > 1 ? "sekund”: " sekund"}</p>

수정 후

       <p>{item.days > 1 ? " days" : " days"}</p>
      </div>
      <div className="">
        <Smallblock item={item.hours} />
        <p>{item.days > 1 ? " hours" : " hours"}</p>
      </div>
      <div className="">
        <Smallblock item={item.minutes} />
        <p>{item.days > 1 ? " minutes" : "minutes"}</p>
      </div>
      <div className="">
        <Smallblock item={item.seconds} />
        <p>{item.days > 1 ? "seconds" : " seconds"}</p>

<Clock.jsx>
* 숫자 밑에 있는 단어 영어로 수정
수정 전

      <h1 className="text-4xl">Do matury {year} pozostalo:</h1>
      <BigCard item={timeLeft} />
      <h1 className="text-4xl">Or:</h1>
      <div className="flex flex-col gap-4">
        <Card item={timeLeft.hoursFull} text="godzin" />
        <Card item={timeLeft.minutesFull} text="minut" />
        <Card item={timeLeft.secondsFull} text="sekund" />

수정 후

      <h1 className="text-4xl">Countdown to {year}:</h1>
      <BigCard item={timeLeft} />
      <h1 className="text-4xl">Detail:</h1>
      <div className="flex flex-col gap-4">
        <Card item={timeLeft.hoursFull} text="Hours" />
        <Card item={timeLeft.minutesFull} text="Minutes" />
        <Card item={timeLeft.secondsFull} text="Seconds" />

<App.jsx>
*배경화면 회색에서 제가 좋아하는 남색으로 수정
수정 전

    <div className="flex flex-row text-white justify-center min-h-screen h-auto bg-slate-700">
      <Clock />
    </div>


export default App;

수정 후

    <div className="flex flex-row text-white justify-center min-h-screen h-auto bg-slate-900">
      <Clock />
    </div>


export default App;

<Clock.jsx>
* 날짜 설정을 5월 4일로 돼있어서 1월 1일로 수정
수정 전

let diff = new Date(`05/04/${year}`) - new Date();

수정 후

let diff = new Date(`01/01/${year}`) - new Date();
