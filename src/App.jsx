import React, { useState } from 'react';
import styles from './Portfolio.module.css';

export default function Portfolio() {
    const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });
    
    const [telaAtiva, setTelaAtiva] = useState('inicio');
   
    const [abaAtiva, setAbaAtiva] = useState('frontend');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Obrigado pelo contato, ${formData.nome}! Mensagem simulada com sucesso.`);
        setFormData({ nome: '', email: '', mensagem: '' });
    };

    return (
        <>
            
            <nav className={styles.nav}>
                <div className={styles.navContainer}>
                    <div className={styles.logo} onClick={() => setTelaAtiva('inicio')} style={{ cursor: 'pointer' }}>
                        DEV<span>.</span>
                    </div>
                    <ul className={styles.navList}>
                        <li>
                            <button 
                                onClick={() => setTelaAtiva('sobre')} 
                                className={`${styles.navLink} ${telaAtiva === 'sobre' ? styles.navLinkActive : ''}`}
                            >
                                Sobre
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => setTelaAtiva('projetos')} 
                                className={`${styles.navLink} ${telaAtiva === 'projetos' ? styles.navLinkActive : ''}`}
                            >
                                Projetos
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => setTelaAtiva('contato')} 
                                className={`${styles.navLink} ${telaAtiva === 'contato' ? styles.navLinkActive : ''}`}
                            >
                                Contato
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            
            
            <main className={styles.mainWrapper}>
                
                
                {telaAtiva === 'inicio' && (
                    <header id="hero" className={`${styles.hero} ${styles.fullscreenStage}`}>
                        <div className={`${styles.container} ${styles.heroLayout}`}>
                            <div className="hero-content">
                                <span className={styles.heroSubtitle}>Disponível para novos projetos</span>
                                <h1>Transformando ideias em <span className={styles.textGradient}>códigos de elite</span>.</h1>
                                <p className={styles.tagline}>Desenvolvedor Full-Stack especializado em criar experiências digital fabulosas, rápidas e seguras.</p>
                                
                                
                                <div className={styles.heroButtons}>
                                    <button onClick={() => setTelaAtiva('projetos')} className={`${styles.btn} ${styles.btnPrimary}`}>
                                        Ver Projetos
                                    </button>
                                    <button onClick={() => setTelaAtiva('sobre')} className={`${styles.btn} ${styles.btnSecondary}`}>
                                        Sobre Mim
                                    </button>
                                    <button onClick={() => setTelaAtiva('contato')} className={`${styles.btn} ${styles.btnOutline}`}>
                                        Bora Bater um Papo
                                    </button>
                                </div>
                            </div>
                            <div className="hero-image-slot">
                                <div className={styles.imageGlowWrapper}>
                                    <img 
                                        src="src/assets/imagens/header.png" 
                                        alt="Ilustração Dev" 
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                    <div className={styles.fallbackShape}></div>
                                </div>
                            </div>
                        </div>
                    </header>
                )}
                
                
                {telaAtiva === 'sobre' && (
                    <section id="sobre" className={`${styles.section} ${styles.fullscreenStage}`}>
                        <div className={styles.container}>
                            <div className={styles.sectionTitle}>
                                <h2>Sobre Mim</h2>
                            </div>
                            <p className={styles.aboutText}>
                                Sou um desenvolvedor apaixonado por tecnologia com experiência em diversas áreas da programação. 
                                Este portfólio mostra meus projetos divididos por categorias: Front-end, Back-end, Banco de Dados 
                                e Cybersecurity. Cada projeto representa um desafio superado e uma solução implementada.
                            </p>
                            <button onClick={() => setTelaAtiva('inicio')} className={styles.backToHomeBtn}>
                                ⬅ Voltar ao início
                            </button>
                        </div>
                    </section>
                )}
                
               
                {telaAtiva === 'projetos' && (
                    <section id="projetos" className={`${styles.section} ${styles.fullscreenStage}`}>
                        <div className={styles.container}>
                            <div className={styles.sectionTitle}>
                                <h2>Meus <span className={styles.textGradient}>Projetos</span></h2>
                            </div>

                            
                            <div className={styles.tabsContainer}>
                                <button 
                                    className={`${styles.tabBtn} ${abaAtiva === 'frontend' ? styles.tabBtnActive : ''}`}
                                    onClick={() => setAbaAtiva('frontend')}
                                >
                                    Front-end
                                </button>
                                <button 
                                    className={`${styles.tabBtn} ${abaAtiva === 'backend' ? styles.tabBtnActive : ''}`}
                                    onClick={() => setAbaAtiva('backend')}
                                >
                                    Back-end
                                </button>
                                <button 
                                    className={`${styles.tabBtn} ${abaAtiva === 'database' ? styles.tabBtnActive : ''}`}
                                    onClick={() => setAbaAtiva('database')}
                                >
                                    Banco de Dados
                                </button>
                                <button 
                                    className={`${styles.tabBtn} ${abaAtiva === 'cybersecurity' ? styles.tabBtnActive : ''}`}
                                    onClick={() => setAbaAtiva('cybersecurity')}
                                >
                                    Cybersecurity
                                </button>
                            </div>

                            {abaAtiva === 'frontend' && (
                                <div className={styles.projectCategory}>
                                    <div className={styles.projectsGrid}>
                                        <div className={styles.projectCard}>
                                            <div className={`${styles.projectImage} ${styles.frontend}`}>🖥️</div>
                                            <div className={styles.projectInfo}>
                                                <h3>Landing Page Moderna</h3>
                                                <p>Uma landing page responsiva com animações CSS e JavaScript.</p>
                                                <div className={styles.techTags}>
                                                    <span className={styles.techTag}>HTML5</span>
                                                    <span className={styles.techTag}>CSS3</span>
                                                    <span className={styles.techTag}>JavaScript</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.projectCard}>
                                            <div className={`${styles.projectImage} ${styles.frontend}`}>📱</div>
                                            <div className={styles.projectInfo}>
                                                <h3>Aplicativo React</h3>
                                                <p>Aplicativo web construído com React e Redux para gerenciamento de estado.</p>
                                                <div className={styles.techTags}>
                                                    <span className={styles.techTag}>React</span>
                                                    <span className={styles.techTag}>Redux</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.projectCard}>
                                            <div className={`${styles.projectImage} ${styles.frontend}`}>🎨</div>
                                            <div className={styles.projectInfo}>
                                                <h3>Dashboard Admin</h3>
                                                <p>Painel administrativo com gráficos interativos e tabelas dinâmicas.</p>
                                                <div className={styles.techTags}>
                                                    <span className={styles.techTag}>Vue.js</span>
                                                    <span className={styles.techTag}>Chart.js</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            {abaAtiva === 'backend' && (
                                <div className={styles.projectCategory}>
                                    <div className={styles.projectsGrid}>
                                        <div className={styles.projectCard}>
                                            <div className={`${styles.projectImage} ${styles.backend}`}>⚙️</div>
                                            <div className={styles.projectInfo}>
                                                <h3>API RESTful</h3>
                                                <p>API desenvolvida em PHP utilizando arquitetura REST.</p>
                                                <div className={styles.techTags}>
                                                    <span className={styles.techTag}>PHP</span>
                                                    <span className={styles.techTag}>API</span>
                                                    <span className={styles.techTag}>RESTful</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.projectCard}>
                                            <div className={`${styles.projectImage} ${styles.backend}`}>🤖</div>
                                            <div className={styles.projectInfo}>
                                                <h3>Microserviço Node</h3>
                                                <p>Serviço de processamento de dados usando JQuery.</p>
                                                <div className={styles.techTags}>
                                                    <span className={styles.techTag}>Node.js</span>
                                                    <span className={styles.techTag}>JQuery</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.projectCard}>
                                            <div className={`${styles.projectImage} ${styles.backend}`}>🔗</div>
                                            <div className={styles.projectInfo}>
                                                <h3>Sistema de Autenticação</h3>
                                                <p>Sistema completo de autenticação com OAuth2 e roles.</p>
                                                <div className={styles.techTags}>
                                                    <span className={styles.techTag}>Java</span>
                                                    <span className={styles.techTag}>OAuth2</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {abaAtiva === 'database' && (
                                <div className={styles.projectCategory}>
                                    <div className={styles.projectsGrid}>
                                        <div className={styles.projectCard}>
                                            <div className={`${styles.projectImage} ${styles.database}`}>🗃️</div>
                                            <div className={styles.projectInfo}>
                                                <h3>Modelo de Dados</h3>
                                                <p>Modelagem de banco de dados relacional para sistema de e-commerce.</p>
                                                <div className={styles.techTags}>
                                                    <span className={styles.techTag}>PostgreSQL</span>
                                                    <span className={styles.techTag}>SQL</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.projectCard}>
                                            <div className={`${styles.projectImage} ${styles.database}`}>📊</div>
                                            <div className={styles.projectInfo}>
                                                <h3>ETL Process</h3>
                                                <p>Pipeline de extração, transformação e carga de dados.</p>
                                                <div className={styles.techTags}>
                                                    <span className={styles.techTag}>Python</span>
                                                    <span className={styles.techTag}>Pandas</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.projectCard}>
                                            <div className={`${styles.projectImage} ${styles.database}`}>🔍</div>
                                            <div className={styles.projectInfo}>
                                                <h3>Otimização de Queries</h3>
                                                <p>Análise e otimização de queries SQL para melhorar performance.</p>
                                                <div className={styles.techTags}>
                                                    <span className={styles.techTag}>MySQL</span>
                                                    <span className={styles.techTag}>EXPLAIN</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {abaAtiva === 'cybersecurity' && (
                                <div className={styles.projectCategory}>
                                    <div className={styles.projectsGrid}>
                                        <div className={styles.projectCard}>
                                            <div className={`${styles.projectImage} ${styles.cybersecurity}`}>🔒</div>
                                            <div className={styles.projectInfo}>
                                                <h3>Scanner de Vulnerabilidades</h3>
                                                <p>Script para identificar vulnerabilidades comuns em aplicações web.</p>
                                                <div className={styles.techTags}>
                                                    <span className={styles.techTag}>Python</span>
                                                    <span className={styles.techTag}>OWASP</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.projectCard}>
                                            <div className={`${styles.projectImage} ${styles.cybersecurity}`}>🛡️</div>
                                            <div className={styles.projectInfo}>
                                                <h3>Autenticação 2FA</h3>
                                                <p>Implementação de autenticação em dois fatores.</p>
                                                <div className={styles.techTags}>
                                                    <span className={styles.techTag}>Node.js</span>
                                                    <span className={styles.techTag}>Speakeasy</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.projectCard}>
                                            <div className={`${styles.projectImage} ${styles.cybersecurity}`}>👁️</div>
                                            <div className={styles.projectInfo}>
                                                <h3>Monitoramento de Logs</h3>
                                                <p>Sistema para análise de logs e detecção de atividades suspeitas.</p>
                                                <div className={styles.techTags}>
                                                    <span className={styles.techTag}>ELK Stack</span>
                                                    <span className={styles.techTag}>SIEM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            <button onClick={() => setTelaAtiva('inicio')} className={styles.backToHomeBtn}>
                                ⬅ Voltar ao início
                            </button>
                        </div>
                    </section>
                )}
                
               
                {telaAtiva === 'contato' && (
                    <section id="contato" className={`${styles.section} ${styles.fullscreenStage}`}>
                        <div className={`${styles.container} ${styles.contactLayout}`}>
                            <div className={styles.sectionTitle}>
                                <h2>Vamos criar algo <br/><span className={styles.textGradient}>fabuloso juntos?</span></h2>
                                <p style={{ color: '#a0aec0', marginTop: '1rem' }}>Preencha o formulário e responderei em menos de 24 horas.</p>
                                <button onClick={() => setTelaAtiva('inicio')} className={styles.backToHomeBtn} style={{ marginTop: '2rem' }}>
                                    ⬅ Voltar ao início
                                </button>
                            </div>
                            <form className={styles.contactForm} onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="nome">Nome</label>
                                    <input 
                                        type="text" 
                                        id="nome" 
                                        name="nome" 
                                        placeholder="Seu nome completo"
                                        value={formData.nome}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        placeholder="seu@email.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="mensagem">Mensagem</label>
                                    <textarea 
                                        id="mensagem" 
                                        name="mensagem" 
                                        rows="5" 
                                        placeholder="Me conte sobre o seu projeto..."
                                        value={formData.mensagem}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className={styles.submitBtn}>Enviar Mensagem</button>
                            </form>
                        </div>
                    </section>
                )}
            </main>
            
            
            <footer className={styles.footer}>
                <div className={`${styles.container} ${styles.footerContent}`}>
                    <p className={styles.copyright}>&copy; 2026 Meu Portfólio Dev. Todos os direitos reservados.</p>
                    <div className={styles.socialLinks}>
                        <a href="#" className={styles.socialLink}>GitHub</a>
                        <a href="#" className={styles.socialLink}>LinkedIn</a>
                        <a href="#" className={styles.socialLink}>Twitter</a>
                    </div>
                </div>
            </footer>
        </>
    );
}