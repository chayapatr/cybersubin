export const elements: {
    [key: string]: {
        english: string;
        thai: string;
        pose: number;
        detail: string;
    };
} = {
    energy: {
        english: 'Energy',
        thai: 'พลังงาน',
        pose: 1,
        detail:
            'This principle represents the dynamic range of motion in different parts of the body over time, which is important to the aesthetics of Mae Bot Yai, such as the unique knee movements and rhythmic stamping actions. To computationally model energy, the algorithm scales the timing of the different groups of the limb’s animation keyframes to increase or decrease the velocity of each individual part’s movements, resulting in a variation of movement speed across the bodies.'
    },
    axis: {
        english: 'Axis Points',
        thai: 'จุดภายในและภายนอกร่างกาย',
        pose: 10,
        detail:
            'This principle represents key pivot points and body segments, which serve as the reference points for hand movement. The hand points towards this reference point, creating elaborate hand and finger gestures in Mae Bot Yai. To computationally model this principle, the algorithm applies inverse kinematics and smooth linear interpolation to gradually interpolate the position and rotation of arm and leg limbs towards the core axis points. The original movement is altered to gravitate towards the core skeletal axes points.'
    },
    circle: {
        english: 'Circles & Curves',
        thai: 'วงกลมและเส้นโค้ง',
        pose: 15,
        detail:
            'This principle represents the circular and curved movement trajectories with rounded rather than linear pathway transformations, which make the Mae Bot Yai dance fluid, graceful, and pleasing to watch. To computationally model this principle, we apply mathematical equations to the rotational quaternions of the limb’s animation keyframes, such as a Gaussian smoothing filter, derivatives, low-pass, and high-pass filters. This results in an increase or reduction of curvature in the movement.'
    },
    relation: {
        english: 'Shifting Relation',
        thai: 'การเคลื่อนย้ายความสัมพันธ์',
        pose: 34,
        detail:
            'Investigating how transitions between movements and poses direct audience attention and focus to different body parts and actions. Analyzing how progressions from one form to another create a seamless flow.'
    },
    space: {
        english: 'External Body Space',
        thai: 'พื้นที่ว่างโครงสร้างท่า',
        pose: 42,
        detail:
            'This principle represents the negative geometric shapes outside the body that create beauty in Mae Bot Yai. In order to computationally model this principle, the algorithm detects transition signals between sequence positions to slow down the movement and influence the audience to see the negative space in the frozen pose. The algorithm identifies the movement sequences containing minimal rotational changes and then extends the timing of the animation keyframe for those sequences to pause the movement. The resulting movement highlights the external spaces around and within the dancer’s body.'
    },
    limb: {
        english: 'Synchronic Limbs',
        thai: 'ความสัมพันธ์ของร่างกาย',
        pose: 55,
        detail:
            'Analyzing the coordinated movement between different limbs, sides, or parts of the body. Looking at synchronous versus asynchronous body movements.'
    },
};