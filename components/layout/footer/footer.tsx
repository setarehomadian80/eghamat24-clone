import FooterBanners from "./footerbanners";
import FooterInfo from "./FooterInfo";

export default function Footer() {
  return (
    <main>
      <div className="mt-24">
        <FooterBanners />
      </div>
      <div className="mt-24">
          <FooterInfo />
        </div>
    </main>
  );
}
