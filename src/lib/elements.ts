export const elements: {
    [key: string]: {
        english: string;
        thai: string;
        pose: number;
        detail: {
            en: string
            th: string
        }
    };
} = {
    energy: {
        english: 'Energy',
        thai: 'พลังงาน',
        pose: 1,
        detail: {
            en: 'This principle represents the dynamic range of motion in different parts of the body over time, which is important to the aesthetics of Mae Bot Yai, such as the unique knee movements and rhythmic stamping actions. To computationally model energy, the algorithm scales the timing of the different groups of the limb’s animation keyframes to increase or decrease the velocity of each individual part’s movements, resulting in a variation of movement speed across the bodies.',
            th: "หลักการนี้แสดงถึงช่วงการเคลื่อนไหวที่เป็นพลวัตในส่วนต่างๆ ของร่างกายตลอดเวลา ซึ่งมีความสำคัญต่อสุนทรียศาสตร์ของแม่บทใหญ่ เช่น การเคลื่อนไหวของหัวเข่าที่เป็นเอกลักษณ์และการย่ำเท้าเป็นจังหวะ เพื่อสร้างแบบจำลองพลังงานด้วยการคำนวณ อัลกอริทึมจะปรับขนาดเวลาของกลุ่มคีย์เฟรมแอนิเมชันของแขนขาที่แตกต่างกัน เพื่อเพิ่มหรือลดความเร็วของการเคลื่อนไหวในแต่ละส่วนของร่างกาย ส่งผลให้เกิดความแตกต่างของความเร็วในการเคลื่อนไหวทั่วทั้งร่างกาย"
        }
    },
    axis: {
        english: 'Axis Points',
        thai: 'จุดภายในและภายนอกร่างกาย',
        pose: 10,
        detail: {
            en: 'This principle represents key pivot points and body segments, which serve as the reference points for hand movement. The hand points towards this reference point, creating elaborate hand and finger gestures in Mae Bot Yai. To computationally model this principle, the algorithm applies inverse kinematics and smooth linear interpolation to gradually interpolate the position and rotation of arm and leg limbs towards the core axis points. The original movement is altered to gravitate towards the core skeletal axes points.',
            th: "หลักการนี้แสดงถึงจุดหมุนสำคัญและส่วนต่างๆ ของร่างกาย ซึ่งทำหน้าที่เป็นจุดอ้างอิงสำหรับการเคลื่อนไหวของมือ มือชี้ไปยังจุดอ้างอิงนี้ สร้างท่าทางมือและนิ้วที่ซับซ้อนในแม่บทใหญ่ เพื่อสร้างแบบจำลองของหลักการนี้ด้วยการคำนวณ อัลกอริทึมใช้หลักการการคำนวณย้อนกลับทางจลนศาสตร์ (inverse kinematics) และการประมาณค่าในช่วงเชิงเส้นแบบราบรื่น (smooth linear interpolation) เพื่อค่อยๆ ประมาณค่าตำแหน่งและการหมุนของแขนและขาไปสู่จุดแกนหลัก การเคลื่อนไหวดั้งเดิมถูกเปลี่ยนแปลงให้โน้มเอียงไปสู่จุดแกนโครงกระดูกหลัก"
        }
    },
    circle: {
        english: 'Circles & Curves',
        thai: 'วงกลมและเส้นโค้ง',
        pose: 15,
        detail: {
            en: 'This principle represents the circular and curved movement trajectories with rounded rather than linear pathway transformations, which make the Mae Bot Yai dance fluid, graceful, and pleasing to watch. To computationally model this principle, we apply mathematical equations to the rotational quaternions of the limb’s animation keyframes, such as a Gaussian smoothing filter, derivatives, low-pass, and high-pass filters. This results in an increase or reduction of curvature in the movement.',
            th: "หลักการนี้แสดงถึงเส้นทางการเคลื่อนไหวแบบวงกลมและโค้ง โดยมีการเปลี่ยนแปลงเส้นทางที่มนกว่าแบบเส้นตรง ซึ่งทำให้การรำแม่บทใหญ่มีความลื่นไหล สง่างาม และน่าชม เพื่อสร้างแบบจำลองของหลักการนี้ด้วยการคำนวณ เราใช้สมการทางคณิตศาสตร์กับควอเทอร์เนียนการหมุน (rotational quaternions) ของคีย์เฟรมแอนิเมชันของแขนขา เช่น ตัวกรองการปรับให้เรียบแบบเกาส์เซียน (Gaussian smoothing filter) อนุพันธ์ ตัวกรองผ่านต่ำ และตัวกรองผ่านสูง ซึ่งส่งผลให้เกิดการเพิ่มขึ้นหรือลดลงของความโค้งในการเคลื่อนไหว"
        }
    },
    relation: {
        english: 'Shifting Relation',
        thai: 'การเคลื่อนย้ายความสัมพันธ์',
        pose: 34,
        detail: {
            en: 'Investigating how transitions between movements and poses direct audience attention and focus to different body parts and actions. Analyzing how progressions from one form to another create a seamless flow.',
            th: "การศึกษาวิจัยว่าการเปลี่ยนผ่านระหว่างการเคลื่อนไหวและท่าทางนำความสนใจและจุดโฟกัสของผู้ชมไปยังส่วนต่างๆ ของร่างกายและการกระทำอย่างไร การวิเคราะห์ว่าการพัฒนาจากรูปแบบหนึ่งไปสู่อีกรูปแบบหนึ่งสร้างการไหลลื่นอย่างต่อเนื่องได้อย่างไร"
        }
    },
    space: {
        english: 'External Body Space',
        thai: 'พื้นที่ว่างโครงสร้างท่า',
        pose: 42,
        detail: {
            en: 'This principle represents the negative geometric shapes outside the body that create beauty in Mae Bot Yai. In order to computationally model this principle, the algorithm detects transition signals between sequence positions to slow down the movement and influence the audience to see the negative space in the frozen pose. The algorithm identifies the movement sequences containing minimal rotational changes and then extends the timing of the animation keyframe for those sequences to pause the movement. The resulting movement highlights the external spaces around and within the dancer’s body.',
            th: 'หลักการนี้แสดงถึงรูปทรงเรขาคณิตเชิงลบภายนอกร่างกายที่สร้างความงามในแม่บทใหญ่ เพื่อสร้างแบบจำลองของหลักการนี้ด้วยการคำนวณ อัลกอริทึมจะตรวจจับสัญญาณการเปลี่ยนผ่านระหว่างตำแหน่งในลำดับเพื่อชะลอการเคลื่อนไหว และมีอิทธิพลให้ผู้ชมเห็นพื้นที่ว่างในท่าที่หยุดนิ่ง อัลกอริทึมระบุลำดับการเคลื่อนไหวที่มีการเปลี่ยนแปลงการหมุนน้อยที่สุด จากนั้นขยายเวลาของคีย์เฟรมแอนิเมชันสำหรับลำดับเหล่านั้นเพื่อหยุดการเคลื่อนไหวชั่วคราว การเคลื่อนไหวที่เกิดขึ้นจะเน้นย้ำพื้นที่ภายนอกรอบๆ และภายในร่างกายของนักเต้น'
        }
    },
    limb: {
        english: 'Synchronic Limbs',
        thai: 'ความสัมพันธ์ของร่างกาย',
        pose: 55,
        detail: {
            en: 'Analyzing the coordinated movement between different limbs, sides, or parts of the body. Looking at synchronous versus asynchronous body movements.',
            th: 'การวิเคราะห์การเคลื่อนไหวที่ประสานกันระหว่างแขนขา ด้านต่างๆ หรือส่วนต่างๆ ของร่างกาย การพิจารณาการเคลื่อนไหวของร่างกายที่พร้อมเพรียงกันเปรียบเทียบกับการเคลื่อนไหวที่ไม่พร้อมเพรียงกัน'
        }
    },
};