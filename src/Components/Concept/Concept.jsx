import React from "react";
import ConceptImage from '../../Assets/Images/concept-img.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Concept.css'



const Concept = () => {
    return (
        <>
            <section className="Concept">
                <div>
                   <p className="font-20 concept-line">Concept</p>
                </div>
                <div className="row padding-top-60">
                    <div className="col-md-6 concept-1">
                        <img src={ConceptImage} alt="" />
                    </div>
                    <div className="col-md-6 concept-2 ">
                        <p>
                            The concept draws inspiration from <strong>ripples</strong> —
                            a simple yet powerful symbol of how one idea or action can create
                            <strong> lasting impact</strong>. Like a drop in water, it starts small
                            but expands outward, touching more lives as it moves.
                        </p>
                        <p>
                            When two ripples meet, they create a moment of <strong>collaboration and synergy</strong> —
                            a reflection of how partnerships can strengthen purpose and amplify outcomes.
                            It’s not just about coming together, but about growing together.
                        </p>
                        <p>
                            At the point where the ripples intersect, they form an <strong>infinity symbol</strong> —
                            representing the <strong>endless possibilities</strong> that emerge when people unite around
                            a shared goal. It becomes a visual expression of continuous growth, shared impact,
                            and the long-term change that true collaboration can bring.
                        </p>
                        <p>
                            This concept isn’t just about design — it’s about
                            <strong> capturing the spirit of working together to create something that lasts.</strong>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Concept;