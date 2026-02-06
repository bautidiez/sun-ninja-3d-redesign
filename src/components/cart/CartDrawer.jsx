import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = ({ isOpen, onClose, cartItems, onRemove }) => {
    // Calculate total
    const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0,0,0,0.5)',
                            backdropFilter: 'blur(4px)',
                            zIndex: 9998
                        }}
                    />

                    {/* Drawer Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            maxWidth: '400px',
                            background: 'var(--bg-card)', // Will adapt to theme if defined, or fallback
                            backgroundColor: 'white', // Basic fallback
                            color: 'var(--text-primary)',
                            boxShadow: '-5px 0 30px rgba(0,0,0,0.15)',
                            zIndex: 9999,
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        className="glass-panel" // Use class if available for glass effect
                    >
                        {/* Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                            <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#1E2A32' }}>Your Cart ({cartItems.length})</h2>
                            <button onClick={onClose} style={{
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '8px',
                                fontSize: '1.5rem',
                                color: '#1E2A32'
                            }}>
                                ×
                            </button>
                        </div>

                        {/* Items List */}
                        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {cartItems.length === 0 ? (
                                <div style={{ textAlign: 'center', marginTop: '40px', color: '#6B7C85' }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🛒</div>
                                    <p>Your cart is empty.</p>
                                    <button onClick={onClose} className="btn-primary" style={{ marginTop: '16px' }}>
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <motion.div
                                        key={item.cartId}
                                        layout
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        style={{
                                            display: 'flex',
                                            gap: '12px',
                                            background: '#F7F4EF',
                                            padding: '12px',
                                            borderRadius: '12px'
                                        }}
                                    >
                                        <img src={item.image} alt={item.title} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                                        <div style={{ flex: 1 }}>
                                            <h4 style={{ margin: '0 0 4px', fontSize: '0.9rem', color: '#1E2A32', fontWeight: 600 }}>{item.title}</h4>
                                            <div style={{ fontSize: '0.8rem', color: '#6B7C85' }}>
                                                {item.color} • ${item.price}
                                            </div>
                                        </div>
                                        <button onClick={() => onRemove(item.cartId)} style={{
                                            background: 'transparent',
                                            border: 'none',
                                            color: '#EF4444', // Red-500
                                            cursor: 'pointer',
                                            fontSize: '1.2rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: '8px',
                                            borderRadius: '50%',
                                            transition: 'background 0.2s ease'
                                        }}
                                            onMouseEnter={(e) => e.target.style.background = 'rgba(239, 68, 68, 0.1)'}
                                            onMouseLeave={(e) => e.target.style.background = 'transparent'}
                                            title="Remove item"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                            </svg>
                                        </button>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '20px', marginTop: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '1.1rem', fontWeight: 'bold', color: '#1E2A32' }}>
                                    <span>Total</span>
                                    <span>${total}</span>
                                </div>
                                <button className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1rem', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                                    <span>Checkout</span>
                                    <span>→</span>
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
