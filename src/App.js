import React, { createRef } from 'react';
// import logo from './logo.svg';
import './components/header';
import './App.css';
import Header from './components/header';
import ElementZero from './components/element_zero';
import ElenentOne from './components/element_one';
import ElementTwo from './components/element_two';
import ElementThree from './components/element_three';
import ElementFour from './components/element_four';
import ElementFive from './components/element_five';
import ElementSix from './components/element_six';
import QuestionComponent from './components/question_component';
import FeatureComponent from './components/feature_component';
import TypeComponent from './components/types_component';
import ExtensionComponent from './components/extension_component';
import PriceComponent from './components/pricing_component';
import PricingFeature from './components/price_features';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.showChild = this.showChild.bind(this);
    this.scrollToElement = this.scrollToElement.bind(this);
    this.switchEr = this.switchEr.bind(this);
    this.elRef = ([...Array(3)].map(() => createRef()));
  }

  state = {
    visible: true,
    visibility: 'block',
    types: [
      { index: 0, feature: 'Simple Bookmarking', underlineClass: 'flexi_active', m_underlineclass: 'sample_active' },
      { index: 1, feature: 'Speedy Searching', underlineClass: '', m_underlineclass: '' },
      { index: 2, feature: 'Easy Sharing', underlineClass: '', m_underlineclass: '' }
    ],
    feature: { index: 0, feature_name: 'Bookmark in one click', feature_body: `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`, image: 'images/illustration-features-tab-1.svg', underlineClass: 'flexi-active' },
    features: [{ index: 0, feature_name: 'Bookmark in one click', feature_body: `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`, image: 'images/illustration-features-tab-1.svg', underlineClass: '' },
    { index: 1, feature_name: 'Bookmark in one click', feature_body: `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`, image: 'images/illustration-features-tab-2.svg', underlineClass: '' },
    { index: 2, feature_name: 'Bookmark in one click', feature_body: `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`, image: 'images/illustration-features-tab-3.svg', underlineClass: '' }],
    extension: [
      { index: 0, browser_name: 'Chrome', browser_icon: 'chrome_icon', minimum_version: '62' },
      { index: 1, browser_name: 'Firefox', browser_icon: 'firefox_icon', minimum_version: '55' },
      { index: 2, browser_name: 'Opera', browser_icon: 'opera_icon', minimum_version: '46' }
    ],
    price: [
      {
        index: 0, price_name: 'SILVER', price_icon: 'silver', time: '', price: '20$', period: 'per month', price_features: [
          { index: 0, feature: 'basic integrator services' },
          { index: 0, feature: 'basic referer services' },
          { index: 0, feature: 'basic link concatenation' },
          { index: 0, feature: 'basic limited reaches' },
        ],
      },
      {
        index: 1, price_name: 'GOLD', price_icon: 'gold', time: '3', price: '50$', period: 'per month',
        price_features: [
          { index: 0, feature: 'Gold standard integration' },
          { index: 0, feature: 'Golden referrals' },
          { index: 0, feature: 'accessibility support' },
          { index: 0, feature: 'great limited proportions' },
          { index: 0, feature: 'marketting referrals' }
        ],
      },
      {
        index: 2, price_name: 'PLATIUM', price_icon: 'platinum', time: '6', price: '100$', period: 'per year',
        price_features: [
          { index: 0, feature: 'Prenium standard integration' },
          { index: 0, feature: 'unlimited referrals' },
          { index: 0, feature: 'unrivaled support' },
          { index: 0, feature: 'premium marketting referrals' },
          { index: 0, feature: 'extensive users' },
          { index: 0, feature: '3 to 5 users' },
          { index: 0, feature: 'grace period upon expiry' }
        ],
      }
    ],
    question: [{ index: 0, topic: 'What is a Bookmark?', body: `A bookmark is a thin marker, commonly made of card, leather, or fabric, used to keep the reader's place in a book and to enable the reader to return to it with ease. Other frequently used materials for bookmarks are paper, metals like silver and brass, silk, wood, cord, and plastic.`, id: 'q1', class: 'none', arrow: '' },
    { index: 1, topic: 'How can I request a new browser?', body: `A bookmark is a thin marker, commonly made of card, leather, or fabric, used to keep the reader's place in a book and to enable the reader to return to it with ease. Other frequently used materials for bookmarks are paper, metals like silver and brass, silk, wood, cord, and plastic.`, id: 'q2', class: 'none', arrow: '' },
    { index: 2, topic: 'Is there a mobile app?', body: `A bookmark is a thin marker, commonly made of card, leather, or fabric, used to keep the reader's place in a book and to enable the reader to return to it with ease. Other frequently used materials for bookmarks are paper, metals like silver and brass, silk, wood, cord, and plastic.`, id: 'q3', class: 'none', arrow: '' },
    { index: 3, topic: 'What about other Chromium browsers?', body: `A bookmark is a thin marker, commonly made of card, leather, or fabric, used to keep the reader's place in a book and to enable the reader to return to it with ease. Other frequently used materials for bookmarks are paper, metals like silver and brass, silk, wood, cord, and plastic.`, id: 'q4', class: 'none', arrow: '' }]
  }

  switchEr(index) {
    var pre = this.state.types;
    var i = 0;
    for (i = 0; i < pre.length; i++) {
      pre[i]['underlineClass'] = '';
      pre[i]['m_underlineclass'] = '';
    }
    pre[index]['underlineClass'] = 'flexi_active';
    pre[index]['m_underlineclass'] = 'sample_active';
    this.setState({ feature: this.state.features[index] });
    this.setState({ types: pre });

  }

  scrollToElement(index) {
    this.elRef[index].current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  }

  showChild(childKey) {
    var current = this.state.question;
    current[childKey]['class'] === 'none' ? current[childKey]['class'] = 'block' : current[childKey]['class'] = 'none';
    current[childKey]['arrow'] === '' ? current[childKey]['arrow'] = 'rotation' : current[childKey]['arrow'] = '';
    this.setState({
      question: current
    });
  }

  render() {

    return (
      <div>
        <Header onClick={this.scrollToElement} />
        <ElementZero />
        <ElenentOne refer={this.elRef[0]}>
          {this.state.types.map(type =>
            <TypeComponent key={type.index} types={type} onClick={this.switchEr} />)
          }
        </ElenentOne>
        <FeatureComponent feature={this.state.feature} />
        <ElementTwo refer={this.elRef[1]}>
          {this.state.price.map(price =>
            <PriceComponent key={price.index} price={price}>
              {price.price_features.map(features =>
                <PricingFeature key={features.index} price_feature={features} />)
              }
            </PriceComponent>
          )
          }
        </ElementTwo>
        <ElementThree>
          {this.state.extension.map(extension =>
            <ExtensionComponent key={extension.index} extension={extension} />)
          }
        </ElementThree>
        <ElementFour>
          {this.state.question.map(question =>
            <QuestionComponent visibility={this.state.visibility} onClick={() => this.showChild(question.index)} key={question.index} question={question} />)
          }
        </ElementFour>
        <ElementFive refer={this.elRef[2]} />
        <ElementSix />
      </div>
    );
  }
}