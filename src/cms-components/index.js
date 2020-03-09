import React, { Component } from "react";
import Loadable from 'react-loadable';
import Loading from './Loading';

class DynamicImporter extends Component {
    buildComponents = () => {
        const { expectedComponent } = this.props;
        const { type, children } = expectedComponent;
    
        const MappedComponent =  Loadable({
            loader: () => import(`./${type}`),
            loading: Loading,
          });
    
        return (
            <MappedComponent>
                <>{this.recursiveImportChildren(children)}</>
            </MappedComponent>
        );
      }
    
      recursiveImportChildren = elementsChildren => {
          return elementsChildren.map(({ type, children = [] }, index) => {
              const ChildComponent = Loadable({
                loader: () => import(`./${type}`),
                loading: Loading,
              });
    
              return (
                  <ChildComponent key={index}>
                      <>{this.recursiveImportChildren(children)}</>
                  </ChildComponent>
              );
          })
      }

    render() {
        return this.buildComponents();
    }
}

export default DynamicImporter;