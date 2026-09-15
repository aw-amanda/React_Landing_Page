export const lenisEasing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))

export const lenisOptions = {
    duration: 1.2,
    easing: lenisEasing,
}

// Anchor scroll config
export const anchorScrollOptions = {
    duration: 1.5,
    easing: lenisEasing,
}