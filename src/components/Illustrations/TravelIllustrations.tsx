"use client";

import { motion } from "framer-motion";

export const StudentVisaIllustration = () => (
    <motion.svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        initial="initial"
        animate="animate"
    >
        <motion.path
            d="M50 140V100L100 75L150 100V140"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
            d="M100 130L130 115V130L100 145L70 130V115L100 130Z"
            fill="var(--primary)"
            fillOpacity="0.1"
            stroke="var(--primary)"
            strokeWidth="2"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
        />
        <circle cx="100" cy="75" r="4" fill="var(--primary)" />
        <motion.path
            d="M150 100V130"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <motion.rect
            x="85" y="40" width="30" height="20" rx="2"
            stroke="var(--foreground)"
            strokeWidth="1"
            fill="var(--background)"
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
        />
    </motion.svg>
);

export const WorkVisaIllustration = () => (
    <motion.svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        initial="initial"
        animate="animate"
    >
        <motion.rect
            x="50" y="70" width="100" height="70" rx="4"
            stroke="var(--foreground)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
        />
        <motion.path
            d="M80 70V60C80 54.4772 84.4772 50 90 50H110C115.523 50 120 54.4772 120 60V70"
            stroke="var(--primary)"
            strokeWidth="2"
        />
        <motion.circle
            cx="100" cy="105" r="15"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeDasharray="4 4"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <path d="M95 105H105M100 100V110" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
    </motion.svg>
);

export const TouristVisaIllustration = () => (
    <motion.svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
    >
        <motion.path
            d="M60 120L100 40L140 120"
            stroke="var(--foreground)"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <motion.path
            d="M40 140H160"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <motion.circle
            cx="100" cy="140" r="20"
            stroke="var(--primary)"
            strokeWidth="2"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.path
            d="M140 60L160 80M160 60L140 80"
            stroke="var(--secondary)"
            strokeWidth="2"
            animate={{ rotate: 45 }}
        />
    </motion.svg>
);

export const ContactIllustration = () => (
    <motion.svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
    >
        <motion.path
            d="M40 100C40 66.8629 66.8629 40 100 40C133.137 40 160 66.8629 160 100C160 133.137 133.137 160 100 160L60 160L40 180V100Z"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
        />
        <motion.circle
            cx="80" cy="100" r="2" fill="var(--primary)"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
        />
        <motion.circle
            cx="100" cy="100" r="2" fill="var(--primary)"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        />
        <motion.circle
            cx="120" cy="100" r="2" fill="var(--primary)"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
        />
    </motion.svg>
);

export const PassportIllustration = () => (
    <motion.svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
    >
        <motion.rect
            x="60" y="40" width="80" height="120" rx="4"
            stroke="var(--foreground)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
        />
        <motion.path
            d="M60 70H140M60 130H140"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeOpacity="0.5"
        />
        <motion.circle
            cx="100" cy="100" r="15"
            stroke="var(--primary)"
            strokeWidth="2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
        />
        <text x="75" y="60" fontSize="10" fill="var(--muted-foreground)" fontFamily="sans-serif" fontWeight="bold">PASSPORT</text>
    </motion.svg>
);

export const GlobeIllustration = () => (
    <motion.svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
    >
        <motion.circle
            cx="100" cy="100" r="60"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeOpacity="0.2"
        />
        <motion.ellipse
            cx="100" cy="100" rx="60" ry="20"
            stroke="var(--primary)"
            strokeWidth="1"
            strokeOpacity="0.1"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.ellipse
            cx="100" cy="100" rx="20" ry="60"
            stroke="var(--primary)"
            strokeWidth="1"
            strokeOpacity="0.1"
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
            d="M40 100H160M100 40V160"
            stroke="var(--primary)"
            strokeWidth="1"
            strokeOpacity="0.1"
        />
    </motion.svg>
);

export const StepIllustration = () => (
    <motion.svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
    >
        <motion.path
            d="M40 100C40 100 70 60 100 100C130 140 160 100 160 100"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeOpacity="0.2"
            strokeDasharray="4 4"
        />
        <motion.circle
            r="4"
            fill="var(--primary)"
            animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            cx="100" cy="100"
        />
    </motion.svg>
);
