"use client"
import {MainContentContainer, PageContainer} from "@/components/HomeMainSection/styled.components";

const MainContent = () => {
    return (
        <PageContainer>
            <MainContentContainer>
                <div>
                    <h2>أفضل العروض على السيارات الجديدة</h2>
                    <p>هل تبحث عن سيارة جديدة تجمع بين الأناقة والأداء الرائع؟ نقدم لك أفضل العروض الحصرية على أحدث
                        موديلات السيارات. انضم إلى آلاف العملاء السعداء الذين وجدوا سيارات أحلامهم لدينا.</p>
                    <p>نحن نقدم مجموعة واسعة من السيارات التي تناسب جميع الأذواق والميزانيات. سواء كنت تبحث عن سيارة
                        عائلية مريحة أو سيارة رياضية فاخرة، ستجد لدينا ما يناسبك.</p>
                    <p>استمتع بتجربة شراء سيارة خالية من المتاعب مع خدماتنا المميزة. نقدم لك تسهيلات في الدفع وخدمات ما
                        بعد البيع لضمان رضاك التام. لا تتردد، احجز تجربتك الآن!</p>
                    <a href="http://www.facebook.com" target="_blank">إبدأ الأن يا صديقي</a>
                </div>
                <img src="https://assets.newcars.com/images/howto/htbnc_overview.jpg" width="400" height="340"
                     alt="HomeContentImage"/>
            </MainContentContainer>
        </PageContainer>
    );
}

export default MainContent;
