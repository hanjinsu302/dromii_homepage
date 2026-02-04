import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import styles from "../Personalinformation/Personalinformation.module.css"

const Personalinformation = () => {
    return (
    <div className={styles.Container}>
      <article className={styles.Policy}>
        <h1 className={styles.Title}>(주)드로미 개인정보처리방침</h1>

        <p className={styles.Intro}>
          (주)드로미(이하 “회사”)는 고객님의 개인정보를 중요시하며, 「정보통신망 이용촉진 및
          정보보호 등에 관한 법률」 및 「개인정보보호법」 등 관련 법령을 준수하고 있습니다. 회사는
          개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로
          이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
        </p>

        <p>
          회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별 공지)을 통하여 안내할
          것입니다.
        </p>

        <section className={styles.Section}>
          <h2 className={styles.SectionTitle}>■ 수집하는 개인정보 항목</h2>

          <p className={styles.SubTitle}>수집 항목:</p>
          <ul className={styles.Text}>
            이름, 생년월일, 성별, 로그인 ID, 비밀번호, 이메일, 휴대전화번호, 소속 회사명, 부서, 직책, 회사전화번호
            ,서비스 이용기록, 접속 로그, 접속 IP 정보, 결제기록 등
          </ul>

          <p className={styles.SubTitle}>수집 방법:</p>
          <p className={styles.Text}>홈페이지(회원가입, 문의하기), 서면양식, 이메일, 전화 상담 등</p>
        </section>

        <section className={styles.Section}>
          <h2 className={styles.SectionTitle}>■ 개인정보의 수집 및 이용목적</h2>

          <ul className={styles.BulletList}>
            <li>
              <strong>1. 서비스 제공에 관한 계약 이행 및 요금정산</strong>
              <p className={styles.Text}>콘텐츠 제공, 구매 및 요금 결제, 서비스 이용 관련 안내, 청구서 발송 등</p>
            </li>
            <li>
              <strong>2. 회원 관리</strong>
              <p className={styles.Text}>본인확인, 회원 식별, 연령확인, 만 14세 미만 아동의 법정대리인 동의 확인, 공지사항 전달 등</p>
            </li>
            <li>
              <strong>3. 서비스 개선 및 마케팅 활용</strong>
              <p className={styles.Text}>서비스 이용 통계, 접속 빈도 분석, 맞춤형 서비스 제공, 신규 서비스 안내</p>
            </li>
          </ul>
        </section>

        <section className={styles.Section}>
          <h2 className={styles.SectionTitle}>■ 개인정보의 보유 및 이용기간</h2>
          <ul className={styles.List}>
            <li>회원정보: 회원 탈퇴 시 즉시 삭제</li>
            <li>계약 및 결제 관련 기록: 「전자상거래법」에 따라 5년간 보관</li>
            <li>로그 기록: 「통신비밀보호법」에 따라 3개월간 보관</li>
          </ul>
        </section>

        <section className={styles.Section}>
          <h2 className={styles.SectionTitle}>■ 개인정보의 파기 절차 및 방법</h2>
          <ul className={styles.List}>
            <li>
              <strong>파기 절차:</strong>
              <p className={styles.Text}>서비스 이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 내부 방침 및 관련 법령에 따라 일정 기간 저장된 후 파기됩니다.</p>
            </li>
            <li>
              <strong>파기 방법:</strong>
              <p className={styles.Text}>전자적 파일 형태의 정보는 기록을 재생할 수 없는 방법으로 삭제하고, 종이 문서 등은 분쇄하거나 소각하여 파기합니다.</p>
            </li>
          </ul>
        </section>

        <section className={styles.Section}>
          <h2 className={styles.SectionTitle}>■ 개인정보 제공</h2>
          <p className={styles.Text}>회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.</p>
          <ul className={styles.List}>
            <li>이용자가 사전에 동의한 경우</li>
            <li>법령에 따라 수사기관의 요청이 있는 경우</li>
          </ul>
        </section>

        <section className={styles.Section}>
          <h2 className={styles.SectionTitle}>■ 개인정보의 위탁</h2>
          <p className={styles.Text}>회사는 서비스 제공 및 향상을 위하여 아래와 같이 개인정보 처리를 위탁할 수 있습니다. 위탁 시 관련 법령에 따라 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 계약서 등에 명시하고 있습니다.</p>
          <p className={styles.Text}>(※ 현재 위탁 업체가 있을 경우 여기에 명시 필요 — 예: 클라우드 서비스, 결제대행업체 등)</p>
        </section>

        <section className={styles.Section}>
          <h2 className={styles.SectionTitle}>■ 이용자 및 법정대리인의 권리와 그 행사방법</h2>
          <p className={styles.Text}>이용자 및 법정대리인은 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며, 회원 탈퇴(동의 철회)를 요청할 수도 있습니다.</p>
          <ul className={styles.List}>
            <li>개인정보 조회·수정: [회원정보수정] 메뉴에서 직접 가능</li>
            <li>탈퇴 요청: “회원탈퇴” 메뉴 또는 개인정보관리책임자에게 서면/이메일로 요청 가능</li>
          </ul>
          <p className={styles.Text}>회사는 이용자의 요청에 따라 정정 또는 삭제를 완료하기 전까지 해당 개인정보를 이용 또는 제공하지 않습니다.</p>
        </section>

        <section className={styles.Section}>
          <h2 className={styles.SectionTitle}>■ 개인정보 자동수집 장치의 설치, 운영 및 거부</h2>
          <p className={styles.Text}>회사는 이용자의 편의와 맞춤형 서비스를 제공하기 위하여 ‘쿠키(cookie)’를 사용할 수 있습니다.</p>
          <ul className={styles.List}>
            <li>
              <strong>쿠키의 사용 목적</strong>
              <p className={styles.Text}>방문 빈도, 이용 형태, 관심사 파악을 통한 맞춤형 콘텐츠 제공 및 통계 분석</p>
            </li>
            <li>
              <strong>쿠키 설정 거부 방법</strong>
              <p className={styles.Text}>웹 브라우저 상단의 “설정 &gt; 개인정보 보호 &gt; 쿠키 및 기타 사이트 데이터 관리”에서 조정 가능. 단, 쿠키를 거부할 경우 일부 서비스 이용에 제한이 있을 수 있습니다.</p>
            </li>
          </ul>
        </section>

        <section className={styles.Section}>
          <h2 className={styles.SectionTitle}>■ 개인정보 보호책임자 및 담당부서</h2>
          <p className={styles.Text}>귀하께서는 회사의 웹서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보보호책임자 혹은 담당부서로 신고하실 수 있습니다.</p>
          <ul className={styles.List}>
            <li>개인정보 보호책임자: 이승호</li>
            <li>직위: 대표이사</li>
            <li>전화번호: 010-6266-4396</li>
            <li>이메일: info@dromii.com</li>
          </ul>
        </section>

        <section className={styles.Section}>
          <h2 className={styles.SectionTitle}>■ 기타 개인정보 침해 관련 문의 기관</h2>
          <ul className={styles.List}>
            <li>개인정보침해신고센터 (https://privacy.kisa.or.kr / 118)</li>
            <li>개인정보분쟁조정위원회 (https://www.kopico.go.kr / 1833-6972)</li>
            <li>대검찰청 사이버수사과 (https://www.spo.go.kr / 1301)</li>
            <li>경찰청 사이버안전국 (https://cyberbureau.police.go.kr / 182)</li>
          </ul>
        </section>

        <footer className={styles.Footer}>
          <p>시행일자: 2025년 10월 27일</p>
          <p>(주)드로미는 개인정보처리방침을 지속적으로 업데이트하여 고객의 개인정보를 안전하게 보호하겠습니다.</p>
        </footer>
      </article>
    </div>
  );


};

export async function getStaticProps({ locale }) {
return {
props: {
...(await serverSideTranslations(locale, ['Personalinformation', 'header'])),
},
};
}

export default Personalinformation;




