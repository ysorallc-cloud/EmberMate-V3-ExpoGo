export const EMBERMATE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EmberMate V3 - Production Ready</title>
    <style>
        /* ========================================
           DESIGN SYSTEM - COMPONENT LIBRARY
           ======================================== */
        
        /* === RESET === */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* === TYPOGRAPHY SYSTEM === */
        :root {
            /* Font sizes (8px scale) - IMPROVED ACCESSIBILITY */
            --font-xs: 13px;      /* Small labels - increased from 12px */
            --font-sm: 15px;      /* Body small, secondary - increased from 14px */
            --font-base: 17px;    /* Body text, buttons - increased from 16px */
            --font-lg: 19px;      /* Subheadings - increased from 18px */
            --font-xl: 24px;      /* Section headers - increased from 22px */
            --font-2xl: 30px;     /* Page titles - increased from 28px */
            --font-3xl: 38px;     /* Hero text - increased from 36px */

            /* Font weights */
            --weight-normal: 400;
            --weight-medium: 500;
            --weight-semibold: 600;
            --weight-bold: 700;

            /* Line heights */
            --leading-tight: 1.2;
            --leading-normal: 1.5;
            --leading-relaxed: 1.6;

            /* === SPACING SYSTEM (8px grid) === */
            --space-xs: 4px;
            --space-sm: 8px;
            --space-md: 16px;
            --space-lg: 24px;
            --space-xl: 32px;
            --space-2xl: 48px;
            --space-3xl: 64px;

            /* === COLOR SYSTEM === */
            /* Gradients */
            --gradient-morning: linear-gradient(135deg, #d4855f 0%, #c77456 100%);
            --gradient-day: linear-gradient(135deg, #2d5d5f 0%, #3a7476 100%);
            --gradient-evening: linear-gradient(135deg, #3d5f7a 0%, #2d4a5f 100%);

            /* Primary colors */
            --color-primary: #2d5d5f;
            --color-primary-light: #3a7476;
            --color-primary-dark: #1a3e40;

            /* Accent colors */
            --color-accent: #5fa3a6;
            --color-accent-warm: #e89b7f;
            --color-accent-cool: #7ba68e;

            /* Semantic colors */
            --color-success: #7ba68e;
            --color-warning: #e8a87f;
            --color-danger: #e07a7a;
            --color-info: #7a9ee0;

            /* Neutral colors - IMPROVED ACCESSIBILITY */
            --color-white: #ffffff;
            --color-gray-50: rgba(255, 255, 255, 0.98);
            --color-gray-100: rgba(255, 255, 255, 0.95);
            --color-gray-200: rgba(255, 255, 255, 0.9);  /* Increased from 0.88 for body text */
            --color-gray-300: rgba(255, 255, 255, 0.75);
            --color-gray-400: rgba(255, 255, 255, 0.5);  /* Reserve for borders/backgrounds only */
            --color-gray-500: rgba(255, 255, 255, 0.28);
            --color-gray-600: rgba(255, 255, 255, 0.18);
            --color-gray-700: rgba(255, 255, 255, 0.12);

            /* === BORDERS & RADIUS === */
            --radius-sm: 8px;
            --radius-md: 12px;
            --radius-lg: 16px;
            --radius-xl: 20px;
            --radius-full: 9999px;

            /* === SHADOWS === */
            --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
            --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
        }

        /* === BASE STYLES === */
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            font-size: var(--font-base);
            line-height: var(--leading-normal);
            background: #f5f5f5;
            padding: var(--space-lg);
        }

        /* ========================================
           BUTTON COMPONENTS
           ======================================== */

        /* Primary Button */
        .btn-primary {
            width: 100%;
            background: var(--color-accent);
            border: none;
            color: white;
            padding: 18px var(--space-md);
            border-radius: var(--radius-md);
            font-size: var(--font-lg);
            font-weight: var(--weight-bold);
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .btn-primary:hover {
            background: var(--color-primary-light);
            transform: translateY(-1px);
            box-shadow: var(--shadow-md);
        }

        /* Secondary Button */
        .btn-secondary {
            width: 100%;
            background: rgba(255, 255, 255, 0.18);
            border: 2px solid rgba(255, 255, 255, 0.3);
            color: white;
            padding: 18px var(--space-md);
            border-radius: var(--radius-md);
            font-size: var(--font-lg);
            font-weight: var(--weight-semibold);
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.24);
        }

        /* Tertiary Button (Text only) */
        .btn-tertiary {
            background: transparent;
            border: none;
            color: white;
            padding: var(--space-md);
            font-size: var(--font-base);
            font-weight: var(--weight-semibold);
            cursor: pointer;
            text-decoration: underline;
            text-underline-offset: 3px;
        }

        /* Icon Button */
        .btn-icon {
            width: 44px;
            height: 44px;
            background: rgba(255, 255, 255, 0.18);
            border: none;
            border-radius: var(--radius-full);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            cursor: pointer;
            position: relative;
            transition: all 0.2s ease;
        }

        .btn-icon:hover {
            background: rgba(255, 255, 255, 0.24);
            transform: scale(1.05);
        }

        /* ========================================
           CARD COMPONENTS
           ======================================== */

        /* Solid Card - Improved Contrast */
        .card-solid {
            background: rgba(255, 255, 255, 0.18);
            border-radius: var(--radius-lg);
            padding: var(--space-lg);
            margin-bottom: var(--space-md);
        }

        /* Soft Card - Improved Contrast */
        .card-soft {
            background: rgba(255, 255, 255, 0.12);
            border: 2px solid rgba(255, 255, 255, 0.25);
            border-radius: var(--radius-lg);
            padding: var(--space-lg);
            margin-bottom: var(--space-md);
        }

        /* List Card - Improved Contrast */
        .card-list {
            background: rgba(255, 255, 255, 0.18);
            border-radius: var(--radius-md);
            padding: var(--space-lg);
            margin-bottom: var(--space-sm);
            display: flex;
            align-items: center;
            gap: var(--space-md);
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .card-list:hover {
            background: rgba(255, 255, 255, 0.24);
            transform: translateX(4px);
        }

        .card-list-icon {
            font-size: 28px;
            flex-shrink: 0;
        }

        .card-list-content {
            flex: 1;
        }

        .card-list-title {
            font-size: var(--font-lg);
            font-weight: var(--weight-semibold);
            color: white;
            margin-bottom: var(--space-xs);
        }

        .card-list-subtitle {
            font-size: var(--font-base);
            color: var(--color-gray-200);  /* Changed from gray-100 to gray-200 for 0.9 opacity */
        }

        .card-list-meta {
            font-size: var(--font-base);
            color: var(--color-gray-200);  /* Changed from gray-100 to gray-200 for 0.9 opacity */
            font-weight: var(--weight-semibold);
        }

        /* ========================================
           LAYOUT COMPONENTS
           ======================================== */

        .demo-container {
            max-width: 1800px;
            margin: 0 auto;
        }

        .demo-title {
            text-align: center;
            font-size: var(--font-3xl);
            font-weight: var(--weight-bold);
            color: var(--color-primary-dark);
            margin-bottom: var(--space-md);
        }

        .demo-subtitle {
            text-align: center;
            font-size: var(--font-lg);
            color: #666;
            margin-bottom: var(--space-2xl);
            line-height: var(--leading-relaxed);
        }

        .journey-section {
            margin-bottom: var(--space-3xl);
        }

        .section-title {
            font-size: var(--font-2xl);
            font-weight: var(--weight-bold);
            color: var(--color-primary-dark);
            margin-bottom: var(--space-md);
            text-align: center;
        }

        .section-subtitle {
            font-size: var(--font-base);
            color: #666;
            margin-bottom: var(--space-xl);
            text-align: center;
        }

        .screens-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
            gap: var(--space-lg);
        }

        .screen-wrapper {
            background: white;
            border-radius: var(--radius-xl);
            padding: var(--space-md);
            box-shadow: var(--shadow-lg);
        }

        .screen-label {
            font-size: var(--font-xs);
            font-weight: var(--weight-bold);
            color: #666;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: var(--space-md);
            text-align: center;
        }

        /* Phone Frame */
        .phone-frame {
            background: var(--gradient-day);
            border-radius: var(--radius-lg);
            overflow: hidden;
            position: relative;
            aspect-ratio: 9/19.5;
        }

        .phone-frame.morning {
            background: var(--gradient-morning);
        }

        .phone-frame.evening {
            background: var(--gradient-evening);
        }

        .screen-content {
            padding: var(--space-lg);
            height: 100%;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
        }

        /* ========================================
           NAVIGATION COMPONENTS
           ======================================== */

        /* Top Bar */
        .top-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: var(--space-lg);
        }

        .logo {
            display: flex;
            align-items: center;
            gap: var(--space-sm);
        }

        .logo-icon {
            font-size: 28px;
        }

        .logo-text {
            font-size: var(--font-xl);
            font-weight: var(--weight-bold);
            color: white;
        }

        .top-actions {
            display: flex;
            gap: var(--space-sm);
        }

        .notification-badge {
            position: absolute;
            top: -4px;
            right: -4px;
            background: var(--color-accent-warm);
            color: white;
            width: 20px;
            height: 20px;
            border-radius: var(--radius-full);
            font-size: 11px;
            font-weight: var(--weight-bold);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Bottom Navigation */
        .bottom-nav {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            padding: var(--space-sm) var(--space-md);
            display: flex;
            justify-content: space-around;
            border-top: 1px solid var(--color-gray-600);
        }

        .nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--space-xs);
            cursor: pointer;
            padding: var(--space-sm);
            border-radius: var(--radius-sm);
            transition: all 0.2s ease;
        }

        .nav-item:hover {
            background: var(--color-gray-600);
        }

        .nav-item.active {
            background: var(--color-gray-600);
        }

        .nav-icon {
            font-size: 24px;
        }

        .nav-label {
            font-size: var(--font-xs);
            color: var(--color-gray-200);  /* Changed from gray-100 to gray-200 for 0.9 opacity */
            font-weight: var(--weight-medium);
        }

        .nav-item.active .nav-label {
            color: white;
            font-weight: var(--weight-bold);
        }

        /* Log Group Components */
        .log-group {
            background: rgba(255, 255, 255, 0.18);
            border: 2px solid rgba(255, 255, 255, 0.25);
            border-radius: var(--radius-lg);
            padding: var(--space-lg);
            margin-bottom: var(--space-md);
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .log-group:hover {
            background: rgba(255, 255, 255, 0.24);
            border-color: rgba(255, 255, 255, 0.35);
        }

        .log-group-header {
            display: flex;
            align-items: center;
            gap: var(--space-md);
        }

        .log-group-icon {
            font-size: 32px;
            flex-shrink: 0;
        }

        .log-group-content {
            flex: 1;
        }

        .log-group-title {
            font-size: var(--font-lg);
            font-weight: var(--weight-bold);
            color: white;
            margin-bottom: var(--space-xs);
        }

        .log-group-value {
            font-size: var(--font-base);
            color: white;
            font-weight: var(--weight-medium);
        }

        .log-group-meta {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: var(--space-sm);
        }

        .log-trend {
            font-size: var(--font-base);
            font-weight: var(--weight-semibold);
            color: white;
        }

        .log-trend.up {
            color: #7ba68e;
        }

        .log-trend.down {
            color: #7ba68e;
        }

        .log-trend.same {
            color: white;
        }

        .log-status {
            width: 14px;
            height: 14px;
            border-radius: var(--radius-full);
        }

        .log-status.stable {
            background: #7ba68e;
            box-shadow: 0 0 0 3px rgba(123, 166, 142, 0.3);
        }

        .log-status.improving {
            background: #7ba68e;
            box-shadow: 0 0 0 3px rgba(123, 166, 142, 0.3);
        }

        .log-status.concern {
            background: #e8a87f;
            box-shadow: 0 0 0 3px rgba(232, 168, 127, 0.3);
        }

        .log-stat-card {
            background: rgba(255, 255, 255, 0.18);
            border: 2px solid rgba(255, 255, 255, 0.25);
            border-radius: var(--radius-lg);
            padding: var(--space-xl);
            margin-bottom: var(--space-lg);
        }

        .log-stat-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--space-lg) 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .log-stat-row:last-child {
            border-bottom: none;
        }

        .log-stat-label {
            font-size: var(--font-lg);
            color: white;
            font-weight: var(--weight-medium);
        }

        .log-stat-value {
            font-size: var(--font-xl);
            color: white;
            font-weight: var(--weight-bold);
        }

        /* Stability Score Orb */
        /* Base orb (used on detail screens) */
        .stability-orb {
            width: 180px;
            height: 180px;
            border-radius: var(--radius-full);
            background: rgba(255, 255, 255, 0.18);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: var(--space-lg) auto;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
        }

        /* Hero orb for Today screen */
        .stability-orb--hero {
            width: min(260px, 72vw);
            height: min(260px, 72vw);
        }

        .stability-orb:hover {
            background: rgba(255, 255, 255, 0.24);
            transform: scale(1.05);
        }

        .stability-orb::before {
            content: '';
            position: absolute;
            inset: -4px;
            border-radius: var(--radius-full);
            background: conic-gradient(
                from 0deg,
                #7ba68e 0deg,
                #7ba68e var(--orb-progress, 270deg),
                rgba(255, 255, 255, 0.2) var(--orb-progress, 270deg)
            );
            z-index: -1;
        }

        .stability-score {
            font-size: 56px;
            font-weight: var(--weight-bold);
            color: white;
            line-height: 1;
        }

        .stability-label {
            font-size: var(--font-lg);
            color: white;
            margin-top: var(--space-sm);
            font-weight: var(--weight-semibold);
        }

        .stability-breakdown {
            background: rgba(255, 255, 255, 0.18);
            border: 2px solid rgba(255, 255, 255, 0.25);
            border-radius: var(--radius-lg);
            padding: var(--space-xl);
            margin-bottom: var(--space-md);
        }

        .stability-breakdown-title {
            font-size: var(--font-xl);
            font-weight: var(--weight-bold);
            color: white;
            margin-bottom: var(--space-xl);
            text-align: center;
        }
        .stability-factor {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--space-lg) 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .stability-factor:last-child {
            border-bottom: none;
        }

        .stability-factor-name {
            font-size: var(--font-lg);
            color: white;
            font-weight: var(--weight-medium);
        }

        .stability-factor-score {
            display: flex;
            align-items: center;
            gap: var(--space-md);
        }

        .stability-factor-value {
            font-size: var(--font-xl);
            font-weight: var(--weight-bold);
            color: white;
        }

        .stability-factor-icon {
            font-size: 24px;
        }

        /* ========================================
           PAGE-SPECIFIC COMPONENTS
           ======================================== */

        /* Page Header */
        .page-header {
            text-align: center;
            margin-bottom: var(--space-xl);
        }

        .page-icon {
            font-size: 48px;
            margin-bottom: var(--space-md);
        }

        .page-title {
            font-size: var(--font-2xl);
            font-weight: var(--weight-bold);
            color: white;
            margin-bottom: var(--space-sm);
        }

        .page-subtitle {
            font-size: var(--font-base);
            color: var(--color-gray-200);
        }

        /* Section Header */
        .section-header {
            font-size: var(--font-base);
            font-weight: var(--weight-bold);
            color: var(--color-gray-200);  /* Changed from gray-100 to gray-200 for better hierarchy */
            margin: var(--space-lg) 0 var(--space-md);
            text-transform: uppercase;
            letter-spacing: 0.8px;
        }

        /* Stat Card */
        .stat-card {
            background: rgba(255, 255, 255, 0.18);
            border-radius: var(--radius-lg);
            padding: var(--space-xl);
            text-align: center;
        }

        .stat-value {
            font-size: var(--font-3xl);
            font-weight: var(--weight-bold);
            color: white;
            margin-bottom: var(--space-sm);
        }

        .stat-label {
            font-size: var(--font-base);
            color: var(--color-gray-200);  /* Changed from gray-100 to gray-200 for better contrast */
        }

        /* Companion Bubble */
        .companion-bubble {
            background: rgba(255, 255, 255, 0.18);
            border: 1px solid rgba(255, 255, 255, 0.25);
            border-radius: var(--radius-lg);
            padding: var(--space-md);
            margin-bottom: var(--space-lg);
            position: relative;
        }

        .companion-bubble::before {
            content: '🌟';
            position: absolute;
            top: -12px;
            left: var(--space-md);
            font-size: 24px;
        }

        .companion-text {
            font-size: var(--font-base);
            color: white;
            line-height: var(--leading-relaxed);
            padding-top: var(--space-sm);
            font-weight: var(--weight-medium);
        }

        /* Quick Log Grid */
        .quick-log-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-md);
            margin-bottom: var(--space-lg);
        }

        .quick-log-btn {
            background: rgba(255, 255, 255, 0.18);
            border: 2px solid rgba(255, 255, 255, 0.25);
            border-radius: var(--radius-md);
            padding: var(--space-lg);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--space-md);
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .quick-log-btn:hover {
            background: rgba(255, 255, 255, 0.24);
            transform: translateY(-2px);
        }

        .quick-log-icon {
            font-size: 32px;
        }

        .quick-log-label {
            font-size: var(--font-base);
            color: white;
            font-weight: var(--weight-bold);
        }

        /* Snapshot Card */
        .snapshot-card {
            background: rgba(255, 255, 255, 0.18);
            border-radius: var(--radius-lg);
            padding: var(--space-lg);
            margin-bottom: var(--space-md);
        }

        .snapshot-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: var(--space-md);
        }

        .snapshot-title {
            font-size: var(--font-lg);
            font-weight: var(--weight-bold);
            color: white;
        }

        .snapshot-value {
            font-size: var(--font-xl);
            font-weight: var(--weight-bold);
            color: #ffffff;  /* Changed from accent to white for better contrast on dark backgrounds */
        }

        /* Progress Bar */
        .progress-bar {
            background: rgba(0, 0, 0, 0.2);
            border-radius: var(--radius-full);
            height: 10px;
            overflow: hidden;
            margin-top: var(--space-sm);
        }

        .progress-fill {
            background: var(--color-success);
            height: 100%;
            border-radius: var(--radius-full);
            transition: width 0.3s ease;
        }

        /* Badge */
        .badge {
            display: inline-flex;
            align-items: center;
            gap: var(--space-xs);
            background: rgba(255, 255, 255, 0.18);
            color: white;
            padding: var(--space-sm) var(--space-md);
            border-radius: var(--radius-full);
            font-size: var(--font-sm);
            font-weight: var(--weight-semibold);
        }

        .badge.success {
            background: rgba(123, 166, 142, 0.4);
            border: 2px solid var(--color-success);
        }

        .badge.warning {
            background: rgba(232, 168, 127, 0.4);
            border: 2px solid var(--color-warning);
        }

        /* Alert Box */
        .alert-box {
            background: rgba(123, 166, 142, 0.25);
            border: 2px solid var(--color-success);
            border-radius: var(--radius-md);
            padding: var(--space-lg);
            margin-bottom: var(--space-md);
        }

        .alert-title {
            font-size: var(--font-base);
            color: white;
            font-weight: var(--weight-bold);
            margin-bottom: var(--space-sm);
        }

        .alert-text {
            font-size: var(--font-base);
            color: white;
            line-height: var(--leading-normal);
        }

        /* Onboarding */
        .onboarding-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 0 var(--space-md);
        }

        .onboarding-icon {
            font-size: 80px;
            margin-bottom: var(--space-lg);
            animation: gentleFloat 3s ease-in-out infinite;
        }

        @keyframes gentleFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .onboarding-title {
            font-size: var(--font-2xl);
            font-weight: var(--weight-bold);
            color: white;
            margin-bottom: var(--space-md);
            line-height: var(--leading-tight);
        }

        .onboarding-text {
            font-size: var(--font-base);
            color: var(--color-gray-100);
            line-height: var(--leading-relaxed);
            margin-bottom: var(--space-xl);
        }

        .onboarding-features {
            display: flex;
            flex-direction: column;
            gap: var(--space-md);
            margin-bottom: var(--space-xl);
        }

        .onboarding-feature {
            display: flex;
            align-items: center;
            gap: var(--space-md);
            text-align: left;
        }

        .onboarding-feature-icon {
            font-size: 32px;
        }

        .onboarding-feature-text {
            font-size: var(--font-sm);
            color: var(--color-gray-200);  /* Changed from gray-100 to gray-200 for better contrast */
            line-height: var(--leading-normal);
        }

        /* Dot Indicators */
        .dot-indicators {
            display: flex;
            gap: var(--space-sm);
            justify-content: center;
            margin-bottom: var(--space-xl);
        }

        .dot {
            width: 8px;
            height: 8px;
            background: var(--color-gray-600);
            border-radius: var(--radius-full);
        }

        .dot.active {
            background: white;
            width: 24px;
        }

        /* ========================================
           UTILITY CLASSES
           ======================================== */
        
        .text-muted {
            color: var(--color-gray-300);
            font-size: var(--font-sm);
        }

        .text-help {
            color: var(--color-gray-200);
            font-size: var(--font-sm);
            line-height: var(--leading-normal);
        }

        .pill-label {
            display: inline-block;
            background: rgba(255, 255, 255, 0.18);
            color: white;
            padding: var(--space-xs) var(--space-md);
            border-radius: var(--radius-full);
            font-size: var(--font-xs);
            font-weight: var(--weight-semibold);
        }

        .chip-success {
            background: rgba(123, 166, 142, 0.4);
            border: 2px solid var(--color-success);
            color: white;
            padding: var(--space-sm) var(--space-md);
            border-radius: var(--radius-md);
            font-size: var(--font-sm);
            font-weight: var(--weight-semibold);
        }

        .chip-warning {
            background: rgba(232, 168, 127, 0.4);
            border: 2px solid var(--color-warning);
            color: white;
            padding: var(--space-sm) var(--space-md);
            border-radius: var(--radius-md);
            font-size: var(--font-sm);
            font-weight: var(--weight-semibold);
        }

        .info-strip {
            font-size: var(--font-sm);
            color: rgba(255, 255, 255, 0.88);
            text-align: center;
            margin-top: var(--space-md);
            line-height: var(--leading-normal);
        }

        /* ========================================
           CALENDAR COMPONENTS
           ======================================== */

        .calendar-intro,
        .calendar-caption {
            font-size: var(--font-sm);
            color: rgba(255,255,255,0.9);
            margin-bottom: var(--space-md);
            text-align: left;
        }

        .calendar-card {
            background: rgba(255,255,255,0.97);
            border-radius: 20px;
            padding: 16px 18px 18px;
            box-shadow: var(--shadow-md);
            color: #234040;
            margin-bottom: var(--space-lg);
        }

        .calendar-month-header {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: var(--space-md);
            margin-bottom: var(--space-sm);
        }

        .calendar-month-title {
            font-size: var(--font-lg);
            font-weight: var(--weight-semibold);
        }

        .calendar-nav-btn {
            border: none;
            background: transparent;
            font-size: 20px;
            padding: 4px 6px;
            cursor: pointer;
            color: #234040;
        }

        .calendar-tabs {
            display: flex;
            gap: 8px;
            margin-bottom: 12px;
        }

        .calendar-tab {
            flex: 1;
            padding: 6px 0;
            font-size: var(--font-xs);
            border-radius: 999px;
            border: none;
            background: transparent;
            cursor: pointer;
            color: #3c5b5c;
        }

        .calendar-tab.active {
            background: #e6f2f1;
            font-weight: var(--weight-semibold);
        }

        .calendar-weekdays {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            margin-bottom: 8px;
            font-size: var(--font-xs);
            color: #8a9c9b;
            text-align: center;
        }

        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 4px;
        }

        .calendar-day {
            aspect-ratio: 1;
            border-radius: 14px;
            border: none;
            background: transparent;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3px;
            cursor: pointer;
            min-height: 44px;
        }

        .calendar-day-number {
            font-size: 14px;
        }

        .calendar-dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: #cfd7d6;
        }

        /* Calendar day states */
        .calendar-day.has-data .calendar-dot {
            background: #7ba68e;  /* Steady day */
        }

        .calendar-day.is-warning .calendar-dot {
            background: #e8a87f;  /* Keep an eye on */
        }

        .calendar-day.is-concern .calendar-dot {
            background: #e07a7a;  /* Flag for provider */
        }

        .calendar-day.is-selected {
            background: #f2faf9;
            box-shadow: 0 0 0 1px #7ba68e;
        }

        /* ========================================
           IMPROVED CARD CONTRAST
           ======================================== */
           ======================================== */
        
        .card-soft {
            background: rgba(0, 0, 0, 0.35);  /* Darker, more stable background */
            border: 1px solid rgba(255, 255, 255, 0.28);
            border-radius: var(--radius-md);
            padding: var(--space-lg);
        }

        /* ========================================
           MOBILE RESPONSIVENESS
           ======================================== */

        @media (max-width: 768px) {
            body {
                padding: var(--space-md);
            }

            .demo-container {
                max-width: 100%;
            }

            .screens-grid {
                grid-template-columns: 1fr;  /* Single column on mobile */
                gap: var(--space-md);
            }

            .screen-wrapper {
                padding: var(--space-sm);
                border-radius: var(--radius-lg);
            }

            .screen-content {
                padding-bottom: 80px;  /* Extra padding to prevent nav collision */
            }
        }

        @media (max-width: 400px) {
            :root {
                --font-3xl: 34px;  /* Slightly smaller for very small screens */
                --font-2xl: 28px;
            }
        }
    </style>
</head>
<body>
    <div class="demo-container">
        <div class="demo-title">EmberMate V3 - Production Ready</div>
        <div class="demo-subtitle">Unified component library • Restructured navigation • Production architecture</div>
        <!-- ========================================
             NEW NAVIGATION STRUCTURE
             ======================================== -->

        <!-- TODAY: Snapshot + Quick Logging + Companion -->
        <div class="journey-section">
            <div class="section-title">1. TODAY</div>
            <div class="section-subtitle">Clean dashboard with clear hierarchy</div>
            
            <div class="screens-grid">
                <!-- Today Home - Simplified -->
                <div class="screen-wrapper">
                    <div class="screen-label">Today Home</div>
                    <div class="phone-frame">
                        <div class="screen-content">
                            <div class="top-bar">
                                <div class="logo">
                                    <div class="logo-icon">🔥</div>
                                    <div class="logo-text">EmberMate</div>
                                </div>
                                <div class="top-actions">
                                    <div class="btn-icon">
                                        <span>🔔</span>
                                        <div class="notification-badge">3</div>
                                    </div>
                                    <div class="btn-icon">⚙️</div>
                                </div>
                            </div>

                            <div class="page-header">
                                <div class="page-title">Good Morning</div>
                                <div class="page-subtitle">Friday, November 22</div>
                            </div>

                            <div class="stability-orb stability-orb--hero" style="--orb-progress: 270deg;">
                                <div class="stability-score">85</div>
                                <div class="stability-label">Health Score</div>
                            </div>

                            <div style="text-align: center; font-size: var(--font-sm); color: rgba(255,255,255,0.88); margin-bottom: var(--space-xl); font-weight: var(--weight-medium);">
                                Tap to see how this works →
                            </div>

                            <div class="section-header">What Needs Attention</div>

                            <div class="card-list">
                                <div class="card-list-icon">💊</div>
                                <div class="card-list-content">
                                    <div class="card-list-title">Take Lisinopril</div>
                                    <div class="card-list-subtitle">Morning dose due now</div>
                                </div>
                                <button class="btn-primary" style="width: auto; padding: var(--space-md) var(--space-lg); font-size: var(--font-base);">Log</button>
                            </div>

                            <div class="section-header">Quick Actions</div>

                            <div class="quick-log-grid">
                                <div class="quick-log-btn">
                                    <div class="quick-log-icon">💊</div>
                                    <div class="quick-log-label">Meds</div>
                                </div>
                                <div class="quick-log-btn">
                                    <div class="quick-log-icon">😊</div>
                                    <div class="quick-log-label">Mood</div>
                                </div>
                                <div class="quick-log-btn">
                                    <div class="quick-log-icon">🤒</div>
                                    <div class="quick-log-label">Symptom</div>
                                </div>
                                <div class="quick-log-btn">
                                    <div class="quick-log-icon">❤️</div>
                                    <div class="quick-log-label">Vitals</div>
                                </div>
                                <div class="quick-log-btn">
                                    <div class="quick-log-icon">🩸</div>
                                    <div class="quick-log-label">Blood Sugar</div>
                                </div>
                            </div>

                            <div style="background: rgba(123, 166, 142, 0.25); border: 2px solid #7ba68e; border-radius: var(--radius-md); padding: var(--space-md); display: flex; align-items: center; gap: var(--space-md);">
                                <div style="font-size: 32px;">🎉</div>
                                <div>
                                    <div style="font-size: var(--font-base); color: white; font-weight: var(--weight-bold);">3-Day Streak!</div>
                                    <div style="font-size: var(--font-sm); color: white;">Keep logging daily</div>
                                </div>
                            </div>
                        </div>

                        <div class="bottom-nav">
                            <div class="nav-item active">
                                <div class="nav-icon">🏠</div>
                                <div class="nav-label">Today</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📝</div>
                                <div class="nav-label">Log</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📅</div>
                                <div class="nav-label">Calendar</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📊</div>
                                <div class="nav-label">Insights</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">🕊️</div>
                                <div class="nav-label">Wellness</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Stability Score Breakdown - Simplified -->
                <div class="screen-wrapper">
                    <div class="screen-label">Health Score Explained</div>
                    <div class="phone-frame">
                        <div class="screen-content">
                            <div class="page-header">
                                <div class="page-title">Your Health Score</div>
                                <div class="page-subtitle">Based on your tracking</div>
                            </div>

                            <div class="stability-orb" style="--orb-progress: 270deg;">
                                <div class="stability-score">85</div>
                                <div class="stability-label">Today</div>
                            </div>

                            <div class="stability-breakdown">
                                <div class="stability-breakdown-title">What This Means</div>
                                
                                <div class="stability-factor">
                                    <div class="stability-factor-name">📝 Tracking</div>
                                    <div class="stability-factor-score">
                                        <div class="stability-factor-value">90%</div>
                                    </div>
                                </div>

                                <div class="stability-factor">
                                    <div class="stability-factor-name">🤒 Symptoms</div>
                                    <div class="stability-factor-score">
                                        <div class="stability-factor-value">85%</div>
                                    </div>
                                </div>

                                <div class="stability-factor">
                                    <div class="stability-factor-name">😴 Sleep</div>
                                    <div class="stability-factor-score">
                                        <div class="stability-factor-value">82%</div>
                                    </div>
                                </div>

                                <div class="stability-factor">
                                    <div class="stability-factor-name">😊 Mood</div>
                                    <div class="stability-factor-score">
                                        <div class="stability-factor-value">80%</div>
                                    </div>
                                </div>
                            </div>

                            <div style="background: rgba(255, 255, 255, 0.12); border-radius: var(--radius-md); padding: var(--space-lg); margin-top: var(--space-lg);">
                                <div style="font-size: var(--font-base); color: white; font-weight: var(--weight-bold); margin-bottom: var(--space-sm);">Higher = More Stable</div>
                                <div style="font-size: var(--font-base); color: white; line-height: var(--leading-normal);">
                                    This score helps you see if your health is staying consistent. Share it with your doctor.
                                </div>
                            </div>

                            <button class="btn-primary" style="margin-top: var(--space-lg);">
                                Got It
                            </button>
                        </div>

                        <div class="bottom-nav">
                            <div class="nav-item active">
                                <div class="nav-icon">🏠</div>
                                <div class="nav-label">Today</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📝</div>
                                <div class="nav-label">Log</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📅</div>
                                <div class="nav-label">Calendar</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📊</div>
                                <div class="nav-label">Insights</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">🕊️</div>
                                <div class="nav-label">Wellness</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- LOG: Simplified Daily Log with Expandable Groups -->
        <div class="journey-section">
            <div class="section-title">2. DAILY LOG</div>
            <div class="section-subtitle">Single-screen with deltas and flags</div>
            
            <div class="screens-grid">
                <!-- Daily Log - With Deltas -->
                <div class="screen-wrapper">
                    <div class="screen-label">Daily Log with Deltas</div>
                    <div class="phone-frame">
                        <div class="screen-content">
                            <div class="page-header">
                                <div class="page-title">Today's Log</div>
                                <div class="page-subtitle">Friday, November 22</div>
                            </div>

                            <!-- Meds -->
                            <div class="log-group">
                                <div class="log-group-header">
                                    <div class="log-group-icon">💊</div>
                                    <div class="log-group-content">
                                        <div class="log-group-title">Medications</div>
                                        <div class="log-group-value">2 of 3 taken</div>
                                        <div style="font-size: var(--font-sm); color: #7ba68e; font-weight: var(--weight-semibold); margin-top: var(--space-xs);">
                                            +1 on time vs yesterday
                                        </div>
                                    </div>
                                    <div class="log-group-meta">
                                        <div class="log-status stable">●</div>
                                    </div>
                                </div>
                                <div style="margin-top: var(--space-sm); text-align: center;">
                                    <button class="btn-tertiary" style="width: 100%; font-size: var(--font-sm);">View in Weekly Report →</button>
                                </div>
                            </div>

                            <!-- Symptoms with Flag -->
                            <div class="log-group" style="border: 2px solid #e8a87f;">
                                <div class="log-group-header">
                                    <div class="log-group-icon">🤒</div>
                                    <div class="log-group-content">
                                        <div class="log-group-title">Symptoms</div>
                                        <div class="log-group-value">Mild headache</div>
                                        <div style="font-size: var(--font-sm); color: #7ba68e; font-weight: var(--weight-semibold); margin-top: var(--space-xs);">
                                            Better than yesterday (moderate)
                                        </div>
                                    </div>
                                    <div class="log-group-meta">
                                        <div style="font-size: 20px; color: #e8a87f;">🚩</div>
                                        <div class="log-status improving">●</div>
                                    </div>
                                </div>
                                <div style="margin-top: var(--space-sm); text-align: center;">
                                    <button class="btn-tertiary" style="width: 100%; font-size: var(--font-sm);">View in Weekly Report →</button>
                                </div>
                            </div>

                            <!-- Mood -->
                            <div class="log-group">
                                <div class="log-group-header">
                                    <div class="log-group-icon">😊</div>
                                    <div class="log-group-content">
                                        <div class="log-group-title">Mood & Energy</div>
                                        <div class="log-group-value">Good, 7/10 energy</div>
                                        <div style="font-size: var(--font-sm); color: rgba(255,255,255,0.75); font-weight: var(--weight-semibold); margin-top: var(--space-xs);">
                                            Same as yesterday
                                        </div>
                                    </div>
                                    <div class="log-group-meta">
                                        <div class="log-status stable">●</div>
                                    </div>
                                </div>
                                <div style="margin-top: var(--space-sm); text-align: center;">
                                    <button class="btn-tertiary" style="width: 100%; font-size: var(--font-sm);">View in Weekly Report →</button>
                                </div>
                            </div>

                            <!-- Sleep -->
                            <div class="log-group">
                                <div class="log-group-header">
                                    <div class="log-group-icon">😴</div>
                                    <div class="log-group-content">
                                        <div class="log-group-title">Sleep</div>
                                        <div class="log-group-value">7.5 hrs, Good</div>
                                        <div style="font-size: var(--font-sm); color: #7ba68e; font-weight: var(--weight-semibold); margin-top: var(--space-xs);">
                                            +30 min vs yesterday
                                        </div>
                                    </div>
                                    <div class="log-group-meta">
                                        <div class="log-status stable">●</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Vitals -->
                            <div class="log-group">
                                <div class="log-group-header">
                                    <div class="log-group-icon">❤️</div>
                                    <div class="log-group-content">
                                        <div class="log-group-title">Vitals</div>
                                        <div class="log-group-value">BP 122/78, HR 72</div>
                                        <div style="font-size: var(--font-sm); color: #7ba68e; font-weight: var(--weight-semibold); margin-top: var(--space-xs);">
                                            BP -8 points vs yesterday
                                        </div>
                                    </div>
                                    <div class="log-group-meta">
                                        <div class="log-status stable">●</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Blood Sugar -->
                            <div class="log-group">
                                <div class="log-group-header">
                                    <div class="log-group-icon">🩸</div>
                                    <div class="log-group-content">
                                        <div class="log-group-title">Blood Sugar</div>
                                        <div class="log-group-value">118 mg/dL (Fasting)</div>
                                        <div style="font-size: var(--font-sm); color: #7ba68e; font-weight: var(--weight-semibold); margin-top: var(--space-xs);">
                                            In range, stable
                                        </div>
                                    </div>
                                    <div class="log-group-meta">
                                        <div class="log-status stable">●</div>
                                    </div>
                                </div>
                            </div>

                            <div style="margin-top: var(--space-lg); text-align: center; font-size: var(--font-base); color: white; font-weight: var(--weight-semibold);">
                                Weekly: 6/7 days stable
                            </div>
                        </div>

                        <div class="bottom-nav">
                            <div class="nav-item">
                                <div class="nav-icon">🏠</div>
                                <div class="nav-label">Today</div>
                            </div>
                            <div class="nav-item active">
                                <div class="nav-icon">📝</div>
                                <div class="nav-label">Log</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📅</div>
                                <div class="nav-label">Calendar</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📊</div>
                                <div class="nav-label">Insights</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">🕊️</div>
                                <div class="nav-label">Wellness</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Expanded View with Notes -->
                <div class="screen-wrapper">
                    <div class="screen-label">Expanded - With Notes</div>
                    <div class="phone-frame">
                        <div class="screen-content">
                            <div class="page-header">
                                <div class="page-title">Notes</div>
                                <div class="page-subtitle">Today's journal entry</div>
                            </div>

                            <div style="background: rgba(255, 255, 255, 0.18); border: 2px solid rgba(255, 255, 255, 0.25); border-radius: var(--radius-lg); padding: var(--space-xl); margin-bottom: var(--space-lg);">
                                <div style="font-size: var(--font-base); color: white; line-height: var(--leading-relaxed);">
                                    Felt good after my morning walk. The headache from yesterday is much better. Took meds on time with breakfast. Energy level feels steady.
                                </div>
                                <div style="margin-top: var(--space-lg); font-size: var(--font-sm); color: rgba(255,255,255,0.75);">
                                    8:45 AM
                                </div>
                            </div>

                            <div class="section-header">Add Quick Note</div>

                            <textarea style="width: 100%; background: rgba(255, 255, 255, 0.12); border: 2px solid rgba(255, 255, 255, 0.25); color: white; padding: var(--space-lg); border-radius: var(--radius-md); font-size: var(--font-base); font-family: inherit; resize: vertical; min-height: 120px;" placeholder="How are you feeling?"></textarea>

                            <div style="display: flex; gap: var(--space-sm); margin-top: var(--space-md);">
                                <button class="btn-secondary">Add Flag 🚩</button>
                                <button class="btn-primary">Save Note</button>
                            </div>

                            <div style="background: rgba(255, 255, 255, 0.12); border-radius: var(--radius-md); padding: var(--space-md); margin-top: var(--space-lg);">
                                <div style="font-size: var(--font-sm); color: white; font-weight: var(--weight-bold); margin-bottom: var(--space-xs);">💡 Tip</div>
                                <div style="font-size: var(--font-sm); color: white;">
                                    Flag important symptoms to highlight them in your health report
                                </div>
                            </div>
                        </div>

                        <div class="bottom-nav">
                            <div class="nav-item">
                                <div class="nav-icon">🏠</div>
                                <div class="nav-label">Today</div>
                            </div>
                            <div class="nav-item active">
                                <div class="nav-icon">📝</div>
                                <div class="nav-label">Log</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📅</div>
                                <div class="nav-label">Calendar</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📊</div>
                                <div class="nav-label">Insights</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">🕊️</div>
                                <div class="nav-label">Wellness</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- INPUT FORMS: 5 Quick Log Screens -->
        <div class="journey-section">
            <div class="section-title">2A. INPUT FORMS</div>
            <div class="section-subtitle">5 simple, single-screen forms</div>
            
            <div class="screens-grid">
                <!-- 1. Medication Log -->
                <div class="screen-wrapper">
                    <div class="screen-label">1. Log Medication</div>
                    <div class="phone-frame">
                        <div class="screen-content">
                            <div class="page-header">
                                <div class="page-icon">💊</div>
                                <div class="page-title">Log Medication</div>
                                <div class="page-subtitle">Mark when you took it</div>
                            </div>

                            <!-- Medication Selection Dropdown -->
                            <div class="section-header">Select Medication</div>
                            <select style="width: 100%; background: rgba(255, 255, 255, 0.12); border: 2px solid rgba(255, 255, 255, 0.25); color: white; padding: var(--space-lg); border-radius: var(--radius-md); font-size: var(--font-base); font-family: inherit; margin-bottom: var(--space-lg); cursor: pointer;">
                                <option value="lisinopril" selected style="background: #2d5d5f; color: white;">Lisinopril 10mg - Morning dose</option>
                                <option value="metformin" style="background: #2d5d5f; color: white;">Metformin 500mg - With breakfast</option>
                                <option value="atorvastatin" style="background: #2d5d5f; color: white;">Atorvastatin 20mg - Evening</option>
                                <option value="aspirin" style="background: #2d5d5f; color: white;">Aspirin 81mg - Morning</option>
                                <option value="other" style="background: #2d5d5f; color: white;">+ Add new medication</option>
                            </select>

                            <!-- Pre-filled info -->
                            <div style="background: rgba(255, 255, 255, 0.12); border-radius: var(--radius-md); padding: var(--space-lg); margin-bottom: var(--space-lg);">
                                <div style="font-size: var(--font-lg); font-weight: var(--weight-bold); color: white; margin-bottom: var(--space-xs);">Lisinopril 10mg</div>
                                <div style="font-size: var(--font-base); color: rgba(255,255,255,0.88);">Morning dose</div>
                            </div>

                            <div class="section-header">Status</div>

                            <div style="display: grid; gap: var(--space-sm); margin-bottom: var(--space-lg);">
                                <div style="background: var(--color-accent); border: 2px solid rgba(255,255,255,0.4); border-radius: var(--radius-md); padding: var(--space-lg); display: flex; align-items: center; gap: var(--space-md);">
                                    <div style="width: 20px; height: 20px; border-radius: 50%; background: white;"></div>
                                    <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-semibold);">Taken on time</div>
                                </div>
                                <div style="background: rgba(255, 255, 255, 0.12); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-md); padding: var(--space-lg); display: flex; align-items: center; gap: var(--space-md);">
                                    <div style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.5);"></div>
                                    <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-semibold);">Taken late</div>
                                </div>
                                <div style="background: rgba(255, 255, 255, 0.12); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-md); padding: var(--space-lg); display: flex; align-items: center; gap: var(--space-md);">
                                    <div style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.5);"></div>
                                    <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-semibold);">Skipped</div>
                                </div>
                                <div style="background: rgba(255, 255, 255, 0.12); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-md); padding: var(--space-lg); display: flex; align-items: center; gap: var(--space-md);">
                                    <div style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.5);"></div>
                                    <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-semibold);">Missed</div>
                                </div>
                            </div>

                            <div class="section-header">Optional Note</div>
                            <textarea style="width: 100%; background: rgba(255, 255, 255, 0.12); border: 2px solid rgba(255, 255, 255, 0.25); color: white; padding: var(--space-lg); border-radius: var(--radius-md); font-size: var(--font-base); font-family: inherit; resize: vertical; min-height: 80px; margin-bottom: var(--space-xl);" placeholder="Any side effects or notes?"></textarea>

                            <button class="btn-primary">Save Log</button>
                        </div>

                        <div class="bottom-nav">
                            <div class="nav-item">
                                <div class="nav-icon">🏠</div>
                                <div class="nav-label">Today</div>
                            </div>
                            <div class="nav-item active">
                                <div class="nav-icon">📝</div>
                                <div class="nav-label">Log</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📅</div>
                                <div class="nav-label">Calendar</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📊</div>
                                <div class="nav-label">Insights</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">🕊️</div>
                                <div class="nav-label">Wellness</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 2. Mood Log -->
                <div class="screen-wrapper">
                    <div class="screen-label">2. Log Mood</div>
                    <div class="phone-frame">
                        <div class="screen-content">
                            <div class="page-header">
                                <div class="page-icon">😊</div>
                                <div class="page-title">How's this moment landing for you?</div>
                                <div class="page-subtitle">Just a quick check-in. No pressure.</div>
                            </div>

                            <!-- Mood Selection - Single Row -->
                            <div style="background: rgba(255, 255, 255, 0.12); border-radius: var(--radius-lg); padding: var(--space-xl) var(--space-md); margin-bottom: var(--space-xl);">
                                <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-bold); margin-bottom: var(--space-lg); text-align: center;">How's your mood?</div>
                                <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: var(--space-sm);">
                                    <button style="background: rgba(255, 255, 255, 0.12); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-md); padding: var(--space-lg) var(--space-xs); text-align: center; cursor: pointer; transition: all 0.2s;">
                                        <div style="font-size: 36px;">☹️</div>
                                    </button>
                                    <button style="background: rgba(255, 255, 255, 0.12); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-md); padding: var(--space-lg) var(--space-xs); text-align: center; cursor: pointer; transition: all 0.2s;">
                                        <div style="font-size: 36px;">😐</div>
                                    </button>
                                    <button style="background: var(--color-accent); border: 2px solid rgba(255,255,255,0.4); border-radius: var(--radius-md); padding: var(--space-lg) var(--space-xs); text-align: center; cursor: pointer; transition: all 0.2s;">
                                        <div style="font-size: 36px;">🙂</div>
                                    </button>
                                    <button style="background: rgba(255, 255, 255, 0.12); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-md); padding: var(--space-lg) var(--space-xs); text-align: center; cursor: pointer; transition: all 0.2s;">
                                        <div style="font-size: 36px;">😊</div>
                                    </button>
                                    <button style="background: rgba(255, 255, 255, 0.12); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-md); padding: var(--space-lg) var(--space-xs); text-align: center; cursor: pointer; transition: all 0.2s;">
                                        <div style="font-size: 36px;">😄</div>
                                    </button>
                                </div>
                            </div>

                            <!-- Energy Level with Labels -->
                            <div style="background: rgba(255, 255, 255, 0.12); border-radius: var(--radius-lg); padding: var(--space-xl); margin-bottom: var(--space-xl);">
                                <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-bold); margin-bottom: var(--space-md);">✨ How did today feel for you?</div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-sm); font-size: var(--font-sm); color: rgba(255,255,255,0.75);">
                                    <span>Tough</span>
                                    <span>A lot</span>
                                    <span>Manageable</span>
                                    <span>Quite smooth</span>
                                </div>
                                <input type="range" min="1" max="10" value="7" style="width: 100%; height: 12px; border-radius: 6px; background: linear-gradient(to right, #e8a87f 0%, #e8a87f 70%, rgba(255,255,255,0.25) 70%); cursor: pointer; -webkit-appearance: none; appearance: none;">
                                <div style="text-align: center; margin-top: var(--space-md);">
                                    <span style="font-size: var(--font-2xl); color: white; font-weight: var(--weight-bold);">7</span>
                                    <span style="font-size: var(--font-sm); color: rgba(255,255,255,0.75); margin-left: var(--space-xs);"> — Manageable</span>
                                </div>
                            </div>

                            <!-- Optional Reflection -->
                            <div style="background: rgba(255, 255, 255, 0.12); border-radius: var(--radius-lg); padding: var(--space-xl); margin-bottom: var(--space-xl);">
                                <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-bold); margin-bottom: var(--space-md);">✍️ One sentence from today</div>
                                <textarea style="width: 100%; background: rgba(255, 255, 255, 0.08); border: 2px solid rgba(255, 255, 255, 0.15); color: white; padding: var(--space-lg); border-radius: var(--radius-md); font-size: var(--font-base); font-family: inherit; resize: vertical; min-height: 80px;" placeholder="Something you noticed, felt, or learned..."></textarea>
                            </div>

                            <button class="btn-primary">Save reflection</button>
                        </div>

                        <div class="bottom-nav">
                            <div class="nav-item">
                                <div class="nav-icon">🏠</div>
                                <div class="nav-label">Today</div>
                            </div>
                            <div class="nav-item active">
                                <div class="nav-icon">📝</div>
                                <div class="nav-label">Log</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📅</div>
                                <div class="nav-label">Calendar</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📊</div>
                                <div class="nav-label">Insights</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">🕊️</div>
                                <div class="nav-label">Wellness</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 3. Symptom Log -->
                <div class="screen-wrapper">
                    <div class="screen-label">3. Log Symptom</div>
                    <div class="phone-frame">
                        <div class="screen-content">
                            <div class="page-header">
                                <div class="page-icon">🤒</div>
                                <div class="page-title">Log Symptom</div>
                                <div class="page-subtitle">Select one or more symptoms you're experiencing</div>
                            </div>

                            <!-- Multi-Select Symptoms with Emojis -->
                            <div style="background: rgba(255, 255, 255, 0.12); border-radius: var(--radius-lg); padding: var(--space-lg); margin-bottom: var(--space-lg);">
                                <div style="font-size: var(--font-base); color: white; font-weight: var(--weight-bold); margin-bottom: var(--space-md);">What are you experiencing? (select all that apply)</div>
                                
                                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-sm); margin-bottom: var(--space-md);">
                                    <button style="background: rgba(232, 168, 127, 0.3); border: 2px solid #e8a87f; border-radius: var(--radius-md); padding: var(--space-md); display: flex; align-items: center; gap: var(--space-sm); cursor: pointer; position: relative;">
                                        <div style="font-size: 24px;">🔥</div>
                                        <div style="font-size: var(--font-base); color: white; font-weight: var(--weight-semibold);">Pain</div>
                                        <div style="position: absolute; top: 8px; right: 8px; width: 20px; height: 20px; border-radius: 50%; background: #e8a87f; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 14px;">✓</div>
                                    </button>
                                    <button style="background: rgba(255, 255, 255, 0.08); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-md); padding: var(--space-md); display: flex; align-items: center; gap: var(--space-sm); cursor: pointer;">
                                        <div style="font-size: 24px;">🤢</div>
                                        <div style="font-size: var(--font-base); color: white; font-weight: var(--weight-semibold);">Nausea</div>
                                    </button>
                                    <button style="background: rgba(255, 255, 255, 0.08); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-md); padding: var(--space-md); display: flex; align-items: center; gap: var(--space-sm); cursor: pointer;">
                                        <div style="font-size: 24px;">😵</div>
                                        <div style="font-size: var(--font-base); color: white; font-weight: var(--weight-semibold);">Dizziness</div>
                                    </button>
                                    <button style="background: rgba(255, 255, 255, 0.08); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-md); padding: var(--space-md); display: flex; alignments: center; gap: var(--space-sm); cursor: pointer;">
                                        <div style="font-size: 24px;">🤕</div>
                                        <div style="font-size: var(--font-base); color: white; font-weight: var(--weight-semibold);">Headache</div>
                                    </button>
                                    <button style="background: rgba(232, 168, 127, 0.3); border: 2px solid #e8a87f; border-radius: var(--radius-md); padding: var(--space-md); display: flex; align-items: center; gap: var(--space-sm); cursor: pointer; position: relative;">
                                        <div style="font-size: 24px;">🥱</div>
                                        <div style="font-size: var(--font-base); color: white; font-weight: var(--weight-semibold);">Fatigue</div>
                                        <div style="position: absolute; top: 8px; right: 8px; width: 20px; height: 20px; border-radius: 50%; background: #e8a87f; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 14px;">✓</div>
                                    </button>
                                    <button style="background: rgba(255, 255, 255, 0.08); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-md); padding: var(--space-md); display: flex; align-items: center; gap: var(--space-sm); cursor: pointer;">
                                        <div style="font-size: 24px;">😰</div>
                                        <div style="font-size: var(--font-base); color: white; font-weight: var(--weight-semibold);">Anxiety</div>
                                    </button>
                                    <button style="background: rgba(255, 255, 255, 0.08); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-md); padding: var(--space-md); display: flex; align-items: center; gap: var(--space-sm); cursor: pointer;">
                                        <div style="font-size: 24px;">💨</div>
                                        <div style="font-size: var(--font-base); color: white; font-weight: var(--weight-semibold);">Shortness</div>
                                    </button>
                                    <button style="background: rgba(255, 255, 255, 0.08); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-md); padding: var(--space-md); display: flex; align-items: center; gap: var(--space-sm); cursor: pointer;">
                                        <div style="font-size: 24px;">📝</div>
                                        <div style="font-size: var(--font-base); color: white; font-weight: var(--weight-semibold);">Other</div>
                                    </button>
                                </div>
                                
                                <div style="text-align: center; font-size: var(--font-sm); color: #7ba68e; font-weight: var(--weight-semibold);">
                                    ✓ 2 symptoms selected
                                </div>
                            </div>

                            <!-- Pain Scale -->
                            <div style="background: rgba(255, 255, 255, 0.12); border-radius: var(--radius-lg); padding: var(--space-xl); margin-bottom: var(--space-lg);">
                                <div style="display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-lg);">
                                    <div style="font-size: 24px;">😟</div>
                                    <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-bold);">Pain 0-10</div>
                                    <div style="margin-left: auto; font-size: var(--font-3xl); color: #e8a87f; font-weight: var(--weight-bold);">5</div>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-sm); font-size: var(--font-sm); color: rgba(255,255,255,0.75);">
                                    <span>No pain</span>
                                    <span style="color: #e8a87f; font-weight: var(--weight-semibold);">Interfering</span>
                                    <span>Unbearable</span>
                                </div>
                                <input type="range" min="0" max="10" value="5" style="width: 100%; height: 12px; border-radius: 6px; background: linear-gradient(to right, #e8a87f 0%, #e8a87f 50%, rgba(255,255,255,0.25) 50%); cursor: pointer;">
                            </div>

                            <div style="background: rgba(232, 168, 127, 0.25); border: 2px solid #e8a87f; border-radius: var(--radius-md); padding: var(--space-lg); display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-xl);">
                                <input type="checkbox" style="width: 24px; height: 24px;">
                                <div>
                                    <div style="font-size: var(--font-base); color: white; font-weight: var(--weight-bold);">🚩 Flag for my provider</div>
                                    <div style="font-size: var(--font-sm); color: white; margin-top: var(--space-xs);">Shows in all reports</div>
                                </div>
                            </div>

                            <button class="btn-primary">Save Log</button>
                        </div>

                        <div class="bottom-nav">
                            <div class="nav-item">
                                <div class="nav-icon">🏠</div>
                                <div class="nav-label">Today</div>
                            </div>
                            <div class="nav-item active">
                                <div class="nav-icon">📝</div>
                                <div class="nav-label">Log</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📅</div>
                                <div class="nav-label">Calendar</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📊</div>
                                <div class="nav-label">Insights</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">🕊️</div>
                                <div class="nav-label">Wellness</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 4. Vitals Log -->
                <div class="screen-wrapper">
                    <div class="screen-label">4. Log Vitals</div>
                    <div class="phone-frame">
                        <div class="screen-content">
                            <div class="page-header">
                                <div class="page-icon">❤️</div>
                                <div class="page-title">Log Vitals</div>
                                <div class="page-subtitle">BP, heart rate, temperature</div>
                            </div>

                            <div class="section-header">Blood Pressure</div>

                            <div style="display: flex; gap: var(--space-md); align-items: center; margin-bottom: var(--space-xl);">
                                <input type="number" placeholder="120" style="flex: 1; background: rgba(255, 255, 255, 0.12); border: 2px solid rgba(255, 255, 255, 0.25); color: white; padding: var(--space-lg); border-radius: var(--radius-md); font-size: var(--font-xl); text-align: center;">
                                <div style="font-size: var(--font-2xl); color: white; font-weight: var(--weight-bold);">/</div>
                                <input type="number" placeholder="80" style="flex: 1; background: rgba(255, 255, 255, 0.12); border: 2px solid rgba(255, 255, 255, 0.25); color: white; padding: var(--space-lg); border-radius: var(--radius-md); font-size: var(--font-xl); text-align: center;">
                            </div>

                            <div style="text-align: center; font-size: var(--font-sm); color: rgba(255,255,255,0.75); margin-bottom: var(--space-xl);">Systolic / Diastolic</div>

                            <div class="section-header">Heart Rate</div>

                            <div style="display: flex; gap: var(--space-md); align-items: center; margin-bottom: var(--space-xl);">
                                <input type="number" placeholder="72" style="flex: 1; background: rgba(255, 255, 255, 0.12); border: 2px solid rgba(255, 255, 255, 0.25); color: white; padding: var(--space-lg); border-radius: var(--radius-md); font-size: var(--font-xl); text-align: center;">
                                <div style="font-size: var(--font-lg); color: rgba(255,255,255,0.88);">bpm</div>
                            </div>

                            <div class="section-header">Temperature (Optional)</div>

                            <div style="display: flex; gap: var(--space-md); align-items: center; margin-bottom: var(--space-xl);">
                                <input type="number" placeholder="98.6" step="0.1" style="flex: 1; background: rgba(255, 255, 255, 0.12); border: 2px solid rgba(255, 255, 255, 0.25); color: white; padding: var(--space-lg); border-radius: var(--radius-md); font-size: var(--font-xl); text-align: center;">
                                <div style="font-size: var(--font-lg); color: rgba(255,255,255,0.88);">°F</div>
                            </div>

                            <button class="btn-primary">Save Log</button>
                        </div>

                        <div class="bottom-nav">
                            <div class="nav-item">
                                <div class="nav-icon">🏠</div>
                                <div class="nav-label">Today</div>
                            </div>
                            <div class="nav-item active">
                                <div class="nav-icon">📝</div>
                                <div class="nav-label">Log</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📅</div>
                                <div class="nav-label">Calendar</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📊</div>
                                <div class="nav-label">Insights</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">🕊️</div>
                                <div class="nav-label">Wellness</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 5. Blood Sugar Log -->
                <div class="screen-wrapper">
                    <div class="screen-label">5. Log Blood Sugar</div>
                    <div class="phone-frame">
                        <div class="screen-content">
                            <div class="page-header">
                                <div class="page-icon">🩸</div>
                                <div class="page-title">Log Blood Sugar</div>
                                <div class="page-subtitle">Track your glucose levels</div>
                            </div>

                            <div class="section-header">Measurement Method</div>

                            <div style="display: grid; gap: var(--space-sm); margin-bottom: var(--space-xl);">
                                <div style="background: var(--color-accent); border: 2px solid rgba(255,255,255,0.4); border-radius: var(--radius-md); padding: var(--space-lg); display: flex; align-items: center; gap: var(--space-md);">
                                    <div style="width: 20px; height: 20px; border-radius: 50%; background: white;"></div>
                                    <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-semibold);">Glucose Stick</div>
                                </div>
                                <div style="background: rgba(255, 255, 255, 0.12); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-md); padding: var(--space-lg); display: flex; align-items: center; gap: var(--space-md);">
                                    <div style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.5);"></div>
                                    <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-semibold);">CGM (Monitor)</div>
                                </div>
                            </div>

                            <div class="section-header">Reading</div>

                            <div style="display: flex; gap: var(--space-md); align-items: center; margin-bottom: var(--space-xl);">
                                <input type="number" placeholder="118" style="flex: 1; background: rgba(255, 255, 255, 0.12); border: 2px solid rgba(255, 255, 255, 0.25); color: white; padding: var(--space-lg); border-radius: var(--radius-md); font-size: var(--font-xl); text-align: center;">
                                <div style="font-size: var(--font-lg); color: rgba(255,255,255,0.88);">mg/dL</div>
                            </div>

                            <div class="section-header">Timing (Optional)</div>

                            <select style="width: 100%; background: rgba(255, 255, 255, 0.12); border: 2px solid rgba(255, 255, 255, 0.25); color: white; padding: var(--space-lg); border-radius: var(--radius-md); font-size: var(--font-lg); margin-bottom: var(--space-xl);">
                                <option>Fasting</option>
                                <option>Before meal</option>
                                <option>After meal</option>
                                <option>Bedtime</option>
                                <option>Random</option>
                            </select>

                            <button class="btn-primary">Save Log</button>

                            <div style="background: rgba(123, 166, 142, 0.25); border: 2px solid #7ba68e; border-radius: var(--radius-md); padding: var(--space-md); margin-top: var(--space-md);">
                                <div style="font-size: var(--font-sm); color: white; font-weight: var(--weight-bold); margin-bottom: var(--space-xs);">✓ In Range</div>
                                <div style="font-size: var(--font-sm); color: white;">Your reading is within target range</div>
                            </div>
                        </div>

                        <div class="bottom-nav">
                            <div class="nav-item">
                                <div class="nav-icon">🏠</div>
                                <div class="nav-label">Today</div>
                            </div>
                            <div class="nav-item active">
                                <div class="nav-icon">📝</div>
                                <div class="nav-label">Log</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📅</div>
                                <div class="nav-label">Calendar</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📊</div>
                                <div class="nav-label">Insights</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">🕊️</div>
                                <div class="nav-label">Wellness</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- CALENDAR: Appointments + Routines -->
        <div class="journey-section">
            <div class="section-title">3. CALENDAR</div>
            <div class="section-subtitle">Med reminders + appointment prep</div>
            
            <div class="screens-grid">
                <div class="screen-wrapper">
                    <div class="screen-label">Calendar with Med Reminders</div>
                    <div class="phone-frame">
                        <div class="screen-content">
                            <!-- Calendar Header Copy -->
                            <div class="calendar-intro">
                                Colors reflect your rhythm each day so you can spot patterns early.
                            </div>

                            <div class="calendar-card">
                                <!-- Month Header -->
                                <div class="calendar-month-header">
                                    <button class="calendar-nav-btn">‹</button>
                                    <div class="calendar-month-title">November</div>
                                    <button class="calendar-nav-btn">›</button>
                                </div>

                                <!-- Tabs -->
                                <div class="calendar-tabs">
                                    <button class="calendar-tab active">Month</button>
                                    <button class="calendar-tab">Meds</button>
                                    <button class="calendar-tab">Balance</button>
                                </div>

                                <!-- Weekday labels -->
                                <div class="calendar-weekdays">
                                    <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                                </div>

                                <!-- Days grid with dots -->
                                <div class="calendar-grid">
                                    <!-- Week starts Friday Nov 1 - empty days -->
                                    <button class="calendar-day"></button>
                                    <button class="calendar-day"></button>
                                    <button class="calendar-day"></button>
                                    <button class="calendar-day"></button>
                                    <button class="calendar-day"></button>
                                    
                                    <button class="calendar-day has-data">
                                        <span class="calendar-day-number">1</span>
                                        <span class="calendar-dot"></span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">2</span>
                                    </button>

                                    <!-- Week of Nov 3-9 -->
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">3</span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">4</span>
                                    </button>
                                    <button class="calendar-day has-data is-warning">
                                        <span class="calendar-day-number">5</span>
                                        <span class="calendar-dot"></span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">6</span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">7</span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">8</span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">9</span>
                                    </button>

                                    <!-- Week of Nov 10-16 -->
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">10</span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">11</span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">12</span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">13</span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">14</span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">15</span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">16</span>
                                    </button>

                                    <!-- Week of Nov 17-23 (includes today) -->
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">17</span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">18</span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">19</span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">20</span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">21</span>
                                    </button>
                                    <button class="calendar-day has-data is-selected">
                                        <span class="calendar-day-number">22</span>
                                        <span class="calendar-dot"></span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">23</span>
                                    </button>

                                    <!-- Week of Nov 24-30 -->
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">24</span>
                                    </button>
                                    <button class="calendar-day has-data">
                                        <span class="calendar-day-number">25</span>
                                        <span class="calendar-dot"></span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">26</span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">27</span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">28</span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">29</span>
                                    </button>
                                    <button class="calendar-day">
                                        <span class="calendar-day-number">30</span>
                                    </button>
                                </div>
                            </div>

                            <p class="calendar-caption">
                                Tap a day to see meds, symptoms, and notes for that date.
                            </p>

                            <!-- Calendar Legend (max 3 items) -->
                            <div style="display: flex; gap: var(--space-lg); justify-content: center; font-size: var(--font-sm); color: rgba(255,255,255,0.9); margin-bottom: var(--space-lg);">
                                <div style="display: flex; align-items: center; gap: 6px;">
                                    <div style="width: 8px; height: 8px; border-radius: 50%; background: #7ba68e;"></div>
                                    <span>Steady day</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 6px;">
                                    <div style="width: 8px; height: 8px; border-radius: 50%; background: #e8a87f;"></div>
                                    <span>Keep an eye on</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 6px;">
                                    <div style="width: 8px; height: 8px; border-radius: 50%; background: #e07a7a;"></div>
                                    <span>Flag for provider</span>
                                </div>
                            </div>

                            <div class="section-header">Today's Reminders</div>

                            <div class="card-list" style="background: rgba(95, 163, 166, 0.3); border: 2px solid #5fa3a6;">
                                <div class="card-list-icon">💊</div>
                                <div class="card-list-content">
                                    <div class="card-list-title">Lisinopril 10mg</div>
                                    <div class="card-list-subtitle">Due now • Morning dose</div>
                                </div>
                                <button class="btn-primary" style="width: auto; padding: var(--space-md) var(--space-lg);">Take</button>
                            </div>

                            <div class="section-header">Upcoming</div>

                            <div class="card-list" style="background: rgba(123, 166, 142, 0.25); border: 2px solid #7ba68e;">
                                <div class="card-list-icon">🏥</div>
                                <div class="card-list-content">
                                    <div class="card-list-title">Dr. Chen - Cardiology</div>
                                    <div class="card-list-subtitle">Monday, Nov 25 • 2:00 PM</div>
                                </div>
                                <div style="font-size: 24px;">→</div>
                            </div>
                        </div>

                        <div class="bottom-nav">
                            <div class="nav-item">
                                <div class="nav-icon">🏠</div>
                                <div class="nav-label">Today</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📝</div>
                                <div class="nav-label">Log</div>
                            </div>
                            <div class="nav-item active">
                                <div class="nav-icon">📅</div>
                                <div class="nav-label">Calendar</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📊</div>
                                <div class="nav-label">Insights</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">🕊️</div>
                                <div class="nav-label">Wellness</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Appointment Prep Modal -->
                <div class="screen-wrapper">
                    <div class="screen-label">Appointment Prep</div>
                    <div class="phone-frame">
                        <div class="screen-content">
                            <div class="page-header">
                                <div class="page-icon">🏥</div>
                                <div class="page-title">Dr. Chen - Cardiology</div>
                                <div class="page-subtitle">Monday, Nov 25 at 2:00 PM</div>
                            </div>

                            <div style="background: rgba(255, 255, 255, 0.18); border: 2px solid rgba(255, 255, 255, 0.3); border-radius: var(--radius-lg); padding: var(--space-lg); margin-bottom: var(--space-lg);">
                                <div style="font-size: var(--font-base); color: white; font-weight: var(--weight-bold); margin-bottom: var(--space-md);">📍 Location</div>
                                <div style="font-size: var(--font-base); color: white;">
                                    Heart & Vascular Center<br>
                                    1234 Medical Plaza, Suite 200
                                </div>
                            </div>

                            <div class="section-header">Bring With You</div>

                            <div style="background: rgba(255, 255, 255, 0.18); border-radius: var(--radius-md); padding: var(--space-md); margin-bottom: var(--space-sm); display: flex; align-items: center; gap: var(--space-md);">
                                <div style="font-size: 24px;">✓</div>
                                <div style="font-size: var(--font-base); color: white;">Insurance card</div>
                            </div>

                            <div style="background: rgba(255, 255, 255, 0.18); border-radius: var(--radius-md); padding: var(--space-md); margin-bottom: var(--space-sm); display: flex; align-items: center; gap: var(--space-md);">
                                <div style="font-size: 24px;">✓</div>
                                <div style="font-size: var(--font-base); color: white;">Current medication list</div>
                            </div>

                            <div style="background: rgba(255, 255, 255, 0.18); border-radius: var(--radius-md); padding: var(--space-md); margin-bottom: var(--space-lg); display: flex; align-items: center; gap: var(--space-md);">
                                <div style="font-size: 24px;">✓</div>
                                <div style="font-size: var(--font-base); color: white;">Recent blood pressure log</div>
                            </div>

                            <div class="section-header">Questions to Ask</div>

                            <textarea style="width: 100%; background: rgba(255, 255, 255, 0.12); border: 2px solid rgba(255, 255, 255, 0.25); color: white; padding: var(--space-lg); border-radius: var(--radius-md); font-size: var(--font-base); font-family: inherit; resize: vertical; min-height: 100px; margin-bottom: var(--space-lg);" placeholder="Add questions for your doctor...">Should we adjust my BP medication?
Any concerns about my recent symptoms?</textarea>

                            <button class="btn-primary">
                                Generate Health Report
                            </button>
                        </div>

                        <div class="bottom-nav">
                            <div class="nav-item">
                                <div class="nav-icon">🏠</div>
                                <div class="nav-label">Today</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📝</div>
                                <div class="nav-label">Log</div>
                            </div>
                            <div class="nav-item active">
                                <div class="nav-icon">📅</div>
                                <div class="nav-label">Calendar</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📊</div>
                                <div class="nav-label">Insights</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">🕊️</div>
                                <div class="nav-label">Wellness</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- INSIGHTS: Trends, Patterns, Reports -->
        <div class="journey-section">
            <div class="section-title">4. INSIGHTS & REPORTS (B1/B2/B3)</div>
            <div class="section-subtitle">Three report types with tabbed navigation</div>
            
            <div class="screens-grid">
                <!-- B1: Daily Snapshot -->
                <div class="screen-wrapper">
                    <div class="screen-label">B1 - Daily Snapshot</div>
                    <div class="phone-frame evening">
                        <div class="screen-content">
                            <div class="page-header">
                                <div class="page-title">Health Reports</div>
                                <div class="page-subtitle">Ready to share</div>
                            </div>

                            <!-- Segmented Control -->
                            <div style="display: flex; gap: var(--space-sm); background: rgba(255, 255, 255, 0.12); border-radius: var(--radius-md); padding: var(--space-xs); margin-bottom: var(--space-xl);">
                                <div style="flex: 1; background: var(--color-accent); border-radius: var(--radius-sm); padding: var(--space-md); text-align: center; color: white; font-weight: var(--weight-bold); font-size: var(--font-base);">Daily</div>
                                <div style="flex: 1; padding: var(--space-md); text-align: center; color: rgba(255,255,255,0.75); font-weight: var(--weight-semibold); font-size: var(--font-base);">Weekly</div>
                                <div style="flex: 1; padding: var(--space-md); text-align: center; color: rgba(255,255,255,0.75); font-weight: var(--weight-semibold); font-size: var(--font-base);">Monthly</div>
                            </div>

                            <div class="section-header">Today's Snapshot</div>

                            <!-- Snapshot Card -->
                            <div style="background: rgba(255, 255, 255, 0.18); border: 2px solid rgba(255, 255, 255, 0.25); border-radius: var(--radius-lg); padding: var(--space-xl); margin-bottom: var(--space-lg);">
                                <div style="display: flex; align-items: center; gap: var(--space-lg); margin-bottom: var(--space-lg);">
                                    <div class="stability-orb" style="--orb-progress: 270deg; width: 100px; height: 100px; margin: 0;">
                                        <div style="font-size: 32px; font-weight: var(--weight-bold); color: white;">85</div>
                                        <div style="font-size: var(--font-xs); color: white; margin-top: var(--space-xs);">Score</div>
                                    </div>
                                    <div style="flex: 1;">
                                        <div style="font-size: var(--font-base); color: white; margin-bottom: var(--space-sm);">💊 Meds: 2/3</div>
                                        <div style="font-size: var(--font-base); color: white; margin-bottom: var(--space-sm);">😊 Mood: Good</div>
                                        <div style="font-size: var(--font-base); color: white;">😴 Sleep: 7.5h</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Physician Box -->
                            <div style="background: rgba(123, 166, 142, 0.25); border: 2px solid #7ba68e; border-radius: var(--radius-md); padding: var(--space-lg); margin-bottom: var(--space-lg);">
                                <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-bold); margin-bottom: var(--space-md);">For Your Clinician</div>
                                <div style="font-size: var(--font-base); color: white; line-height: var(--leading-relaxed);">
                                    ✓ Stable compared to yesterday<br>
                                    ✓ Headache improved from moderate to mild<br>
                                    ✓ BP in target range (122/78)
                                </div>
                            </div>

                            <div style="display: flex; gap: var(--space-md);">
                                <button class="btn-secondary" style="flex: 1;">Preview</button>
                                <button class="btn-primary" style="flex: 1;">Share</button>
                            </div>
                        </div>

                        <div class="bottom-nav">
                            <div class="nav-item">
                                <div class="nav-icon">🏠</div>
                                <div class="nav-label">Today</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📝</div>
                                <div class="nav-label">Log</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📅</div>
                                <div class="nav-label">Calendar</div>
                            </div>
                            <div class="nav-item active">
                                <div class="nav-icon">📊</div>
                                <div class="nav-label">Insights</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">🕊️</div>
                                <div class="nav-label">Wellness</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- B2: Weekly Pattern -->
                <div class="screen-wrapper">
                    <div class="screen-label">B2 - Weekly Pattern</div>
                    <div class="phone-frame evening">
                        <div class="screen-content">
                            <div class="page-header">
                                <div class="page-title">Health Reports</div>
                                <div class="page-subtitle">Ready to share</div>
                            </div>

                            <!-- Segmented Control -->
                            <div style="display: flex; gap: var(--space-sm); background: rgba(255, 255, 255, 0.12); border-radius: var(--radius-md); padding: var(--space-xs); margin-bottom: var(--space-xl);">
                                <div style="flex: 1; padding: var(--space-md); text-align: center; color: rgba(255,255,255,0.75); font-weight: var(--weight-semibold); font-size: var(--font-base);">Daily</div>
                                <div style="flex: 1; background: var(--color-accent); border-radius: var(--radius-sm); padding: var(--space-md); text-align: center; color: white; font-weight: var(--weight-bold); font-size: var(--font-base);">Weekly</div>
                                <div style="flex: 1; padding: var(--space-md); text-align: center; color: rgba(255,255,255,0.75); font-weight: var(--weight-semibold); font-size: var(--font-base);">Monthly</div>
                            </div>

                            <!-- Hero Card -->
                            <div style="background: white; border-radius: var(--radius-lg); padding: var(--space-xl); margin-bottom: var(--space-lg);">
                                <div style="font-size: var(--font-xl); font-weight: var(--weight-bold); color: #1a3e40; margin-bottom: var(--space-sm);">Weekly Health Summary</div>
                                <div style="font-size: var(--font-base); color: #666; margin-bottom: var(--space-lg);">Nov 15-22, 2024</div>
                                <div style="display: flex; justify-content: space-around;">
                                    <div style="text-align: center;">
                                        <div style="font-size: 28px; font-weight: var(--weight-bold); color: #7ba68e;">92%</div>
                                        <div style="font-size: var(--font-sm); color: #666;">Meds</div>
                                    </div>
                                    <div style="text-align: center;">
                                        <div style="font-size: 28px; font-weight: var(--weight-bold); color: #5fa3a6;">Good</div>
                                        <div style="font-size: var(--font-sm); color: #666;">Mood</div>
                                    </div>
                                    <div style="text-align: center;">
                                        <div style="font-size: 28px; font-weight: var(--weight-bold); color: #7ba68e;">7.2h</div>
                                        <div style="font-size: var(--font-sm); color: #666;">Sleep</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Trend Lines -->
                            <div style="background: rgba(255, 255, 255, 0.18); border: 2px solid rgba(255, 255, 255, 0.25); border-radius: var(--radius-md); padding: var(--space-lg); margin-bottom: var(--space-md);">
                                <div style="font-size: var(--font-base); color: white; font-weight: var(--weight-bold); margin-bottom: var(--space-sm);">💊 Medications</div>
                                <div style="font-size: var(--font-base); color: white; margin-bottom: var(--space-xs);">6/7 days (86%)</div>
                                <div style="background: rgba(123, 166, 142, 0.3); height: 8px; border-radius: 4px; overflow: hidden; margin-bottom: var(--space-sm);">
                                    <div style="background: #7ba68e; width: 86%; height: 100%;"></div>
                                </div>
                                <div style="font-size: var(--font-sm); color: #7ba68e; font-weight: var(--weight-semibold);">+10% vs last week</div>
                            </div>

                            <div style="background: rgba(255, 255, 255, 0.18); border: 2px solid rgba(255, 255, 255, 0.25); border-radius: var(--radius-md); padding: var(--space-lg); margin-bottom: var(--space-md);">
                                <div style="font-size: var(--font-base); color: white; font-weight: var(--weight-bold); margin-bottom: var(--space-sm);">😊 Mood & Symptoms</div>
                                <div style="font-size: var(--font-base); color: white;">Mostly good; 2 days with fatigue</div>
                            </div>

                            <!-- Physician Box -->
                            <div style="background: rgba(123, 166, 142, 0.25); border: 2px solid #7ba68e; border-radius: var(--radius-md); padding: var(--space-lg); margin-bottom: var(--space-lg);">
                                <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-bold); margin-bottom: var(--space-md);">For Your Clinician</div>
                                <div style="font-size: var(--font-base); color: white; line-height: var(--leading-relaxed);">
                                    • No major instability<br>
                                    • Headache decreasing<br>
                                    • Monitor evening fatigue
                                </div>
                            </div>

                            <div style="display: flex; gap: var(--space-md);">
                                <button class="btn-secondary" style="flex: 1;">Preview</button>
                                <button class="btn-primary" style="flex: 1;">Share</button>
                            </div>
                        </div>

                        <div class="bottom-nav">
                            <div class="nav-item">
                                <div class="nav-icon">🏠</div>
                                <div class="nav-label">Today</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📝</div>
                                <div class="nav-label">Log</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📅</div>
                                <div class="nav-label">Calendar</div>
                            </div>
                            <div class="nav-item active">
                                <div class="nav-icon">📊</div>
                                <div class="nav-label">Insights</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">🕊️</div>
                                <div class="nav-label">Wellness</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- B3: Monthly Stability -->
                <div class="screen-wrapper">
                    <div class="screen-label">B3 - Monthly Stability</div>
                    <div class="phone-frame evening">
                        <div class="screen-content">
                            <div class="page-header">
                                <div class="page-title">Health Reports</div>
                                <div class="page-subtitle">Ready to share</div>
                            </div>

                            <!-- Segmented Control -->
                            <div style="display: flex; gap: var(--space-sm); background: rgba(255, 255, 255, 0.12); border-radius: var(--radius-md); padding: var(--space-xs); margin-bottom: var(--space-xl);">
                                <div style="flex: 1; padding: var(--space-md); text-align: center; color: rgba(255,255,255,0.75); font-weight: var(--weight-semibold); font-size: var(--font-base);">Daily</div>
                                <div style="flex: 1; padding: var(--space-md); text-align: center; color: rgba(255,255,255,0.75); font-weight: var(--weight-semibold); font-size: var(--font-base);">Weekly</div>
                                <div style="flex: 1; background: var(--color-accent); border-radius: var(--radius-sm); padding: var(--space-md); text-align: center; color: white; font-weight: var(--weight-bold); font-size: var(--font-base);">Monthly</div>
                            </div>

                            <div class="section-header">November 2024</div>

                            <!-- Summary Card -->
                            <div style="background: rgba(255, 255, 255, 0.18); border: 2px solid rgba(255, 255, 255, 0.25); border-radius: var(--radius-lg); padding: var(--space-xl); margin-bottom: var(--space-lg); text-align: center;">
                                <div style="font-size: var(--font-3xl); font-weight: var(--weight-bold); color: white; margin-bottom: var(--space-sm);">82</div>
                                <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-semibold); margin-bottom: var(--space-lg);">Mostly Stable</div>
                                
                                <div style="display: flex; justify-content: space-around; gap: var(--space-md);">
                                    <div>
                                        <div style="font-size: 24px; font-weight: var(--weight-bold); color: white;">90%</div>
                                        <div style="font-size: var(--font-sm); color: white;">Meds</div>
                                    </div>
                                    <div>
                                        <div style="font-size: 24px; font-weight: var(--weight-bold); color: white;">7.1h</div>
                                        <div style="font-size: var(--font-sm); color: white;">Sleep</div>
                                    </div>
                                    <div>
                                        <div style="font-size: 24px; font-weight: var(--weight-bold); color: white;">3</div>
                                        <div style="font-size: var(--font-sm); color: white;">Flags</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Weekly Timeline -->
                            <div style="background: rgba(255, 255, 255, 0.18); border: 2px solid rgba(255, 255, 255, 0.25); border-radius: var(--radius-md); padding: var(--space-lg); margin-bottom: var(--space-lg);">
                                <div style="font-size: var(--font-base); color: white; font-weight: var(--weight-bold); margin-bottom: var(--space-md);">Weekly Timeline</div>
                                <div style="font-size: var(--font-base); color: white; margin-bottom: var(--space-sm);">Week 1: ■ Stable</div>
                                <div style="font-size: var(--font-base); color: white; margin-bottom: var(--space-sm);">Week 2: ■ Stable</div>
                                <div style="font-size: var(--font-base); color: white; margin-bottom: var(--space-sm);">Week 3: ▣ Mild shifts</div>
                                <div style="font-size: var(--font-base); color: white;">Week 4: ■ Stable</div>
                            </div>

                            <!-- Physician Box -->
                            <div style="background: rgba(123, 166, 142, 0.25); border: 2px solid #7ba68e; border-radius: var(--radius-md); padding: var(--space-lg); margin-bottom: var(--space-lg);">
                                <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-bold); margin-bottom: var(--space-md);">For Your Clinician</div>
                                <div style="font-size: var(--font-base); color: white; line-height: var(--leading-relaxed);">
                                    • Overall stability maintained<br>
                                    • Week 3 mild symptom flare (resolved)<br>
                                    • Med changes well-tolerated
                                </div>
                            </div>

                            <div style="display: flex; gap: var(--space-md);">
                                <button class="btn-secondary" style="flex: 1;">Preview</button>
                                <button class="btn-primary" style="flex: 1;">Share</button>
                            </div>
                        </div>

                        <div class="bottom-nav">
                            <div class="nav-item">
                                <div class="nav-icon">🏠</div>
                                <div class="nav-label">Today</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📝</div>
                                <div class="nav-label">Log</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📅</div>
                                <div class="nav-label">Calendar</div>
                            </div>
                            <div class="nav-item active">
                                <div class="nav-icon">📊</div>
                                <div class="nav-label">Insights</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">🕊️</div>
                                <div class="nav-label">Wellness</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- REFLECTION & CHECK-INS -->
        <div class="journey-section">
            <div class="section-title">4B. REFLECTION MOMENTS</div>
            <div class="section-subtitle">Daily check-ins inspired by your screenshots</div>
            
            <div class="screens-grid">
                <!-- Reflection Moment - Multi-step -->
                <div class="screen-wrapper">
                    <div class="screen-label">Reflection: Step 1</div>
                    <div class="phone-frame">
                        <div class="screen-content">
                            <div class="top-bar">
                                <div></div>
                                <button class="btn-icon">⚙️</button>
                            </div>

                            <div class="page-header">
                                <div class="page-title">Reflection moment</div>
                                <div class="page-subtitle">Let's make sense of the day together.</div>
                            </div>

                            <div style="background: rgba(255, 255, 255, 0.18); border-radius: var(--radius-lg); padding: var(--space-xl); margin-bottom: var(--space-lg);">
                                <div style="display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-xl);">
                                    <div style="font-size: 32px;">🌙</div>
                                    <div style="font-size: var(--font-xl); color: white; font-weight: var(--weight-bold);">How did you sleep?</div>
                                </div>

                                <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-md); font-size: var(--font-base); color: var(--color-gray-200);">
                                    <span>Poor</span>
                                    <span>Great</span>
                                </div>
                                <div style="background: linear-gradient(90deg, #e89b7f 0%, #7ba68e 100%); height: 12px; border-radius: var(--radius-full); position: relative; margin-bottom: var(--space-xl);">
                                    <div style="position: absolute; left: 60%; top: 50%; transform: translate(-50%, -50%); width: 32px; height: 32px; background: white; border-radius: 50%; box-shadow: 0 4px 12px rgba(0,0,0,0.3);"></div>
                                </div>
                            </div>

                            <div style="background: rgba(255, 255, 255, 0.18); border-radius: var(--radius-lg); padding: var(--space-xl); margin-bottom: var(--space-lg);">
                                <div style="display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-xl);">
                                    <div style="font-size: 32px;">😊</div>
                                    <div style="font-size: var(--font-xl); color: white; font-weight: var(--weight-bold);">How are you feeling?</div>
                                </div>

                                <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-md); font-size: var(--font-base); color: var(--color-gray-200);">
                                    <span>Low</span>
                                    <span>Okay</span>
                                </div>
                                <div style="background: linear-gradient(90deg, #e89b7f 0%, #7ba68e 100%); height: 12px; border-radius: var(--radius-full); position: relative; margin-bottom: var(--space-xl);">
                                    <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 32px; height: 32px; background: white; border-radius: 50%; box-shadow: 0 4px 12px rgba(0,0,0,0.3);"></div>
                                </div>
                            </div>

                            <div style="background: rgba(255, 255, 255, 0.18); border-radius: var(--radius-lg); padding: var(--space-xl);">
                                <div style="display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-md);">
                                    <div style="font-size: 32px;">✨</div>
                                    <div style="font-size: var(--font-xl); color: white; font-weight: var(--weight-bold);">One thing you're grateful for...</div>
                                </div>
                                <textarea style="width: 100%; background: rgba(255, 255, 255, 0.12); border: none; color: white; padding: var(--space-lg); border-radius: var(--radius-md); font-size: var(--font-base); font-family: inherit; resize: none; min-height: 100px;" placeholder="Something you noticed, felt, or learned..."></textarea>
                            </div>

                            <div class="info-strip">Optional: Let's take one deep breath together...</div>

                            <button class="btn-primary" style="margin-top: var(--space-xl);">Save reflection</button>
                        </div>

                        <div class="bottom-nav">
                            <div class="nav-item">
                                <div class="nav-icon">🏠</div>
                                <div class="nav-label">Today</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📝</div>
                                <div class="nav-label">Log</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📅</div>
                                <div class="nav-label">Calendar</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📊</div>
                                <div class="nav-label">Insights</div>
                            </div>
                            <div class="nav-item active">
                                <div class="nav-icon">🕊️</div>
                                <div class="nav-label">Wellness</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quick Check-In -->
                <div class="screen-wrapper">
                    <div class="screen-label">Quick Check-In</div>
                    <div class="phone-frame">
                        <div class="screen-content">
                            <div class="page-header">
                                <div class="page-title">How's this moment landing for you?</div>
                                <div class="page-subtitle">Just a quick check-in. No pressure.</div>
                            </div>

                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-md); margin-bottom: var(--space-xl);">
                                <div style="background: rgba(255, 255, 255, 0.18); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-lg); padding: var(--space-xl); display: flex; align-items: center; gap: var(--space-md); cursor: pointer;">
                                    <div style="font-size: 36px;">😟</div>
                                    <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-bold);">Overwhelmed</div>
                                </div>
                                <div style="background: rgba(255, 255, 255, 0.18); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-lg); padding: var(--space-xl); display: flex; align-items: center; gap: var(--space-md); cursor: pointer;">
                                    <div style="font-size: 36px;">😔</div>
                                    <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-bold);">Low energy</div>
                                </div>
                                <div style="background: rgba(255, 255, 255, 0.18); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-lg); padding: var(--space-xl); display: flex; align-items: center; gap: var(--space-md); cursor: pointer;">
                                    <div style="font-size: 36px;">😐</div>
                                    <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-bold);">Neutral</div>
                                </div>
                                <div style="background: rgba(255, 255, 255, 0.18); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-lg); padding: var(--space-xl); display: flex; align-items: center; gap: var(--space-md); cursor: pointer;">
                                    <div style="font-size: 36px;">🙂</div>
                                    <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-bold);">Okay</div>
                                </div>
                                <div style="background: rgba(255, 255, 255, 0.18); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-lg); padding: var(--space-xl); display: flex; align-items: center; gap: var(--space-md); cursor: pointer;">
                                    <div style="font-size: 36px;">😊</div>
                                    <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-bold);">Good</div>
                                </div>
                                <div style="background: rgba(255, 255, 255, 0.18); border: 2px solid rgba(255,255,255,0.25); border-radius: var(--radius-lg); padding: var(--space-xl); display: flex; align-items: center; gap: var(--space-md); cursor: pointer;">
                                    <div style="font-size: 36px;">🤗</div>
                                    <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-bold);">Hopeful</div>
                                </div>
                            </div>

                            <div style="text-align: center; margin-bottom: var(--space-lg);">
                                <div style="font-size: var(--font-lg); color: white; margin-bottom: var(--space-xl);">Want to tell me a bit more or keep it simple?</div>
                                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-md);">
                                    <button class="btn-tertiary" style="padding: var(--space-xl);">Keep It Simple</button>
                                    <button class="btn-tertiary" style="padding: var(--space-xl);">Add a Bit More</button>
                                </div>
                            </div>

                            <button class="btn-primary">Save this moment</button>
                        </div>

                        <div class="bottom-nav">
                            <div class="nav-item">
                                <div class="nav-icon">🏠</div>
                                <div class="nav-label">Today</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📝</div>
                                <div class="nav-label">Log</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📅</div>
                                <div class="nav-label">Calendar</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📊</div>
                                <div class="nav-label">Insights</div>
                            </div>
                            <div class="nav-item active">
                                <div class="nav-icon">🕊️</div>
                                <div class="nav-label">Wellness</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Today's Reflection with Emoji & Sliders -->
                <div class="screen-wrapper">
                    <div class="screen-label">Today's Reflection (Complete)</div>
                    <div class="phone-frame">
                        <div class="screen-content">
                            <div style="background: rgba(255, 255, 255, 0.18); border-radius: var(--radius-xl); padding: var(--space-2xl); margin-bottom: var(--space-xl);">
                                <div style="font-size: var(--font-2xl); color: white; font-weight: var(--weight-bold); margin-bottom: var(--space-sm);">Today's reflection</div>
                                <div style="font-size: var(--font-base); color: var(--color-gray-200); margin-bottom: var(--space-2xl);">A quick check-in before you close the day</div>

                                <!-- Mood Emoji Scale -->
                                <div style="margin-bottom: var(--space-2xl);">
                                    <div style="display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-lg);">
                                        <div style="font-size: 28px;">😊</div>
                                        <div style="font-size: var(--font-xl); color: white; font-weight: var(--weight-bold);">How's your mood?</div>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; gap: var(--space-sm);">
                                        <div style="font-size: 56px; cursor: pointer; opacity: 0.5; transition: all 0.2s;">☹️</div>
                                        <div style="font-size: 56px; cursor: pointer; opacity: 0.5; transition: all 0.2s;">😐</div>
                                        <div style="font-size: 56px; cursor: pointer; opacity: 0.5; transition: all 0.2s;">🙂</div>
                                        <div style="font-size: 56px; cursor: pointer; opacity: 1; transition: all 0.2s; transform: scale(1.1);">😊</div>
                                        <div style="font-size: 56px; cursor: pointer; opacity: 0.5; transition: all 0.2s;">😄</div>
                                    </div>
                                </div>

                                <!-- Day Quality Slider -->
                                <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: var(--space-xl); margin-bottom: var(--space-xl);">
                                    <div style="display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-lg);">
                                        <div style="font-size: 28px;">✨</div>
                                        <div style="font-size: var(--font-xl); color: white; font-weight: var(--weight-bold);">How did today feel for you?</div>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-md); font-size: var(--font-base); color: var(--color-gray-200);">
                                        <span>Tough</span>
                                        <span>A lot</span>
                                        <span>Manageable</span>
                                        <span>Quite smooth</span>
                                    </div>
                                    <div style="background: linear-gradient(90deg, #e89b7f 0%, #7ba68e 100%); height: 12px; border-radius: var(--radius-full); position: relative;">
                                        <div style="position: absolute; left: 55%; top: 50%; transform: translate(-50%, -50%); width: 32px; height: 32px; background: white; border-radius: 50%; box-shadow: 0 4px 12px rgba(0,0,0,0.3);"></div>
                                    </div>
                                    <div style="text-align: center; margin-top: var(--space-md); font-size: var(--font-lg); color: white; font-weight: var(--weight-bold);">7 — Good</div>
                                </div>

                                <!-- Gratitude Text -->
                                <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: var(--space-xl);">
                                    <div style="display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-lg);">
                                        <div style="font-size: 28px;">✍️</div>
                                        <div style="font-size: var(--font-xl); color: white; font-weight: var(--weight-bold);">One sentence from today</div>
                                    </div>
                                    <textarea style="width: 100%; background: rgba(255, 255, 255, 0.15); border: none; color: white; padding: var(--space-lg); border-radius: var(--radius-md); font-size: var(--font-base); font-family: inherit; resize: none; min-height: 100px; margin-bottom: var(--space-xl);" placeholder="Something you noticed, felt, or learned..."></textarea>
                                    <button class="btn-primary">Save today</button>
                                </div>
                            </div>
                        </div>

                        <div class="bottom-nav">
                            <div class="nav-item">
                                <div class="nav-icon">🏠</div>
                                <div class="nav-label">Today</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📝</div>
                                <div class="nav-label">Log</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📅</div>
                                <div class="nav-label">Calendar</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📊</div>
                                <div class="nav-label">Insights</div>
                            </div>
                            <div class="nav-item active">
                                <div class="nav-icon">🕊️</div>
                                <div class="nav-label">Wellness</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- WELLNESS: Mental & Physical Resets -->
        <div class="journey-section">
            <div class="section-title">5. WELLNESS</div>
            <div class="section-subtitle">Small resets for mind and body</div>
            
            <div class="screens-grid">
                <div class="screen-wrapper">
                    <div class="screen-label">Wellness Hub</div>
                    <div class="phone-frame">
                        <div class="screen-content">
                            <div class="page-header">
                                <div class="page-icon">🕊️</div>
                                <div class="page-title">Wellness</div>
                                <div class="page-subtitle">Take a moment for yourself</div>
                            </div>

                            <div class="companion-bubble">
                                <div class="companion-text">
                                    You've been carrying a lot lately. These tools can help you recharge.
                                </div>
                            </div>

                            <div class="card-list">
                                <div class="card-list-icon">🌬️</div>
                                <div class="card-list-content">
                                    <div class="card-list-title">Breathing Exercise</div>
                                    <div class="card-list-subtitle">Calm your mind and body</div>
                                </div>
                                <div class="card-list-meta">3 min</div>
                            </div>

                            <div class="card-list">
                                <div class="card-list-icon">🧘</div>
                                <div class="card-list-content">
                                    <div class="card-list-title">Gentle Stretching</div>
                                    <div class="card-list-subtitle">Easy movements for stiff joints</div>
                                </div>
                                <div class="card-list-meta">5 min</div>
                            </div>

                            <div class="card-list">
                                <div class="card-list-icon">😴</div>
                                <div class="card-list-content">
                                    <div class="card-list-title">Sleep Stories</div>
                                    <div class="card-list-subtitle">Calming stories for bedtime</div>
                                </div>
                                <div class="card-list-meta">10 min</div>
                            </div>

                            <div class="card-list">
                                <div class="card-list-icon">🎵</div>
                                <div class="card-list-content">
                                    <div class="card-list-title">Relaxing Music</div>
                                    <div class="card-list-subtitle">Peaceful sounds for reflection</div>
                                </div>
                                <div class="card-list-meta">∞</div>
                            </div>

                            <div class="card-list">
                                <div class="card-list-icon">💭</div>
                                <div class="card-list-content">
                                    <div class="card-list-title">Gratitude Journal</div>
                                    <div class="card-list-subtitle">Reflect on what went well</div>
                                </div>
                                <div class="card-list-meta">2 min</div>
                            </div>
                        </div>

                        <div class="bottom-nav">
                            <div class="nav-item">
                                <div class="nav-icon">🏠</div>
                                <div class="nav-label">Today</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📝</div>
                                <div class="nav-label">Log</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📅</div>
                                <div class="nav-label">Calendar</div>
                            </div>
                            <div class="nav-item">
                                <div class="nav-icon">📊</div>
                                <div class="nav-label">Insights</div>
                            </div>
                            <div class="nav-item active">
                                <div class="nav-icon">🕊️</div>
                                <div class="nav-label">Wellness</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ONBOARDING -->
        <div class="journey-section">
            <div class="section-title">6. ONBOARDING</div>
            <div class="section-subtitle">3 screens, elderly-optimized</div>
            
            <div class="screens-grid">
                <!-- Screen 1: Welcome -->
                <div class="screen-wrapper">
                    <div class="screen-label">1. Welcome</div>
                    <div class="phone-frame">
                        <div class="onboarding-content">
                            <div class="onboarding-icon">🔥</div>
                            <div class="onboarding-title">Welcome to EmberMate</div>
                            <div class="onboarding-text">
                                Your companion for tracking health, meds, and feeling better every day.
                            </div>

                            <button class="btn-primary">Let's Begin</button>
                            <button class="btn-tertiary">I have an account</button>
                        </div>
                    </div>
                </div>

                <!-- Screen 2: What We Do -->
                <div class="screen-wrapper">
                    <div class="screen-label">2. What We Do</div>
                    <div class="phone-frame">
                        <div class="onboarding-content">
                            <div class="onboarding-icon">💊</div>
                            <div class="onboarding-title">We Help You Remember</div>
                            <div class="onboarding-text">
                                Track medications, appointments, and how you're feeling. Share reports with your doctor.
                            </div>

                            <div style="background: rgba(255, 255, 255, 0.18); border: 2px solid rgba(255, 255, 255, 0.3); border-radius: var(--radius-lg); padding: var(--space-xl); margin: var(--space-xl) 0;">
                                <div style="font-size: var(--font-lg); color: white; font-weight: var(--weight-bold); margin-bottom: var(--space-sm);">🔒 Your Privacy Matters</div>
                                <div style="font-size: var(--font-base); color: white; line-height: var(--leading-normal);">
                                    Your health data stays on your device. We never sell your information.
                                </div>
                            </div>

                            <button class="btn-primary">Continue</button>
                        </div>
                    </div>
                </div>

                <!-- Screen 3: Meet Your Companion -->
                <div class="screen-wrapper">
                    <div class="screen-label">3. Your Companion</div>
                    <div class="phone-frame">
                        <div class="onboarding-content">
                            <div class="onboarding-icon">🌟</div>
                            <div class="onboarding-title">Meet Your Companion</div>
                            <div class="onboarding-text">
                                I'll remind you, encourage you, and celebrate your progress.
                            </div>

                            <div class="companion-bubble" style="margin: var(--space-xl) 0;">
                                <div class="companion-text">
                                    Hi! I'm here to help. Let me know if you ever need anything explained or if you'd like a reminder.
                                </div>
                            </div>

                            <button class="btn-primary">Start Tracking</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;
