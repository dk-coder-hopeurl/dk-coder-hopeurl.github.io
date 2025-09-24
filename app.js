const { createApp } = Vue;

// 项目数据
const projectsData = [
  {
    "id": 1,
    "name": "数据同步工具",
    "description": "基于Vue3和Element Plus开发的数据同步工具，目前支持MySQL数据同步、同时支持生成假数据。",
    "category": "Web应用",
    "tags": ["Vue3", "Element Plus", "Python", "Flask"],
    "url": "https://gitee.com/xiaosongstudy2020/sync-tool",
    "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    "date": "2025-09-25"
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
