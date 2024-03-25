import React from "react";
import caja1 from "../../img/corea-del-sur.jpg";
import caja2 from "../../img/gato.jpg";
import caja3 from "../../img/ojo-artistico.jpg";
import caja4 from "../../img/tatuaje.jpg";

// Componente Card
const Card = (props) => {
    const { Image, Title, Description } = props;
    return (
        <div className="card mx-3 mb-3 mt-4">
            <img src={Image} className="card-img-top" alt="Card Image" />
            <div className="card-body">
                <h3 className="card-title">{Title}</h3>
                <p className="card-text">{Description}</p>
            </div>
            <button className="btn btn-primary">
                <span>Find Out More!</span>
            </button>
        </div>
    );
};

// Componente CardsTotal
const CardsTotal = () => {
    const info = [
        {
            Image: caja1,
            Title: "Corea del Sur",
            Description: "Corea del Sur tiene una rica herencia cultural que abarca miles de años. La cultura coreana se caracteriza por sus tradiciones ancestrales, como el confucianismo, el budismo y el chamanismo. La música tradicional coreana, conocida como “gugak”, y la danza folclórica son formas artísticas importantes. Además, la comida coreana, como el kimchi (repollo fermentado), el bulgogi (carne a la parrilla marinada) y el bibimbap (arroz mixto), es muy reconocida a nivel mundial."
        },
        {
            Image: caja2,
            Title: "Gato",
            Description: "Gato, procedente del vocablo latino cattus, es un término que alude a un animal mamífero que forma parte del conjunto de los félidos: aquellas especies carnívoras que presentan patas posteriores con cuatro dedos y patas anteriores con cinco dedos; uñas retráctiles; hocico corto; y cabeza de forma redondeada. Los gatos además son digitígrados, ya que, al caminar, solamente apoyan sus dedos."
        },
        {
            Image: caja3,
            Title: "Ojo artístico",
            Description: "Cuando el suelo está cubierto de nieve, sobre la que el sol fulge resplandeciente, excepto allí donde caen las sombras, si le preguntamos a un hombre corriente cuál parece ser su color, dirá que blanco, blanco puro, más blanco a la luz del sol, un poco grisáceo en la sombra."
        },
        {
            Image: caja4,
            Title: "Tatuaje",
            Description: "Un tatuaje es una forma de modificación corporal, la cual consiste en alterar de manera temporal o permanente el color de la piel, sobre la cual se plasma un dibujo, un patrón, una figura o un texto, el cual se plasma con agujas u otros utensilios que inyectan tinta o algún otro pigmento en la dermis de una persona."
        }
    ];

    return (
        <div className="text-center container">
            {info.map((card, index) =>
                <Card
                    key={index}
                    Image={card.Image}
                    Title={card.Title}
                    Description={card.Description}
                />
            )}
        </div>
    );
};

export default CardsTotal;





