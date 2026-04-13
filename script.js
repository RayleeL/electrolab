/**
 * ELECTROLAB Landing Page Scripts
 * Vanilla JavaScript for interactivity, theme switching, and form submission
 */

// --- CONFIGURATION ---
// Replace this with your actual Google Apps Script Web App URL
const APPS_SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initStickyHeader();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initPhoneMask();
    initFormSubmission();
});

/**
 * Language Switching Logic
 */
const translations = {
    ru: {
        nav_about: "О компании",
        nav_services: "Услуги",
        nav_process: "Процесс",
        nav_results: "Результаты",
        nav_scenarios: "Применение",
        cta_header: "Оставить заявку",
        hero_eyebrow: "Стратегический консалтинг • Оптимизация • Рост",
        hero_title: "Помогаем бизнесу расти эффективно и осознанно",
        hero_desc: "Комплексный консалтинг, диагностика процессов и стратегическое сопровождение. Мы помогаем владельцам принимать верные решения и снижать издержки на всех этапах развития.",
        hero_cta_primary: "Получить консультацию",
        hero_cta_secondary: "Наши услуги",
        metric_years: "лет экспертизы",
        metric_projects: "проектов",
        metric_reduction: "среднее снижение издержек",
        about_title: "Путь к системному порядку",
        about_subtitle: "Мы превращаем управленческий хаос в четко работающий механизм",
        about_step1_status: "Точка А: Хаос",
        about_step1_title: "Неопределенность",
        about_step1_item1: "Непрозрачные процессы",
        about_step1_item2: "Зависимость от «незаменимых» сотрудников",
        about_step1_item3: "Принятие решений по интуиции",
        about_step2_status: "Инструменты ELECTROLAB",
        about_step2_title: "Трансформация",
        about_step2_item1: "Глубокий аудит и оцифровка",
        about_step2_item2: "Внедрение регламентов и KPI",
        about_step2_item3: "Автоматизация рутинных задач",
        about_step3_status: "Точка Б: Система",
        about_step3_title: "Управляемый рост",
        about_step3_item1: "Прозрачность каждого процесса",
        about_step3_item2: "Масштабируемая бизнес-модель",
        about_step3_item3: "Решения на основе точных данных",
        services_title: "Наши услуги",
        services_subtitle: "Профессиональная поддержка для решения управленческих и операционных задач",
        service1_title: "Диагностика и оптимизация",
        service1_desc: "Глубокий аудит текущего состояния бизнеса, выявление узких мест и разработка плана по улучшению процессов.",
        service1_item1: "Аудит бизнес-процессов",
        service1_item2: "Поиск скрытых потерь",
        service1_item3: "Реинжиниринг операций",
        service2_title: "Стратегический менеджмент",
        service2_desc: "Разработка долгосрочных стратегий развития и KPI систем.",
        service3_title: "Автоматизация и цифра",
        service3_desc: "Подбор и внедрение инструментов для прозрачности бизнеса.",
        service4_title: "Сопровождение",
        service4_desc: "Постоянная поддержка на всех этапах реализации стратегии.",
        process_title: "Как мы работаем",
        process_subtitle: "Последовательный подход к трансформации вашего бизнеса",
        process_step1_title: "Первичная консультация",
        process_step1_desc: "Обсуждаем ваши задачи, текущие вызовы и определяем цели сотрудничества.",
        process_step2_title: "Диагностика и аудит",
        process_step2_desc: "Проводим детальный анализ бизнеса для выявления реальных причин проблем.",
        process_step3_title: "Разработка решений",
        process_step3_desc: "Формируем конкретную стратегию и план действий по оптимизации.",
        process_step4_title: "Внедрение и контроль",
        process_step4_desc: "Сопровождаем процесс изменений и фиксируем достигнутые результаты.",
        target_title: "Для кого наши решения",
        target_subtitle: "Мы помогаем компаниям на разных этапах зрелости — от амбициозных стартапов до устоявшихся производственных холдингов.",
        target1_title: "Малый и средний бизнес",
        target1_desc: "Помогаем перейти от хаотичного управления к системному подходу и подготовиться к масштабированию.",
        target2_title: "Производственные компании",
        target2_desc: "Оптимизация производственных циклов, снижение издержек и повышение качества продукции.",
        target3_title: "Торговые компании",
        target3_desc: "Настройка эффективного управления запасами, логистикой и внедрение прозрачной отчетности.",
        target4_title: "Руководители и собственники",
        target4_desc: "Предоставляем инструменты для принятия обоснованных управленческих решений на основе данных.",
        results_title: "Ценность для бизнеса",
        result1_label: "Результат управления",
        result1_title: "Прозрачность процессов",
        result1_desc: "Собственник получает полный контроль над происходящим в компании без необходимости микроменеджмента.",
        result2_label: "Финансовый результат",
        result2_title: "Снижение издержек",
        result2_desc: "Выявление и устранение скрытых потерь в операционной деятельности.",
        result3_label: "Системный результат",
        result3_title: "Управляемость",
        result3_desc: "Внедрение четких регламентов и KPI делает работу команды предсказуемой.",
        result4_label: "Стратегический результат",
        result4_title: "Ускорение решений",
        result4_desc: "Наличие актуальных данных и понятной стратегии позволяет бизнесу быстрее реагировать на изменения рынка и опережать конкурентов.",
        scenarios_title: "Где применяются решения",
        scenarios_subtitle: "Контексты, в которых наша экспертиза приносит наибольшую пользу",
        scenario1_title: "Реорганизация управления",
        scenario1_desc: "Когда старые методы управления перестают работать при росте компании.",
        scenario2_title: "Оптимизация производства",
        scenario2_desc: "При необходимости снижения себестоимости и повышения качества продукции.",
        scenario3_title: "Подготовка к масштабированию",
        scenario3_desc: "Создание фундамента для выхода на новые рынки или запуска филиалов.",
        equus_eyebrow: "Техническая реализация",
        equus_title: "EQUUS — Цифровое исполнение",
        equus_desc: "EQUUS выступает как дополнительное направление реализации для проектов, требующих глубокой цифровой интеграции. Если ваша стратегия требует разработки сложных платформ или мобильных приложений, EQUUS обеспечит безупречное техническое исполнение.",
        equus_cta: "Перейти в EQUUS",
        contact_title: "Запрос на консультацию",
        contact_desc: "Оставьте заявку для проведения первичного аудита ваших бизнес-задач. Мы свяжемся с вами, чтобы обсудить возможные точки роста вашего бизнеса.",
        form_label_name: "Ваше имя",
        form_label_phone: "Телефон",
        form_label_company: "Компания",
        form_label_task: "Описание задачи",
        form_submit: "Отправить заявку",
        form_privacy: "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.",
        form_success_title: "Заявка принята",
        form_success_desc: "Мы свяжемся с вами в ближайшее время для обсуждения вашего запроса.",
        form_reset: "Отправить еще раз",
        form_error_title: "Ошибка отправки",
        form_error_desc: "К сожалению, произошла ошибка. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.",
        form_retry: "Попробовать снова",
        footer_desc: "Профессиональный консалтинг и оптимизация бизнеса. Более 15 лет помогаем компаниям расти эффективно.",
        footer_nav_title: "Навигация",
        footer_nav_about: "О компании",
        footer_nav_services: "Услуги",
        footer_nav_process: "Процесс",
        footer_nav_results: "Эффекты",
        footer_contact_title: "Связь",
        footer_whatsapp: "WhatsApp",
        footer_telegram: "Telegram",
        footer_projects_title: "Проекты",
        footer_privacy: "Политика конфиденциальности",
        footer_copy: "&copy; 2024 ELECTROLAB. Все права защищены.",
        form_alert_name: "Пожалуйста, введите ваше имя",
        form_alert_phone: "Пожалуйста, введите полный номер телефона"
    },
    en: {
        nav_about: "About",
        nav_services: "Services",
        nav_process: "Process",
        nav_results: "Results",
        nav_scenarios: "Applications",
        cta_header: "Get a Quote",
        hero_eyebrow: "Strategic Consulting • Optimization • Growth",
        hero_title: "Helping Businesses Grow Efficiently and Mindfully",
        hero_desc: "Comprehensive consulting, business diagnostics, and process optimization. We help owners make the right decisions and increase efficiency.",
        hero_cta_primary: "Get Consultation",
        hero_cta_secondary: "Our Services",
        metric_years: "years of expertise",
        metric_projects: "projects",
        metric_reduction: "average cost reduction",
        about_title: "Path to Systemic Order",
        about_subtitle: "We transform management chaos into a well-functioning mechanism",
        about_step1_status: "Point A: Chaos",
        about_step1_title: "Uncertainty",
        about_step1_item1: "Opaque processes",
        about_step1_item2: "Dependence on 'irreplaceable' employees",
        about_step1_item3: "Intuition-based decision making",
        about_step2_status: "ELECTROLAB Tools",
        about_step2_title: "Transformation",
        about_step2_item1: "Deep audit and digitization",
        about_step2_item2: "Implementation of regulations and KPIs",
        about_step2_item3: "Automation of routine tasks",
        about_step3_status: "Point B: System",
        about_step3_title: "Managed Growth",
        about_step3_item1: "Transparency of every process",
        about_step3_item2: "Scalable business model",
        about_step3_item3: "Data-driven decisions",
        services_title: "Our Services",
        services_subtitle: "Professional support for solving management and operational tasks",
        service1_title: "Diagnostics and Optimization",
        service1_desc: "Deep audit of the current business state, identifying bottlenecks, and developing a process improvement plan.",
        service1_item1: "Business process audit",
        service1_item2: "Search for hidden losses",
        service1_item3: "Operations reengineering",
        service2_title: "Strategic Management",
        service2_desc: "Development of long-term growth strategies and KPI systems.",
        service3_title: "Automation & Digital",
        service3_desc: "Selection and implementation of tools for business transparency.",
        service4_title: "Support",
        service4_desc: "Continuous support at all stages of strategy implementation.",
        process_title: "How We Work",
        process_subtitle: "A consistent approach to your business transformation",
        process_step1_title: "Initial Consultation",
        process_step1_desc: "We discuss your tasks, current challenges, and define cooperation goals.",
        process_step2_title: "Diagnostics and Audit",
        process_step2_desc: "We conduct a detailed business analysis to identify the real causes of problems.",
        process_step3_title: "Solution Development",
        process_step3_desc: "We form a specific strategy and action plan for optimization.",
        process_step4_title: "Implementation and Control",
        process_step4_desc: "We accompany the change process and record the achieved results.",
        target_title: "Who Our Solutions Are For",
        target_subtitle: "We help companies at different stages of maturity — from ambitious startups to established industrial holdings.",
        target1_title: "Small and Medium Business",
        target1_desc: "We help transition from chaotic management to a systemic approach and prepare for scaling.",
        target2_title: "Manufacturing Companies",
        target2_desc: "Optimization of production cycles, cost reduction, and product quality improvement.",
        target3_title: "Trading Companies",
        target3_desc: "Setting up effective inventory management, logistics, and implementing transparent reporting.",
        target4_title: "Managers and Owners",
        target4_desc: "We provide tools for making informed management decisions based on data.",
        results_title: "Value for Business",
        result1_label: "Management Result",
        result1_title: "Process Transparency",
        result1_desc: "The owner gets full control over what is happening in the company without the need for micromanagement.",
        result2_label: "Financial Result",
        result2_title: "Cost Reduction",
        result2_desc: "Identification and elimination of hidden losses in operational activities.",
        result3_label: "Systemic Result",
        result3_title: "Manageability",
        result3_desc: "Implementation of clear regulations and KPIs makes the team's work predictable.",
        result4_label: "Strategic Result",
        result4_title: "Faster Decisions",
        result4_desc: "The availability of up-to-date data and a clear strategy allows the business to react faster to market changes.",
        scenarios_title: "Where Solutions Are Applied",
        scenarios_subtitle: "Contexts in which our expertise brings the most benefit",
        scenario1_title: "Management Reorganization",
        scenario1_desc: "When old management methods stop working as the company grows.",
        scenario2_title: "Production Optimization",
        scenario2_desc: "When there is a need to reduce costs and improve product quality.",
        scenario3_title: "Preparation for Scaling",
        scenario3_desc: "Creating a foundation for entering new markets or launching branches.",
        equus_eyebrow: "Technical Implementation",
        equus_title: "EQUUS — Digital Execution",
        equus_desc: "EQUUS acts as an additional implementation direction for projects requiring deep digital integration. If your strategy requires complex platforms, EQUUS will provide flawless execution.",
        equus_cta: "Go to EQUUS",
        contact_title: "Consultation Request",
        contact_desc: "Leave a request for an initial audit of your business tasks. We will contact you to discuss possible growth points.",
        form_label_name: "Your Name",
        form_label_phone: "Phone",
        form_label_company: "Company",
        form_label_task: "Task Description",
        form_submit: "Send Request",
        form_privacy: "By clicking the button, you agree to the privacy policy.",
        form_success_title: "Request Accepted",
        form_success_desc: "We will contact you shortly to discuss your request.",
        form_reset: "Send Again",
        form_error_title: "Submission Error",
        form_error_desc: "Unfortunately, an error occurred. Please try again later or contact us directly.",
        form_retry: "Try Again",
        footer_desc: "Professional consulting and business optimization. Helping companies grow efficiently for over 15 years.",
        footer_nav_title: "Navigation",
        footer_nav_about: "About",
        footer_nav_services: "Services",
        footer_nav_process: "Process",
        footer_nav_results: "Effects",
        footer_contact_title: "Contact",
        footer_whatsapp: "WhatsApp",
        footer_telegram: "Telegram",
        footer_projects_title: "Projects",
        footer_privacy: "Privacy Policy",
        footer_copy: "&copy; 2024 ELECTROLAB. All rights reserved.",
        form_alert_name: "Please enter your name",
        form_alert_phone: "Please enter a full phone number"
    }
};

function initLanguage() {
    const langToggle = document.getElementById('lang-toggle');
    const langText = langToggle.querySelector('.lang-text');
    const storageKey = 'electrolab-consulting-lang';
    
    let currentLang = localStorage.getItem(storageKey) || 'ru';
    
    const updateContent = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        // Update placeholders
        const nameInput = document.getElementById('name');
        const companyInput = document.getElementById('company');
        const taskInput = document.getElementById('task');
        
        if (lang === 'en') {
            if (nameInput) nameInput.placeholder = "John Doe";
            if (companyInput) companyInput.placeholder = "Company Name";
            if (taskInput) taskInput.placeholder = "Briefly describe your request";
            langText.textContent = 'RU';
        } else {
            if (nameInput) nameInput.placeholder = "Иван Иванов";
            if (companyInput) companyInput.placeholder = "Название компании";
            if (taskInput) taskInput.placeholder = "Кратко опишите ваш запрос";
            langText.textContent = 'EN';
        }
        
        document.documentElement.lang = lang;
    };
    
    // Initial apply
    updateContent(currentLang);
    
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'ru' ? 'en' : 'ru';
        localStorage.setItem(storageKey, currentLang);
        updateContent(currentLang);
    });
}

/**
 * Theme Switching Logic
 */
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const storageKey = 'electrolab-consulting-theme';
    
    // 1. Determine initial theme
    const savedTheme = localStorage.getItem(storageKey);
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const currentTheme = savedTheme || systemTheme;
    
    // 2. Apply initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // 3. Toggle listener
    themeToggle.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem(storageKey, newTheme);
    });
}

/**
 * Sticky Header on Scroll
 */
function initStickyHeader() {
    const header = document.getElementById('header');
    const scrollThreshold = 80;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav__link');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('nav--open');
        
        // Animate hamburger
        const spans = toggle.querySelectorAll('span');
        if (isOpen) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(8px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav--open');
            const spans = toggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

/**
 * Smooth Scroll for Navigation
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 110;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Fade-in Animations on Scroll
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Simple Phone Mask for +996 (XXX) XX-XX-XX
 */
function initPhoneMask() {
    const phoneInput = document.getElementById('phone');
    if (!phoneInput) return;

    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (!value.startsWith('996')) {
            value = '996' + value;
        }
        
        let formattedValue = '+996 ';
        
        if (value.length > 3) {
            formattedValue += '(' + value.substring(3, 6);
        }
        if (value.length > 6) {
            formattedValue += ') ' + value.substring(6, 8);
        }
        if (value.length > 8) {
            formattedValue += '-' + value.substring(8, 10);
        }
        if (value.length > 10) {
            formattedValue += '-' + value.substring(10, 12);
        }
        
        e.target.value = formattedValue.substring(0, 19);
    });

    phoneInput.addEventListener('focus', (e) => {
        if (!e.target.value) {
            e.target.value = '+996 ';
        }
    });
}

/**
 * Form Submission Logic
 */
function initFormSubmission() {
    const form = document.getElementById('lead-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn?.querySelector('.btn-text');
    const btnLoader = submitBtn?.querySelector('.btn-loader');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');

    if (!form || !submitBtn) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const currentLang = document.documentElement.lang || 'ru';
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        
        if (name.length < 2) {
            alert(translations[currentLang].form_alert_name);
            return;
        }
        
        if (phone.length < 18) {
            alert(translations[currentLang].form_alert_phone);
            return;
        }

        // UI State: Loading
        submitBtn.disabled = true;
        if (btnText) btnText.style.opacity = '0';
        btnLoader?.classList.remove('hidden');

        // Prepare Data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        data.source = "ELECTROLAB Landing";
        data.submittedAt = new Date().toISOString();

        try {
            if (APPS_SCRIPT_URL.includes("PASTE_YOUR")) {
                console.warn("Google Apps Script URL is not configured. Simulating success.");
                await new Promise(resolve => setTimeout(resolve, 1500));
                showSuccess();
                return;
            }

            await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            showSuccess();

        } catch (error) {
            console.error('Submission error:', error);
            showError();
        } finally {
            submitBtn.disabled = false;
            if (btnText) btnText.style.opacity = '1';
            btnLoader?.classList.add('hidden');
        }
    });

    function showSuccess() {
        form.classList.add('hidden');
        successMsg?.classList.remove('hidden');
        form.reset();
    }

    function showError() {
        form.classList.add('hidden');
        errorMsg?.classList.remove('hidden');
    }
}

/**
 * Reset Form UI
 */
window.resetFormUI = function() {
    const form = document.getElementById('lead-form');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');
    
    form?.classList.remove('hidden');
    successMsg?.classList.add('hidden');
    errorMsg?.classList.add('hidden');
};
