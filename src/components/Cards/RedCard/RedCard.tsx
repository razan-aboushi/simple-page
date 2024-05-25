"use client"
import {BigContainer, WidgetOrangeContainer} from "@/components/Cards/RedCard/styled.components";

const RedCard = () => {
    return (
        <BigContainer>
            <WidgetOrangeContainer>
                <div>
                    <h3 className="title">اجعل سيارتك نجمة البيع اليوم</h3>
                    <ul className="ul-list">
                        <li>اعرض سيارتك لأكبر جمهور من المشترين المحتملين</li>
                        <li>بسهولة وسرعة، إبدأ البيع معنا</li>
                        <li>حقق أعلى قيمة لسيارتك بأفضل العروض</li>
                    </ul>
                </div>
                <img
                    src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg"
                    width="269" height="203" alt="Orange Widget" className="imageStyle"/>
            </WidgetOrangeContainer>
            <button>إنضم لنا الأن</button>
        </BigContainer>
    )
}

export default RedCard;
