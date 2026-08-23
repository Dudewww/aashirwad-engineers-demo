export type ProductFAQ = {
  question: string;
  answer: string;
};

export const productFaqs: Record<string, ProductFAQ[]> = {
  "hot-air-oven": [
    {
      question: "What is a hot air oven used for in raffia tape production?",
      answer: "A hot air oven is used for the stretching and annealing stages of raffia tape and HDPE tape production. It provides uniform heated air across the full tape width, which is essential for achieving consistent tensile strength, elongation properties, and denier uniformity in the finished tape product.",
    },
    {
      question: "What temperature range does the Aashirwad Engineers hot air oven support?",
      answer: "The hot air oven supports temperatures up to 250°C with ±1°C accuracy through digital PID control. The power load ranges from 18 to 72 kW depending on production requirements and the configured heating zone length.",
    },
    {
      question: "What is the heating zone length of the hot air oven?",
      answer: "The standard hot air oven features a 3000-8000 mm heating zone. Custom lengths are available based on production line requirements and tape processing speed. Contact Aashirwad Engineers for application-specific configurations.",
    },
    {
      question: "Can the hot air oven be used for HDPE tape production?",
      answer: "Yes. The hot air oven is used in both raffia tape and HDPE flat tape production lines. It is also suitable for strapping band production and monofilament stretching applications where uniform hot air treatment is required.",
    },
    {
      question: "How is temperature uniformity maintained in the hot air oven?",
      answer: "Temperature uniformity is maintained through a High-Velocity Air Circulation System that circulates heated air through the entire heating zone. A digital PID controller continuously monitors and adjusts heater output to maintain ±1°C accuracy across the full tape width.",
    },
    {
      question: "Does Aashirwad Engineers test the hot air oven before delivery?",
      answer: "Yes. Every hot air oven is assembled and tested at the Aashirwad Engineers manufacturing facility. Pre-delivery quality checks include thermal uniformity verification, control system calibration, blower performance testing, and safety interlock validation.",
    },
  ],

  "automatic-cutting-stitching-machine": [
    {
      question: "What is an automatic cutting and stitching machine?",
      answer: "An automatic cutting and stitching machine combines precision fabric cutting with synchronized bottom-seam stitching in a single continuous operation. It automates the bag-making process for woven sack production, eliminating the need for separate cutting and stitching stations.",
    },
    {
      question: "What types of bags can the cutting and stitching machine produce?",
      answer: "The machine produces PP and HDPE woven bags used for cement, fertilizers, grain, chemicals, animal feed, sugar, and industrial material handling. It handles fabric widths up to 800 mm with programmable bag lengths for different product specifications.",
    },
    {
      question: "What is the production speed of the automatic cutting and stitching machine?",
      answer: "The machine operates at speeds up to 20 bags per minute, depending on bag length and material type. The servo-driven feed system ensures consistent bag dimensions and minimal material waste at production speeds.",
    },
    {
      question: "Does the machine include PLC control?",
      answer: "Yes. The machine includes a PLC control panel with touchscreen HMI for real-time monitoring of production counts, speed settings, fault diagnostics, and bag length programming. This enables precise control and production data tracking.",
    },
    {
      question: "What thread type does the stitching head use?",
      answer: "The stitching head uses heavy-duty industrial thread suitable for closing woven PP and HDPE bags. The thread type and tension are adjustable for different bag weights and closure requirements. Thread changes can be performed quickly through accessible maintenance points.",
    },
    {
      question: "Can bag lengths be changed during production?",
      answer: "Yes. Bag lengths are programmable through the PLC control panel. Changeover between different bag lengths can be performed through the touchscreen interface without mechanical adjustments, minimizing downtime between product runs.",
    },
  ],

  "combined-hot-air-oven-hot-plate": [
    {
      question: "What is a combined hot air oven and hot plate?",
      answer: "A combined hot air oven and hot plate integrates two heating systems in one machine frame: a convection oven for hot air stretching and a contact hot plate for annealing or surface treatment. This eliminates the need for two separate machines in the production line.",
    },
    {
      question: "What are the advantages of a combined system over separate units?",
      answer: "The combined system reduces floor space requirements, shortens the tape transit distance between heating stages, improves temperature consistency by minimizing the gap between processing zones, and reduces total energy consumption compared to operating two separate heating units.",
    },
    {
      question: "Can the oven and hot plate sections be controlled independently?",
      answer: "Yes. Both sections operate with independent PID temperature controllers, allowing different temperature profiles for the oven and plate stages. This is essential for applications where the stretching temperature differs from the annealing temperature.",
    },
    {
      question: "What is the total power consumption?",
      answer: "The combined system has a total power consumption of 32 kW. The oven section features a 2500 mm heating zone, and the hot plate section provides a 1200 × 600 mm chrome-plated contact surface.",
    },
    {
      question: "What production lines is this machine suited for?",
      answer: "The combined system is particularly suited for high-tenacity raffia tape lines, slit-film tape production, and HDPE flat tape manufacturing where both hot air stretching and contact annealing are required in sequence.",
    },
    {
      question: "Is the hot plate surface chrome plated?",
      answer: "Yes. The hot plate section features a chrome-plated surface for durability and consistent contact heating. The insulated oven section minimizes heat loss. Both sections are assembled and tested at the Aashirwad Engineers facility before dispatch.",
    },
  ],

  "roll-to-roll-center-gusset-machine": [
    {
      question: "What does a roll to roll center gusset machine do?",
      answer: "A roll to roll center gusset machine creates center-fold gussets in tubular woven fabric as it passes continuously from one roll to another. The gussets transform flat tubular rolls into gusseted fabric suitable for producing box-type or block-bottom bags.",
    },
    {
      question: "What fabric types can the gusset machine process?",
      answer: "The machine processes HDPE and PP woven fabric in tubular form. It is compatible with fabric from standard circular looms used in woven sack manufacturing plants.",
    },
    {
      question: "What is the maximum processing speed?",
      answer: "The machine operates at speeds up to 80 meters per minute with an AC frequency variable drive system that provides precise speed synchronization with upstream and downstream equipment in the production line.",
    },
    {
      question: "What gusset depth range is available?",
      answer: "The gusset depth is adjustable from 25 to 100 mm, accommodating different bag specifications. The machine handles fabric widths up to 1200 mm.",
    },
    {
      question: "What industries use gusseted woven bags?",
      answer: "Gusseted woven bags are used in cement packaging, chemical packaging, fertilizer bags, food products, and animal feed where block-bottom or flat-bottom bag construction provides better stacking, filling, and palletizing performance compared to flat bags.",
    },
    {
      question: "Is the machine designed for continuous operation?",
      answer: "Yes. The roll-to-roll design enables continuous operation without stopping for batch changes. The machine is built with heavy-gauge steel frames and industrial-grade bearings for multi-shift continuous operation.",
    },
  ],

  "hydraulic-bale-press-machine": [
    {
      question: "What materials can the hydraulic bale press compress?",
      answer: "The bale press handles PP woven fabric scraps, HDPE film waste, cotton waste, paper, textile waste, and other compressible industrial materials. It is used across woven sack manufacturing, plastic processing, packaging, and waste management industries.",
    },
    {
      question: "What press capacities are available?",
      answer: "The hydraulic bale press is available in 50-ton and 100-ton configurations. The press produces compressed bales sized 900 × 600 × 600 mm with a 45-second cycle time.",
    },
    {
      question: "What type of hydraulic system does the bale press use?",
      answer: "The bale press uses a double-stage vane pump hydraulic system that delivers smooth, consistent pressing force throughout the compression stroke. The hydraulic system includes pressure relief valves and flow control for safe, repeatable operation.",
    },
    {
      question: "Is the bale press suitable for waste management?",
      answer: "Yes. The bale press is widely used in waste management facilities for compressing textile waste, plastic waste, paper waste, and mixed industrial materials into manageable bales for storage, transportation, and recycling.",
    },
    {
      question: "What control options are available?",
      answer: "The bale press offers manual operation and semi-automatic cycling with adjustable pressure settings. The heavy-duty channel and plate construction provides structural rigidity for sustained high-pressure operation across multiple shifts.",
    },
    {
      question: "Does Aashirwad Engineers test the hydraulic system before delivery?",
      answer: "Yes. Each bale press is manufactured at the Aashirwad Engineers manufacturing facility with in-house hydraulic assembly and pressure testing completed before dispatch. This ensures reliable hydraulic performance from the first operating cycle.",
    },
  ],

  "hot-plate": [
    {
      question: "What is a hot plate used for in tape production?",
      answer: "A hot plate provides direct contact heating for tape annealing, surface smoothing, and controlled processing in raffia tape, HDPE tape, and monofilament production lines. The flat heated surface provides uniform contact temperatures across the full material width.",
    },
    {
      question: "What surface finishes are available?",
      answer: "The hot plate is available with hard chrome plating for durability and scratch resistance, or optional Teflon coating to prevent material adhesion during processing of sticky or heat-sensitive polymers. The surface finish is selected based on the material being processed.",
    },
    {
      question: "What is the maximum operating temperature?",
      answer: "The hot plate operates up to 200°C with ±2°C accuracy maintained across the 3000–8000 mm Length (Custom Built to Order) heating surface through a digital PID controller and embedded strip heaters.",
    },
    {
      question: "Can the hot plate be retrofitted into existing production lines?",
      answer: "Yes. The compact footprint and inline design make the hot plate suitable for retrofitting into existing extrusion and stretching lines where additional heating stages are required without major layout changes.",
    },
    {
      question: "Where does the hot plate fit in the production line?",
      answer: "The hot plate typically integrates between the oven stage and the winding section in a tape production line. It provides the annealing or surface treatment stage after the primary stretching process.",
    },
  ],

  "turbo-mixer": [
    {
      question: "What is a turbo mixer used for in plastic processing?",
      answer: "A turbo mixer performs intensive high-shear mixing of plastic granules, color masterbatch, UV stabilizers, calcium carbonate fillers, and other additives before extrusion processing. Uniform pre-mixing ensures consistent product quality in downstream tape and film production.",
    },
    {
      question: "What batch capacities are available?",
      answer: "The turbo mixer is available in 100 kg to 500 kg batch capacities with 15 HP and 30 HP motor options. Complete batch homogenization is achieved in 5 to 8 minutes depending on material type and filler loading.",
    },
    {
      question: "What safety features does the turbo mixer include?",
      answer: "Safety features include a locking lid mechanism that prevents operation when the lid is open, and motor overload protection. The discharge is through a bottom gate valve for controlled batch release and rapid changeover.",
    },
    {
      question: "Can the turbo mixer handle abrasive filler compounds?",
      answer: "Yes. The mixing chamber is constructed from wear-resistant materials specifically designed to handle abrasive filler compounds such as calcium carbonate without excessive chamber wear.",
    },
    {
      question: "Is the mixer balanced before delivery?",
      answer: "Yes. Each turbo mixer is assembled and dynamically balanced at the Aashirwad Engineers facility. Vibration testing is completed before delivery to ensure smooth operation under loaded conditions across all speed ranges.",
    },
  ],

  "trim-cutter": [
    {
      question: "What does a trim cutter do?",
      answer: "A trim cutter continuously removes edge waste from woven fabric, PP tape, HDPE film, and other web materials during production. It produces clean, consistent fabric edges that improve downstream converting performance.",
    },
    {
      question: "What blade options are available?",
      answer: "The trim cutter offers rotary and razor blade options to suit different material types and cutting requirements. Blade selection depends on the material being trimmed and the required edge finish quality.",
    },
    {
      question: "Can the trim cutter be mounted on existing equipment?",
      answer: "Yes. The universal mounting bracket enables installation on virtually any production line without modification to existing equipment frames. It is suitable for both new installations and retrofitting existing lines.",
    },
    {
      question: "What trim width range is adjustable?",
      answer: "The trim width is adjustable from 5 to 50 mm, accommodating different fabric specifications and edge waste requirements across various production applications.",
    },
    {
      question: "Does the trim cutter include waste removal?",
      answer: "An optional venturi suction system automatically removes cut trim waste from the cutting zone, preventing accumulation that could interfere with downstream processing operations.",
    },
  ],

  "twist-centre-gusset-device-machine": [
    {
      question: "What is a twist/centre gusset device?",
      answer: "A twist/centre gusset device is a specialized inline attachment that creates center gusset folds in tubular woven fabric directly on circular looms and converting lines, without requiring a separate standalone gusset machine.",
    },
    {
      question: "How does it differ from a roll-to-roll gusset machine?",
      answer: "The twist/centre gusset device integrates as an add-on to existing loom or converting equipment, making it more cost-effective for facilities producing moderate volumes of gusseted bags. A roll-to-roll gusset machine is a standalone unit designed for high-volume continuous gusseting.",
    },
    {
      question: "How is gusset depth adjusted?",
      answer: "Gusset depth is adjusted through a manual hand-wheel system that allows operators to set precise gusset depths during production, accommodating different bag specifications without stopping the production line.",
    },
    {
      question: "What material are the forming plates made from?",
      answer: "The forming plates are manufactured from Stainless Steel 304 for corrosion resistance and smooth fabric contact. This prevents snags, surface damage, and contamination of the woven material during gusset formation.",
    },
    {
      question: "Is the device compatible with standard raffia looms?",
      answer: "Yes. The device is compatible with standard raffia looms and converting equipment commonly used in woven sack manufacturing plants. Contact Aashirwad Engineers to confirm compatibility with your specific equipment.",
    },
  ],

  "cutting-machine": [
    {
      question: "What is the cutting machine used for?",
      answer: "The cutting machine is a semi-automatic system for cutting PP and HDPE woven fabrics to specific bag lengths before stitching. It serves as a standalone cutting station or integrates into semi-automated bag production lines.",
    },
    {
      question: "What safety features does the cutting machine include?",
      answer: "The cutting machine features a dual-hand trigger safety system that prevents accidental operation, requiring both operator hands to be positioned on the control triggers before the cutting cycle initiates.",
    },
    {
      question: "What is the maximum cutting width?",
      answer: "The cutting machine handles fabric widths up to 1000 mm. The heat-treated steel blades maintain cutting edge sharpness through extended production runs across PP, HDPE, and blended woven materials.",
    },
    {
      question: "Is the cutting machine suitable for multiple bag sizes?",
      answer: "Yes. The semi-automatic operation provides a balance between production speed and operator control, making it suitable for facilities producing multiple bag sizes with frequent changeovers during the production shift.",
    },
    {
      question: "What industries use this cutting machine?",
      answer: "Industries include woven sack conversion, flexible packaging, agricultural bag production, and industrial material handling. The machine handles PP, HDPE, and blended woven fabrics for various bag applications.",
    },
  ],

  "fabric-opener-machine": [
    {
      question: "What does a fabric opener machine do?",
      answer: "A fabric opener machine converts folded or rolled tubular woven fabric into flat, open-width material. This preparation is necessary before downstream processing stages such as lamination, printing, cutting, and coating.",
    },
    {
      question: "Why is fabric opening necessary in woven sack production?",
      answer: "Tubular fabric from circular looms must be opened and flattened before lamination, printing, or coating. Without proper opening and tension control, downstream operations experience wrinkles, tracking errors, and uneven processing results.",
    },
    {
      question: "What is the maximum fabric width the machine handles?",
      answer: "The fabric opener handles rolls up to 1500 mm width at unwinding speeds up to 60 meters per minute, with a pneumatic friction brake system providing controlled tension throughout the unwinding process.",
    },
    {
      question: "Is automatic tension control available?",
      answer: "Yes. Optional automatic tension control maintains consistent fabric feed regardless of roll diameter changes as the material is consumed, ensuring uniform tension from full roll to empty core.",
    },
    {
      question: "What materials can the fabric opener handle?",
      answer: "The machine handles PP and HDPE woven fabrics, non-woven materials, and laminated composites. It is used in woven sack lamination lines, fabric printing stations, and coating operations across multiple industries.",
    },
  ],
};
