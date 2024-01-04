import React from "react";
import Rectangle_6 from "../../img/main/Rectangle_6.png";
import Rectangle_6_1 from "../../img/main/Rectangle_6_1.png";
import Rectangle_6_2 from "../../img/main/Rectangle_6_2.png";
import Rectangle_6_3 from "../../img/main/Rectangle_6_3.png";
import Rectangle_6_4 from "../../img/main/Rectangle_6_4.png";
import Rectangle_6_5 from "../../img/main/Rectangle_6_5.png";
import Together from "../HomePage/Elements/Together";
import Contacts from "../HomePage/Elements/Contacts";

const MyCompany = () => {
  return (
    <div className="content-company">
      <h3 className="content-company_heading">
        Компания Maroon — российский производитель натуральной косметики
      </h3>
      <div className="content-company__title">
        <div className="content-company__blog">
          <img
            className="content-company__img"
            src={Rectangle_6}
            alt="эфирные масла"
          />
          <p className="content-blog__tetle">
            Является членом Международной федерации по эфирным маслам и ароматам
            IFEAT и Российской парфюмерно–косметической ассоциации РПКА. Мы
            придерживаемся принципов рационального использования природных
            ресурсов.
          </p>
        </div>
        <div className="content-company__blog">
          <img
            className="content-company__img"
            src={Rectangle_6_1}
            alt="эфирные масла"
          />
          <p className="content-blog__tetle">
            Мы постоянно пополняем ассортимент, выбирая только натуральные и
            безопасные ингредиенты. Все сырье производится в соответствии с ISO
            9001.
          </p>
        </div>
        <div className="content-company__blog">
          <img
            className="content-company__img"
            src={Rectangle_6_2}
            alt="эфирные масла"
          />
          <p className="content-blog__tetle">
            Главная задача компании – здоровье людей и забота о природе. Мы не
            проводим испытаний косметики на животных и строго соблюдаем
            требования, которые предъявляются к товарам для здоровья и красоты..
          </p>
        </div>
      </div>
      <div className="content-company__title">
        <div className="content-company__blog">
          <img
            className="content-company__img"
            src={Rectangle_6_3}
            alt="эфирные масла"
          />
          <p className="content-blog__tetle">
            Растительных масел и баттеров – от абрикоса до хлопка, удивят
            разнообразием полезных элементов и обеспечат эффективный уход.
          </p>
        </div>
        <div className="content-company__blog">
          <img
            className="content-company__img"
            src={Rectangle_6_4}
            alt="эфирные масла"
          />
          <p className="content-blog__tetle">
            Натуральных эфирных масла – от аира до элеми. Мы собрали самую
            широкую палитру природных ароматов.
          </p>
        </div>
        <div className="content-company__blog">
          <img
            className="content-company__img"
            src={Rectangle_6_5}
            alt="эфирные масла"
          />
          <p className="content-blog__tetle">
            Уникальных натуральных косметических продуктов окажут бережный
            физиологичный уход.
          </p>
        </div>
      </div>
      <Together />
      <Contacts />
    </div>
  );
};

export default MyCompany;
