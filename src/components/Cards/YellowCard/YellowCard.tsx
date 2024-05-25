"use client"
import { BigContainerYellow, WidgetYellowContainer } from "@/components/Cards/YellowCard/styled.components";

const YellowCard = () => {
    return (
        <BigContainerYellow>
            <WidgetYellowContainer>
                <div>
                    <h3 className="title">تألق بإعلاناتك وبيع أسرع!</h3>
                    <ul className="ul-list">
                        <li>استفد من خصومات مميزة</li>
                        <li>أضف المزيد من الإعلانات لتزيد من مبيعاتك</li>
                        <li>مضاعف أرباحك بكل سهولة معنا</li>
                    </ul>
                </div>
                <img
                    src="https://imageio.forbes.com/blogs-images/jimgorzelany/files/2017/10/2017-Chevrolet-Camaro-087-e1508353961251-1200x829.jpg"
                    width="269" height="203" alt="Yellow Widget" className="imageStyle"/>
            </WidgetYellowContainer>
            <button>ابدأ الآن وزد إعلاناتك</button>
        </BigContainerYellow>
    )
}

export default YellowCard;
