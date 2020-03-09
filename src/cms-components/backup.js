<ChildComponent>
    <>
        {
            !!treeChildren && 
            !!treeChildren.length &&
            treeChildren.map(child => this.recursiveImportChildren(child)) || null
        }
    </>
</ChildComponent>








import React, { Component } from "react";

import ReactDynamicImport from "react-dynamic-import";
 

class DynamicImporter extends Component {
    buildComponents = () => {
        const { expectedComponent } = this.props;
        const { type, children } = expectedComponent;


        return this.recursiveImportChildren({...expectedComponent});
    }

    recursiveImportChildren = ({ type, children = [] }) => {
        const MappedComponent = ReactDynamicImport({
            name: type,
            loader: type => import(`./${type}.js`)
        });

        const FamilyComponents = children.map(({ type, children: treeChildren = [] }) => {
            const ChildComponent = ReactDynamicImport({
                name: type,
                loader: type => import(`./${type}.js`)
            });

            return <ChildComponent />;
             
        });

        return  <MappedComponent><FamilyComponents /></MappedComponent>;
    }

    render() {
        return this.buildComponents();
    }
}

export default DynamicImporter;