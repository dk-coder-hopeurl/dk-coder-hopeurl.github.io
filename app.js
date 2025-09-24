const { createApp } = Vue;

// 项目数据
const projectsData = [
  {
    "id": 1,
    "name": "电商管理系统",
    "description": "基于Vue3和Element Plus开发的现代化电商后台管理系统，支持商品管理、订单处理、用户管理等功能。",
    "category": "Web应用",
    "tags": ["Vue3", "Element Plus", "TypeScript", "Vite"],
    "url": "https://github.com/example/ecommerce-admin",
    "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    "date": "2024-03-15"
  },
  {
    "id": 2,
    "name": "任务管理工具",
    "description": "简洁高效的任务管理应用，支持项目分组、进度跟踪、团队协作等功能，提升工作效率。",
    "category": "工具应用",
    "tags": ["React", "Node.js", "MongoDB", "Socket.io"],
    "url": "https://github.com/example/task-manager",
    "image": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    "date": "2024-02-28"
  },
  {
    "id": 3,
    "name": "数据可视化平台",
    "description": "强大的数据分析和可视化平台，支持多种图表类型，实时数据更新，帮助企业做出数据驱动的决策。",
    "category": "数据分析",
    "tags": ["D3.js", "Python", "Flask", "PostgreSQL"],
    "url": "https://github.com/example/data-viz",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    "date": "2024-01-20"
  },
  {
    "id": 4,
    "name": "移动端社交应用",
    "description": "基于React Native开发的跨平台社交应用，支持即时聊天、动态分享、位置服务等功能。",
    "category": "移动应用",
    "tags": ["React Native", "Firebase", "Redux", "Expo"],
    "url": "https://github.com/example/social-app",
    "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    "date": "2024-04-10"
  },
  {
    "id": 5,
    "name": "AI聊天机器人",
    "description": "集成GPT模型的智能聊天机器人，支持多轮对话、上下文理解、个性化回复等高级功能。",
    "category": "人工智能",
    "tags": ["Python", "OpenAI", "FastAPI", "WebSocket"],
    "url": "https://github.com/example/ai-chatbot",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    "date": "2024-03-05"
  },
  {
    "id": 6,
    "name": "区块链钱包",
    "description": "安全可靠的数字货币钱包应用，支持多种加密货币，提供转账、收款、交易记录等功能。",
    "category": "区块链",
    "tags": ["Solidity", "Web3.js", "Ethereum", "MetaMask"],
    "url": "https://github.com/example/crypto-wallet",
    "image": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
    "date": "2024-02-15"
  }
];

createApp({
    data() {
        return {
            projects: projectsData,
            searchQuery: '',
            selectedCategory: '全部',
            showBackToTop: false
        }
    },
    computed: {
        categories() {
            const cats = ['全部', ...new Set(this.projects.map(p => p.category))];
            return cats;
        },
        filteredProjects() {
            let filtered = this.projects;
            
            // 按分类筛选
            if (this.selectedCategory !== '全部') {
                filtered = filtered.filter(p => p.category === this.selectedCategory);
            }
            
            // 按搜索关键词筛选
            if (this.searchQuery.trim()) {
                const query = this.searchQuery.toLowerCase();
                filtered = filtered.filter(p => 
                    p.name.toLowerCase().includes(query) ||
                    p.description.toLowerCase().includes(query) ||
                    p.tags.some(tag => tag.toLowerCase().includes(query))
                );
            }
            
            return filtered;
        }
    },
    methods: {
        openProject(url) {
            if (url) {
                window.open(url, '_blank');
            }
        },
        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        handleScroll() {
            this.showBackToTop = window.scrollY > 300;
        },
        initParticles() {
            if (typeof particlesJS !== 'undefined') {
                particlesJS('particles-js', {
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: {
                            value: '#ffffff'
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 0,
                                color: '#000000'
                            }
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: '#ffffff',
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 6,
                            direction: 'none',
                            random: false,
                            straight: false,
                            out_mode: 'out',
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            onclick: {
                                enable: true,
                                mode: 'push'
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    retina_detect: true
                });
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        
        // 添加页面加载动画延迟
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${0.6 + index * 0.1}s`;
        });

        // 初始化粒子效果
        this.initParticles();
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}).mount('#app');