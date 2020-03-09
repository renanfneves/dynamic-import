import React from 'react';
import DynamicImporter from "./cms-components";


const createAsync = loader =>
    Loadable({
        loader,
        loading: Header,
    });


const pageStruture = { 
    url: "/test/route",
    type: "page-modular",
    children: [
        {
            type: "header",
        },
        {
            type: "body",
            children: [
                {
                    type: "body-child-one",
                },
                {
                    type: "body-child-two",
                    children: [
                        { type: "header" },
                        { type: "header" },
                        { type: "header" },
                        { type: "header" },
                        { type: "header" },
                        { type: "footer1" },
                        { type: "footer2" },
                        { type: "footer3" },
                        { type: "footer4" },
                        { type: "footer5" },
                        { type: "footer6" },
                        { type: "footer7" },
                        { type: "footer8" },
                        { type: "footer9" },
                    ]
                }
            ]
        },
        {
            type: "footer",
        }
    ]
}

function App() {
    return (
        <DynamicImporter expectedComponent={pageStruture} />
    )
}
export default App;
