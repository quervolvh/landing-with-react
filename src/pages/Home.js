import React, { Component } from 'react';

import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Feature from '../components/Feature';
import Pricing from '../components/Pricing';
import Extension from '../components/Extension';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import QuestionComponent from '../components/question_component';
import FeatureComponent from '../components/feature_component';
import TypeComponent from '../components/types_component';
import ExtensionComponent from '../components/extension_component';
import PriceComponent from '../components/pricing_component';
import PricingFeature from '../components/price_features';
import Data from '../data/Data';
import { showChild, switchEr } from '../actions/Actions';

class Home extends Component {

    constructor(props) {
        super(props);
        this.showChild = showChild.bind(this);
        this.switchEr = switchEr.bind(this);
    }
    state = Data;
    render() {
        return (
            <div>
                <Header />
                <Introduction />
                <Feature>
                    {this.state.types.map(type =>
                        <TypeComponent key={type.index} onClick={this.switchEr} types={type} />)
                    }
                </Feature>
                <FeatureComponent feature={this.state.feature} />
                <Pricing>
                    {this.state.price.map(price =>
                        <PriceComponent price={price}>
                            {price.price_features.map(features =>
                                <PricingFeature price_feature={features} />)
                            }
                        </PriceComponent>
                    )
                    }
                </Pricing>
                <Extension>
                    {this.state.extension.map(extension =>
                        <ExtensionComponent key={extension.index} extension={extension} />)
                    }
                </Extension>
                <FrequentlyAskedQuestions>
                    {this.state.question.map(question =>
                        <QuestionComponent visibility={question.visibility} state={this.state.question} onClick={this.showChild} key={question.index} question={question} />)
                    }
                </FrequentlyAskedQuestions>
                <Contact />
                <Footer />
            </div>
        );
    }

}
export default Home;