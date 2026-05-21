import React, { useState, useRef } from 'react';
import sktreasandsecPhoto from '../assets/activities/events/sktreasandsec.jpg';
import pasko2023Photo from '../assets/activities/events/paskongkalinga2023.jpg';
import oathtakingPhoto from '../assets/activities/events/oathtaking.jpg';
import kkassemblyPhoto from '../assets/activities/events/kkassembly.jpg';
import laronglahi2024Photo from '../assets/activities/events/laronglahi2024.jpg';
import basketball2023Photo from '../assets/activities/events/basketballchristmas2023.jpg';
import basketball2024Photo from '../assets/activities/events/basketballchristmas2024.jpg';
import kkassembly2025Photo from '../assets/activities/events/kkassembly2025.jpg';
import laronglahi2025Photo from '../assets/activities/events/laronglahi2025.jpg';
import laronglahi2026Photo from '../assets/activities/events/laronglahi2026.jpg';
import pasko2024Photo from '../assets/activities/events/paskuhan2024.jpg';
import sagala2024Photo from '../assets/activities/events/sagala2024.jpg';
import sagala2025Photo from '../assets/activities/events/sagala2025.jpg';
import sagala2026Photo from '../assets/activities/events/sagala2026.jpg';
import sbassemblyPhoto from '../assets/activities/events/sbassembly2024.jpg';
import volleyball2024Photo from '../assets/activities/events/volleyball2024.jpg';
import volleyball2025Photo from '../assets/activities/events/vball2025.jpg';
import mlPhoto from '../assets/activities/events/mltournament.jpg';
import thevoicePhoto from '../assets/activities/events/thevoice.jpg';
import kkprofilingPhoto from '../assets/activities/project/kkprofiling2024.jpg';
import financialindependentPhoto from '../assets/activities/project/financialindependent.jpg';
import librenggupit2024Photo from '../assets/activities/project/librenggupit2024.jpg';
import eyecarePhoto from '../assets/activities/project/eyecare.jpg';
import agriPhoto from '../assets/activities/project/agrivillage.jpg';
import arrozcaldoPhoto from '../assets/activities/project/arrozcaldo.jpg';
import chessPhoto from '../assets/activities/project/chess.jpg';
import cleanandgreenPhoto from '../assets/activities/project/cleanandgreen.jpg';
import gandangnanayPhoto from '../assets/activities/project/gandangnanay.jpg';
import sloganPhoto from '../assets/activities/project/slogan.jpg';
import meetingPhoto from '../assets/activities/seminars/meeting.jpg';
import bcpcPhoto from '../assets/activities/seminars/bcpcelection.jpg';
import mandatoryPhoto from '../assets/activities/seminars/mandatory1.png';
import leadershipPhoto from '../assets/activities/seminars/leadership.jpg';
import artofbrandingPhoto from '../assets/activities/seminars/artofbranding.jpg';
import hivandaidsPhoto from '../assets/activities/seminars/hivandaids.jpg';
import youthcongress from '../assets/activities/seminars/youthcongress.jpg';
import kuyaivanPhoto from '../assets/activities/awards/kuyaivan.jpg';
import theaPhoto from '../assets/activities/awards/theagraduate.jpg';
import maiPhoto from '../assets/activities/awards/maigrad.jpg';
import dangalPhoto from '../assets/activities/awards/dangalnigattayaw.jpg';
import bookPhoto from '../assets/activities/awards/bookkeeping.jpg';
import digitalPhoto from '../assets/activities/awards/digitalartsvince.jpg';
import fullcompliant1Photo from '../assets/activities/awards/fullycompliant.jpg';
import fullcompliant2Photo from '../assets/activities/awards/fullycompliantnovember.jpg';
import sksecandtreasPhoto from '../assets/activities/awards/sksecandtreas.jpg';
import lptPhoto from '../assets/activities/awards/lpt.jpg';
import magnaPhoto from '../assets/activities/awards/magna.jpg';
import gawadPhoto from '../assets/activities/awards/gawad.jpg';
import schoolsuppliesPhoto from '../assets/activities/upcoming/schoolsupplies.jpg';

const SectionTitle = ({ title, isDark }) => <h2 style={{ fontSize: 'clamp(2.2rem, 3vw, 2rem)', marginBottom: '25px', color: isDark ? '#ffd000' : '#002c02', fontWeight: '800' }}>{title}</h2>;

const Activities = () => {
  const eventsRef = useRef(null);
  const projectsRef = useRef(null);
  const seminarsRef = useRef(null);
  const achievementsRef = useRef(null);
  const upcomingRef = useRef(null);

  // --- UPDATED: Initial visibility limit set to 3 or 4 cards per row instead of 2 ---
  const INITIAL_ROW_LIMIT = 3; 
  const [eventsLimit, setEventsLimit] = useState(INITIAL_ROW_LIMIT);
  const [projectsLimit, setProjectsLimit] = useState(INITIAL_ROW_LIMIT);
  const [seminarsLimit, setSeminarsLimit] = useState(INITIAL_ROW_LIMIT);
  const [achievementsLimit, setAchievementsLimit] = useState(INITIAL_ROW_LIMIT);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 120,
      behavior: 'smooth',
    });
  };

  const brandGreen = '#002c02';
  const brandGold = '#ffd000';
  const sectionStyle = { padding: '60px 5%', maxWidth: '1400px', margin: '0 auto' };

 // --- Data Arrays (Sorted: Latest to Oldest) ---
 const eventsData = [
    {
      title: "LakaSKabataan: Palaro ng Lahi 2026",
      date: "May 16, 2026",
      desc: "Continuing our indigenous sports featuring traditional games to build youth participation",
      img: laronglahi2026Photo,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0RcvnzArXw68ijLFoqeNCX5B7HB7iFUMMzp2pn5v7HAoBnZDGVk1jJB5anQgZAhWWl"
    },
  {
      title: "Sagala 2026",
      date: "May 15, 2026",
      desc: "Our traditional street pageantry and cultural heritage showcasing community elegance and active youth civic participation.",
      img: sagala2026Photo,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02ShwZPtSLAvEikuopY23nLAUY8HDiavud3YsgtWQeokLcqXbVt3UsbSYtUDkxdRF4l"
    },
  {
      title: "2025 Sports League: Volleyball Edition",
      date: "December 15, 2025",
      desc: "Our premier end-of-year volleyball tournament matching up various local sectors for dynamic championship athletic displays.",
      img: volleyball2025Photo,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0ZWQXWVxjznoJBot2MVc9ApbsYhoyMEqdwy99uMR9bye9dYaKpQ7hZNwfaf7NKHTCl"
    },
    {
      title: "2025 Katipunan ng Kabataan Assembly",
      date: "November 16, 2025",
      desc: "An essential general evaluation and strategy council evaluating yearly projects and casting community youth legislative roadmaps.",
      img: kkassembly2025Photo,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02SmykWjtHeKpiUTDC12qxVEzZRuZAd3TNrqZwc2ry56KddeDz8jodFLtdSVB7BfPnl"
    },
    {
      title: "The Voice 2025: Fiesta 2025",
      date: "May 17, 2025",
      desc: "Empowering Youth talents in singing and performing together with San Isidro audience",
      img: thevoicePhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02W1PEqkeeZptxn73TSJrQfYFSynSF39kMvV86Nd4a7y1h4oWzVHRWFSHn3v49gcxul"
    },
    {
      title: "Sagala 2025",
      date: "May 15, 2025",
      desc: "Continuing traditional street pageantry and cultural heritage showcasing community elegance and active youth civic participation.",
      img: sagala2025Photo,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0td7DBDfreMiroe9HX2URpwBnzj1uqn8DpUuBBHP9tYDocntv5a8652UVqUc5Bxczl"
    },
    {
      title: "LakaSKabataan: Palaro ng Lahi 2025",
      date: "May 14, 2025",
      desc: "The return of our indigenous sports festival featuring traditional community games to preserve local culture and build active group bonds.",
      img: laronglahi2025Photo,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0o9JhnDkbFNChZMQ5CLnhu3Nynz3EfL2MZCFEgSND2bb1uLCk5uDS8a8PRbxYTBuwl"
    },
    {
      title: "Paskuhan sa San Isidro 2024",
      date: "December 21, 2024",
      desc: "A vibrant seasonal celebration filled with music, community activities, and bright lights to foster unity and joy during the holidays.",
      img: pasko2024Photo,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02sYrfWUaA3L55t7GcQSRPUbjWZpkf64D6N8WV9efWn6xAtdu41w8CpJL6Rj8Gx3Xel"
    },
    {
      title: "2024 Basketball League: Christmas Edition",
      date: "December 14, 2024",
      desc: "The annual festive sports tournament returning to gather basketball enthusiasts for an action-packed holiday cup promoting healthy lifestyles.",
      img: basketball2024Photo,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02RUjXCLWfqPCMkxdTzRorQLxghErDZLzGWYqkPfua4CXrHwKsuZ95LaJ55NzmwfYXl"
    },
    {
      title: "2024 Sports League: Volleyball Edition",
      date: "November 09, 2024",
      desc: "A high-energy volleyball conference promoting physical wellness, neighborhood unity, and collaborative team synergy among youth divisions.",
      img: volleyball2024Photo,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0PyFu3DsMeR3bSWAM3aSRmMtWVES3LWwvAiYhS9UrTNTHRDT1apb6XEjBn9d6SjZGl"
    },
    {
      title: "Mobile Legends Tournament",
      date: "September 14, 2024",
      desc: "An exciting competitive esports platform empowering local gamers to showcase tactical skills, strategic teamwork, and digital sportsmanship.",
      img: mlPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid05yRkC87UHhVzbtSfZjiXg2naecoAWLVGH7KFhZjKQoEhNByZdj9cmr3eQ46TwwBul"
    },
    {
      title: "Sagala 2024",
      date: "May 15, 2024",
      desc: "A beautiful, traditional community cultural procession celebrating local artistry, devotion, and active participation of youth pageantry figures.",
      img: sagala2024Photo,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02m8tQExJgB2QY8Hgh46ihuMshQ9LCLYWUxwbVuuCwh6wUf6d6EwLe1MmcmE8TjRfGl"
    },
    {
      title: "1st Katipunan ng Kabataan Assembly",
      date: "April 22, 2024",
      desc: "The foundational youth general assembly centered on identifying local priorities, collaborative action planning, and youth policy development.",
      img: kkassemblyPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0YPD3Qk2PbhDFvsVxgarKrD4aQ85sNpPWYx4bvsEWdJpQrHLN1YmruE7ErVFaUBTxl"
    },
    {
      title: "Sangguniang Barangay Assembly 2024",
      date: "March 18, 2024",
      desc: "A vital community gathering designed to present local progress reports, discuss current ordinances, and address the immediate concerns of San Isidro residents.",
      img: sbassemblyPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02B4czSiG8EiwF2zePv91E6MP9qAsFpEYZgt8xZ7hPuucnPmgvLWoVPGL5fYygD6VDl"
    },
    {
      title: "Elected SK Treasurer and Secretary",
      date: "February 04, 2024",
      desc: "The official appointment and orientation of our dedicated SK Treasurer and Secretary to handle administrative and financial governance duties.",
      img: sktreasandsecPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid025VFSXNrMVqD3YHpYnD1UzMpdLS9zeyaAZWxNuNPGGZkfYsSsGJYGYKQ5nJEzLir7l"
    },
    {
      title: "LakaSKabataan: Palaro ng Lahi 2024",
      date: "January 06, 2024",
      desc: "Celebrating cultural heritage and unity through active participation in traditional Filipino games, revitalizing community spirit among the youth.",
      img: laronglahi2024Photo,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02HTiXn9DCzsrZF1FFD742FouAC3qU53hcGD6X3CcxTdAsZ4pmWwYUBySJrGGzy2nul"
    },
    {
      title: "2023 Basketball League: Christmas Edition",
      date: "December 24, 2023",
      desc: "A festive holiday sports tournament bringing together local youth teams to foster camaraderie, sportsmanship, and healthy competition during the Christmas break.",
      img: basketball2023Photo,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0zznRyFSyB1C2sNYfhaBxky8CrAabQiiWtx4XyHo7aF2zhgXkd9GiGRz5zKyEUwSBl"
    },
    {
      title: "Paskong Kalinga 2023",
      date: "December 23, 2023",
      desc: "A heart-warming holiday gift-giving and outreach program aimed at spreading joy, love, and essential support to families across the community.",
      img: pasko2023Photo,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0268APusxBHT9Fnmcq4cHqG8LTpQ8HFwrx86ebGnFLfZBoFqQW7jn43jsf33GE2bo5l"
    },
    {
      title: "Oath Taking Ceremony of Elected Sk Chairman and Barangay Captains ",
      date: "November 20, 2023",
      desc: "The official swearing-in ceremony marking the formal assumption of duties and leadership commitment of our newly elected SK Chairman for San Isidro.",
      img: oathtakingPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid08aaEZP2TK5HnpoWJaPs7NXZjwHCFDH3GmJ5vDjpWYj3JDpjN82NkDY71R8TagQt8l"
    }
  ];

  // --- Data Arrays (Sorted: Latest to Oldest) ---
 const projectsData = [
    {
      title: "Gandang Nanay at Sayawan sa San Isidro 2026",
      date: "May 14, 2026",
      desc: "A lively cultural celebration paying tribute to our local mothers, paired with vibrant traditional dance performances and community fellowship.",
      img: gandangnanayPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid07fppfVVJumkbrbfU79Y2x3gvRuaXiSFCfubG45G3Qf43JBG8bP48JXoUvJGuSr8Ql"
    },
    {
      title: "Agri Village 2026",
      date: "May 13, 2026",
      desc: "A sustainable agricultural donation drive showcase highlighting local food production and youth involvement",
      img: agriPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0p3cn9JGdwGdBKdTecfj7yasafSNK5ouWsy2tGLQ3HJh24W8fU5zrkvc9Djr7CxQbl"
    },
    {
      title: "Chess Tournament",
      date: "December 15, 2025",
      desc: "A strategic mind-sports event challenging local enthusiasts to showcase their analytical skills, patience, and tactical prowess over the board.",
      img: chessPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02dWFyAn1DLMuMbLrSfTAXbMACNBuUWmL9ohmpufQv7kayYJ5SgEZL54xQjhQp8z88l"
    },
    {
      title: "Linggo ng Kabataan 2025: On-The-Spot Slogan Making Competition",
      date: "September 01, 2025",
      desc: "A creative visual arts competition designed to showcase youth advocacy, quick-thinking wit, and powerful messaging through graphic artistry.",
      img: sloganPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02wHCfQj4bJRQ4DrU6FE3VZJVqG6xMuVyQTEKz9iRD1ptkdQaWDa2J3r8FeSaB4Q3Wl"
    },
    {
      title: "Arroz Caldo Project",
      date: "October 25, 2024",
      desc: "A targeted community feeding program bringing warm, nutritious meals to children and residents, due to Typhoon Kristine.",
      img: arrozcaldoPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02wB5wyNoDKEQCwk5gCSeuVjSu61qHXceb6TtHjJjN77vmNNsPnAFzp6woCo6Hm3Uvl"
    },
    {
      title: "SK San Isidro Financial Independent",
      date: "July 04, 2024",
      desc: "An empowerment program focused on financial literacy, independence, and sustainable budgeting skills.",
      img: financialindependentPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0dP3wwPT9ehppcccqSmxQVuojGCrEhZauUCvUpibeoWAZhxj3xydrj2rzU9gZF1fcl"
    },
    {
      title: "Clean and Green Project",
      date: "June 23, 2024",
      desc: "An environmental cleanliness initiative focused on waste management, community clean-ups, and greening efforts to maintain a healthy ecosystem.",
      img: cleanandgreenPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0Nhef2dBFvVrUqTPCZchM14TJBkp9RTA5tkVF61JvMPnhf3PTzC4q5Y8unhbHYifwl"
    },
    {
      title: "KK Profiling",
      date: "February 25, 2024",
      desc: "A comprehensive data gathering initiative to map and profile local youth, helping the SK formulate better, targeted policies and development programs.",
      img: kkprofilingPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0z5bgYYtj4RB6EXUGqoHHDdnKoXJGd65iMpuZz4wQCrtp6huUG6QDgQu3zsaFBePAl"
    },
    {
      title: "Hair We Go: Libreng Gupit 2024",
      date: "January 29, 2024",
      desc: "A community care initiative providing free haircuts to residents, promoting personal hygiene and grooming accessibility for all age groups.",
      img: librenggupit2024Photo,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0aHQEfEYzKi5KDgPXBJ8AKiJBi4AAvwBFm3dVkB3JWU2kFDLhJM1m6tiT48MomFfnl"
    },
    {
      title: "Eye Care and Health Screening Medical Mission",
      date: "January 29, 2024",
      desc: "A vital health initiative offering free basic eye check-ups, medical screenings, and consultations to safeguard the well-being of our constituents.",
      img: eyecarePhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0aHQEfEYzKi5KDgPXBJ8AKiJBi4AAvwBFm3dVkB3JWU2kFDLhJM1m6tiT48MomFfnl"
    }
  ];

  const seminarsData = [
    {
      title: "Provincial Sangguniang Kabataan Youth Congress 2025",
      date: "June 14 - 16, 2025",
      desc: "The Sangguniang Kabataan of Barangay San Isidro attended the Provincial SK Congress 2025 held at Awesome Hotel in San Juan, La Union. The event focused on addressing leadership challenges and connecting young leaders across Laguna.",
      img: youthcongress
    },
    {
      title: "BCPC Election",
      date: "November 03, 2024",
      desc: "Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills.",
      img: bcpcPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0QW47Z94hby1h1tJACrvZbpja2fLATPjR23DZDqYzoi34ghYNRBSeurozN8aQzzAXl"
    },
    {
      title: "2nd KK Assembly and Leadership Training & Seminar",
      date: "November 10, 2024",
      desc: "Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills.",
      img: leadershipPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid09Soz5qqtCeqm3uugYuZg4hSNU8mMS5dFg26k6LobxCdURsuHBKKzUMyGrYW79AJTl"
    },
    {
      title: "Art of Branding Seminar",
      date: "November 10, 2024",
      desc: "Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills.",
      img: artofbrandingPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid09Soz5qqtCeqm3uugYuZg4hSNU8mMS5dFg26k6LobxCdURsuHBKKzUMyGrYW79AJTl"
    },
    {
      title: "HIV and AIDS Seminar",
      date: "November 10, 2024",
      desc: "Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills.",
      img: hivandaidsPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid09Soz5qqtCeqm3uugYuZg4hSNU8mMS5dFg26k6LobxCdURsuHBKKzUMyGrYW79AJTl"
    },
    {
      title: "1st Official SK Meeting",
      date: "November 26, 2023",
      desc: "Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills.",
      img: meetingPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02rpNfbdypuaachSZ43kFmBQrCobvwt9HsyBBfhFwxqLmx3bJdLNErJk7uLmfrUNMSl"
    },
    {
      title: "Sangguniang Kabataan Mandatory Training",
      date: "November 13 - 14, 2023",
      desc: "Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills.",
      img: mandatoryPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0PokvUXmNEXMj5Uyu1fuDhaomDLxrdjEq8L2ofnK1Spwne98CaXiu6rN45piYVK4nl"
    }
  ];

  const achievementsData = [
    {
      title: "Gawad Laguna 2026 Namumukod Tanging Kabataan sa Kolehiyo Nominee",
      date: "May 16, 2026",
      desc: "Celebrating the provincial-level nomination of SK Vince highlighting his exceptional leadership and student advocacy within the collegiate sector.",
      img: gawadPhoto,
      fbLink: "https://www.facebook.com/photo/?fbid=1487171103441818&set=a.648416690650601",
      isDark: true
    },
    {
      title: "Dangal ni Gat Tayaw Awardees",
      date: "April 30, 2026",
      desc: "Recognizing outstanding youth leaders and exceptional achievers from Lowland Liliw and honored at the prestigious Dangal ni Gat Tayaw.",
      img: dangalPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02rKS5ihLT3hmSSLdgkCfqek9MqhhqABhf1MDhXBXTfKZtk16oTQJcCwdFefCnEihvl",
      isDark: true
    },
    {
      title: "Fully Compliant SK Councils for November 2025",
      date: "December 17, 2025",
      desc: "The SK San Isidro is honored to be one of the five SK Councils recognized as fully compliant with the reporting requirements for November 2025.",
      img: fullcompliant2Photo,
      fbLink: "https://www.facebook.com/permalink.php?story_fbid=pfbid0xeP2r7nTe4pA5amnwHVJkXLGNWmXAE4wA4kiqeaAJSTX1BVUbxaoPyyhsoVV99S1l&id=61550593866440",
      isDark: true
    },
    {
      title: "Sk Angel Dianne M. Tiquis Passed the Sept 2025 Licensure Examination for Teachers",
      date: "December 17, 2025",
      desc: "SK Angel successfully passed the September 2025 Licensure Examination for Professional Teachers.",
      img: lptPhoto,
      fbLink: "https://www.facebook.com/photo/?fbid=1157542139900906&set=a.153869373601526",
      isDark: true
    },
    {
      title: "Fully Compliant SK Councils for July - October 2025",
      date: "November 07, 2025",
      desc: "The SK San Isidro is proud to be one of the 10 SK Councils recognized for the timely and consistent submission of monthly reports.",
      img: fullcompliant1Photo,
      fbLink: "https://www.facebook.com/permalink.php?story_fbid=pfbid02zxVL2Y4SQYNUvTDrJT38prAzm2hBSQwuGBiVWhVhFbXhXJzZUDTRrarS8mbu8PeVl&id=61550593866440",
      isDark: true
    },
    {
      title: "Liliw's Got Talent San Isidro Representative",
      date: "September 01, 2025",
      desc: "Commending our talented local representative for showcasing artistic skills, stage performance passion, and creative pride at the municipal talent stage.",
      img: kuyaivanPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02muSmrsspnhQWqsndoxLCP3Q4rgh1eEZ5UW3XuB5sfuYR26722fVPiJgUjuQ76A5Ql",
      isDark: true
    },
    {
      title: "SK Angel Tiquis Graduation",
      date: "July 05, 2025",
      desc: "Warmest congratulations to Angel Dianne M. Tiquis for graduating with a Bachelor’s degree with the distinction of Magna Cum Laude",
      img: magnaPhoto,
      fbLink: "https://www.facebook.com/photo?fbid=1025522319769556&set=a.1025521919769596",
      isDark: true
    },
    {
      title: "Liliw Federation Digital Poster Making Champion",
      date: "August 27, 2024",
      desc: "Showcasing San Isidro's pride as our creative youth secure the championship title in the municipal-wide digital poster design competition.",
      img: digitalPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02WvMJ4p4Ez9ZZSoWY9UXx9YWcGWJ48yg9gpvpZPf2xFDBWVaY87fv7rbyXg3Fc48al",
      isDark: true
    },
    {
      title: "SK Mai Mai Fresco Graduation",
      date: "July 09, 2024",
      desc: "Celebrating the graduation of SK Treasurer Mai Mai Fresco, recognizing her hard work in balancing academic excellence with community leadership.",
      img: maiPhoto,
      fbLink: "https://www.facebook.com/photo?fbid=777189201269537&set=a.153869373601526",
      isDark: true
    },
    {
      title: "SK Althea Poonin Graduation",
      date: "July 05, 2024",
      desc: "Honoring SK Kagawad Althea Poonin for reaching her academic graduation milestone while consistently dedicating herself to youth public service.",
      img: theaPhoto,
      fbLink: "https://www.facebook.com/photo?fbid=775097244812066&set=a.153869373601526",
      isDark: true
    },
    {
      title: "Basic Bookkeeping Course for SK Treasurer Completion",
      date: "January 29, 2024",
      desc: "A milestone in financial transparency as our SK Treasurer completes a specialized bookkeeping course to ensure accurate and reliable management of community funds.",
      img: bookPhoto,
      fbLink: "https://www.facebook.com/photo/?fbid=683900127265112&set=a.153869373601526",
      isDark: true
    },
    {
      title: "SK Secretary and Treasurer Mandatory Training Completion",
      date: "January 20, 2024",
      desc: "Celebrating the successful completion of the official mandatory training for our SK Secretary and Treasurer, equipping them with essential governance and leadership skills.",
      img: sksecandtreasPhoto,
      fbLink: "https://www.facebook.com/photo/?fbid=678775697777555&set=a.153869380268192",
      isDark: true
    }
  ];

  const upcomingData = [
    {
      title: "School Supplies Donation Drive 2026",
      date: "Tentative: May 17, 2026",
      desc: "Building camaraderie through sports. Registration for Sitio representatives will open soon!",
      img: schoolsuppliesPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0eUioYn6rjNYuBKDpigAinsPEoPU9KWgQonpq5hLBAhBGgT539b2EoSphRRhas9Ycl"
    }
  ];

  return (
    <main style={{
  backgroundColor: '#ffffff',
  minHeight: '100vh',
  width: '100%',
}}>

      {/* 1. HERO & NAV */}
      <section style={{
        backgroundColor: brandGreen,
        padding: 'clamp(40px, 8vw, 100px) 5%',
        textAlign: 'center',
        color: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 99,
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Ensures block elements align to the center cross-axis
      }}>
        <h1 style={{ 
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
          color: brandGold, 
          marginBottom: '25px', 
          fontWeight: '800',
          width: '100%' 
        }}>
          ACTIVITIES & PROGRAMS
        </h1>
        
        {/* Centered Sub-Navigation Row */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          gap: '12px', 
          flexWrap: 'wrap',
          width: '100%',
          maxWidth: '800px', // Prevents excessive stretching on ultra-wide screens
          margin: '0 auto'   // Centers the flex wrapper itself within the section
        }}>
          <NavButton label="Events" onClick={() => scrollToSection(eventsRef)} />
          <NavButton label="Projects" onClick={() => scrollToSection(projectsRef)} />
          <NavButton label="Seminars" onClick={() => scrollToSection(seminarsRef)} />
          <NavButton label="Achievements" onClick={() => scrollToSection(achievementsRef)} />
          <NavButton label="Upcoming" onClick={() => scrollToSection(upcomingRef)} />
        </div>
      </section>

      {/* 2. EVENTS */}
<section ref={eventsRef} style={sectionStyle}>
  <SectionTitle title="COMMUNITY EVENTS" />

  <CardGrid>
    {eventsData
      .slice(0, eventsLimit)
      .map((item, idx) => (
        <ActivityCard key={idx} {...item} />
      ))}
  </CardGrid>

  {eventsLimit < eventsData.length && (
    <LoadMoreButton
      onClick={() =>
        setEventsLimit(prev => prev + 4)
      }
    />
  )}
</section>

{/* 3. PROJECTS */}
<section
  ref={projectsRef}
  style={{
    ...sectionStyle,
    backgroundColor: '#f9fafb',
  }}
>
  <SectionTitle title="PROJECTS" />

  <CardGrid>
    {projectsData
      .slice(0, projectsLimit)
      .map((item, idx) => (
        <ActivityCard key={idx} {...item} />
      ))}
  </CardGrid>

  {projectsLimit < projectsData.length && (
    <LoadMoreButton
      onClick={() =>
        setProjectsLimit(prev => prev + 4)
      }
    />
  )}
</section>

{/* 4. SEMINARS */}
<section ref={seminarsRef} style={sectionStyle}>
  <SectionTitle title="SEMINARS & EDUCATION" />

  <CardGrid>
    {seminarsData
      .slice(0, seminarsLimit)
      .map((item, idx) => (
        <ActivityCard key={idx} {...item} />
      ))}
  </CardGrid>

  {seminarsLimit < seminarsData.length && (
    <LoadMoreButton
      onClick={() =>
        setSeminarsLimit(prev => prev + 4)
      }
    />
  )}
</section>

{/* 5. ACHIEVEMENTS */}
<section
  ref={achievementsRef}
  style={{
    ...sectionStyle,
    backgroundColor: brandGreen,
    color: 'white',
  }}
>
  <SectionTitle title="ACHIEVEMENTS & AWARDS" isDark />

  <CardGrid>
    {achievementsData
      .slice(0, achievementsLimit)
      .map((item, idx) => (
        <ActivityCard key={idx} {...item} isDark /> 
      ))}
  </CardGrid>

  {achievementsLimit < achievementsData.length && (
    <LoadMoreButton
      isDark
      onClick={() =>
        setAchievementsLimit(prev => prev + 4)
      }
    />
  )}
</section>

{/* 6. UPCOMING */}
<section ref={upcomingRef} style={sectionStyle}>
  <SectionTitle title="UPCOMING PROGRAMS" />
  <CardGrid>
    {upcomingData.map((item, idx) => (
      <ActivityCard key={idx} {...item} />
    ))}
  </CardGrid>
</section>

<Footer />
</main>
);
};
// --- Universal Load More Button Component ---
const LoadMoreButton = ({ onClick, isDark }) => (
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
    <button
      onClick={onClick}
      style={{
        padding: '12px 32px',
        borderRadius: '8px',
        border: isDark ? '2px solid #ffd000' : '2px solid #002c02',
        backgroundColor: 'transparent',
        color: isDark ? '#ffd000' : '#002c02',
        fontWeight: '700',
        fontSize: '0.9rem',
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = isDark ? '#ffd000' : '#002c02';
        e.target.style.color = isDark ? '#002c02' : '#ffffff';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.color = isDark ? '#ffd000' : '#002c02';
      }}
    >
      Load More Posts
    </button>
  </div>
);

// --- FULLY COHESIVE CARDGRID ---
const CardGrid = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center', // Centers the row if it's not full (e.g., 3 cards initial)
        alignItems: 'stretch',   // Forces all wrappers in a row to take the exact same height
        gap: '24px',
        width: '100%',
        boxSizing: 'border-box',
        padding: '20px 0',
      }}
    >
      {React.Children.map(children, (child) => {
        if (!child) return null;
        return (
          <div 
            style={{ 
              flex: '1 1 280px',    // Smoothly expands/shrinks together
              maxWidth: '320px',    // Strict uniform cap for desktop sizing
              display: 'flex',      // Essential to pass down the 'stretch' height to the card
              boxSizing: 'border-box' 
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

// --- UNIFORM HEIGHT ACTIVITYCARD ---
const ActivityCard = ({ title, date, img, desc, fbLink, isDark }) => {
  return (
    <div
      style={{
        width: '100%',
        boxSizing: 'border-box',
        backgroundColor: isDark ? 'rgba(255,255,255,0.07)' : '#ffffff',
        borderRadius: '20px',
        overflow: 'hidden',
        border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid #e2e8f0',
        boxShadow: '0 6px 24px rgba(0,0,0,0.07)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        
        // FIX: Enforces a column flex layout that stretches to 100% parent height
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1, 
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.07)';
      }}
    >
      {/* Aspect-ratio keeps all card images perfectly identical in size */}
      <div style={{ width: '100%', aspectRatio: '16/11', overflow: 'hidden', flexShrink: 0 }}>
        <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Content box fills the entire remaining vertical space */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: isDark ? '#ffd000' : '#718096', marginBottom: '8px', flexShrink: 0 }}>
          {date}
        </span>
        
        {/* Strict line-clamp limits prevent uneven heights from short vs long text */}
        <h3 style={{ 
          fontSize: '1.05rem', 
          fontWeight: '800', 
          marginBottom: '8px', 
          color: isDark ? '#ffffff' : '#1a202c', 
          minHeight: '2.6em', // Forces a 2-line baseline height even if text is short
          lineClamp: 2, 
          WebkitLineClamp: 2, 
          display: '-webkit-box', 
          WebkitBoxOrient: 'vertical', 
          overflow: 'hidden' 
        }}>
          {title}
        </h3>
        
        <p style={{ 
          fontSize: '0.85rem', 
          color: isDark ? '#cbd5e0' : '#4a5568', 
          lineHeight: '1.5', 
          marginBottom: '20px', 
          flexGrow: 1, // Pushes the button straight down to the bottom boundary
          lineClamp: 4, 
          WebkitLineClamp: 4, 
          display: '-webkit-box', 
          WebkitBoxOrient: 'vertical', 
          overflow: 'hidden' 
        }}>
          {desc}
        </p>
        
        {fbLink && (
          <a 
            href={fbLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              display: 'inline-block', 
              width: '100%',
              textAlign: 'center',
              padding: '11px 15px', 
              backgroundColor: '#1877f2', 
              color: '#ffffff', 
              fontWeight: '700', 
              borderRadius: '10px', 
              textDecoration: 'none', 
              fontSize: '0.8rem', 
              transition: 'background-color 0.2s',
              boxSizing: 'border-box',
              marginTop: 'auto', // Locks button flush against the card base
              flexShrink: 0
            }} 
            onMouseEnter={(e) => e.target.style.backgroundColor = '#166fe5'} 
            onMouseLeave={(e) => e.target.style.backgroundColor = '#1877f2'}
          >
            View on Facebook ↗
          </a>
        )}
      </div>
    </div>
  );
};
// --- Nav Button ---
const NavButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: 'clamp(6px, 1.5vw, 8px) clamp(12px, 2.5vw, 18px)',
      borderRadius: '25px',
      textAlign: 'center',
      border: '1px solid #ffd000',
      backgroundColor: 'transparent',
      color: '#ffd000',
      fontWeight: '700',
      cursor: 'pointer',
      transition: '0.3s',
      fontSize: 'clamp(1rem, 1.8vw, 0.85rem)',
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = '#ffd000';
      e.target.style.color = '#002c02';
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = 'transparent';
      e.target.style.color = '#ffd000';
    }}
  >
    {label}
  </button>
);

const Footer = () => (
  <footer style={{ backgroundColor: '#002c02', padding: '60px 10%', color: '#ffffff' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' }}>
      <div style={{ flex: '1 1 300px' }}>
        <h2 style={{ color: '#ffd000', margin: '0 0 15px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>BARANGAY SAN ISIDRO</h2>
        <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.6' }}>
          Official Community Portal for a progressive and transparent San Isidro Liliw, Laguna. 
        </p>
      </div>
      <div style={{ flex: '1 1 200px' }}>
        <h4 style={{ color: '#ffd000', marginBottom: '20px' }}>Contact Us</h4>
        <p style={{ fontSize: '0.85rem' }}>📍 Brgy. Hall, San Isidro, Liliw, Laguna</p>
        <p style={{ fontSize: '0.85rem' }}>📧 @sangguniangkabataanngsanisidro@gmail.com</p>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.8rem', opacity: 0.6 }}>
      © 2026 Barangay San Isidro. Designed and Developed by SK Vince M. Villanueva.
    </div>
  </footer>
);

export default Activities;