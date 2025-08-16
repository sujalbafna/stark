import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import { products } from './data/products';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'product'>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentView('product');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProductId(null);
  };

  const selectedProduct = selectedProductId 
    ? products.find(p => p.id === selectedProductId)
    : null;

  if (currentView === 'product' && selectedProduct) {
    return (
      <ProductPage
        name={selectedProduct.name}
        fullName={selectedProduct.fullName}
        description={selectedProduct.detailedDescription}
        image={selectedProduct.image}
        color={selectedProduct.color}
        gradientFrom={selectedProduct.gradientFrom}
        gradientTo={selectedProduct.gradientTo}
        ingredients={selectedProduct.ingredients}
        benefits={selectedProduct.keyBenefits}
        bestFor={selectedProduct.bestFor}
        starIngredients={selectedProduct.starIngredients}
        onBack={handleBackToHome}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products onProductClick={handleProductClick} />
      <HowItWorks />
      <About />
      <Benefits />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
