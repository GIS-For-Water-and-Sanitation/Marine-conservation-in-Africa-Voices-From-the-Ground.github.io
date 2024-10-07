var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoia2FpbmV0a29uYW55dW4iLCJhIjoiY2tyeWgzM3pwMDNtdTJwcGo5Y2phMGMxciJ9.pHBXMyVp0RyMwOHmU3I0Lw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Marine conservation in Africa',
    subtitle: '- Voices From the Ground',
    //image: 'E:/Software/storytelling-main/storytelling-main/src/images/people.png',
    byline: 'By Geoffrey Kirui',
    //footer: 'Source: GIS For Water and Sanitation',
    footer: 'Source: Marine conservation in Africa - Voices From the Ground Story Map by <a href="https://gisforwaterandsanitation.odoo.com/">GIS For Water and Sanitation</a>',
    chapters: [
      {
          id: 'slug-style1-id',
          alignment: 'left',
          hidden: false,
          title: 'INTRODUCTION',
          //image: './path/to/image/source.png',
          image: 'https://raw.githubusercontent.com/geoffreykirui/geoffreykirui.github.io/main/images/waspa.png',
          description: 'In 2012, WASPA embarked on an intensive utility-led ‘peer-to-peer’ benchmarking programme – supported by Vitens Evides International (VEI), VEWIN (WASPA counterpart in The Netherlands) SNV Kenya, Kenya Water Institute (KEWI) and other partners (WASREB and GIZ). Through a yearly performance assessment (comparison) exercise1 -acquired insight in utility performance2 and ‘leading practices’ of peers- serves to support you in developing or refining utility-specific Performance Improvement Plans (PIPs). The good practices dissemination and awards workshop was organized in Nairobi, Kenya, on 5 November 2015 with a view to acknowledge achievements of trendsetters in the Peer-to-Peer Learning under the 4 year WASPA benchmark program',
          location: {
            center: [13.76227, 4.41428],
            zoom: 2.52,
            pitch: 0.00,
            bearing: 0.00
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
              // {
              //     layer: 'layer-name',
              //     opacity: 1,
              //     duration: 5000
              // }
          ],
          onChapterExit: [
              // {
              //     layer: 'layer-name',
              //     opacity: 0
              // }
          ]
      },
      {
          id: 'glacier-np',
          alignment: 'full',
          title: 'Sharing of theme - specific lead practices and awards',
          image: 'https://raw.githubusercontent.com/geoffreykirui/geoffreykirui.github.io/main/images/people.png',
          description: 'NRW Management and reductions, Service Levels Improvements, and Operations & Maintenance Cost Recovery',
          location: {
            center: [37.78782, 1.01637],
            zoom: 4.97,
            pitch: 0.00,
            bearing: 0.00
          },
              mapAnimation: 'flyTo',
              rotateAnimation: false,
              callback: '',
              onChapterEnter: [],
              onChapterExit: []
          },
          {
              id: 'other-identifier17',
              alignment: 'full',
              hidden: false,
              title: 'Sharing of theme - specific lead practices and awards: ',
              //description: 'On behalf of the Executive Board, the Secretariat and all Members, the WASPA Chairman, wishes to thank all the WSPs who prepared to make their sharing during good practices dissemination workshop. Inevitably this would not have been a success without the active participation of other members (both WSPs and other) who attended the workshop. Special appreciation is also extended to the program’s implementing partners who provided technical and financial resources to develop the program that is currently anchored in the WASPA Strategic Plan 2013 – 2017. The European Union, Vitens Evides International, SNV Kenya, KEWI, GIZ as well as WASREB have been very close to the heart of the program. It is our hope that this product/service will be facilitated to benefit all the WSPs now and in the future. ',
              //image: 'E:/Software/storytelling-main/storytelling-main/src/images/kakamega.png',
              location: {
                center: [38.32850, 1.63641],
                zoom: 5.40,
                pitch: 60.00,
                bearing: 0.00
              },
              mapAnimation: 'flyTo',
              rotateAnimation: false,
              callback: '',
              onChapterEnter: [],
              onChapterExit: []
          },
        {
            id: 'slug-style-id',
            alignment: 'full',
            hidden: false,
            title: 'A. NRW Management/reductions:',
            //image: './path/to/image/source.png',
            //image: './path/to/image/waspa people.png',
            description: 'The Best improved or trendsetter in NRW reduction and Management award was presented to Oloolaiser by Luuk Veens, Financial Director VEI.',
            location: {
              center: [36.75344, -1.39498],
              zoom: 14.06,
              pitch: 45.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: '1. GIS in Asset Management & Development by Muranga WSP',
            //image: './path/to/image/source.png',
            description: 'GIS is useful in water utilities in several areas such as the need to Know location pipe networks within the area of jurisdiction, to Know spatial locations of water appurtenance, Rerouting and zoning exercise, Determining water and sewerage area coverage and priority areas. To show pressure distribution, burst and leakages prone area.',
            location: {
              center: [37.15928, -0.72014],
              zoom: 14.07,
              pitch: 45.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier1',
            alignment: 'left',
            hidden: false,
            title: '2. From talking to reducing NRW by Oloolaiser WSP',
            //image: './path/to/image/source.png',
            description: 'Factors necessitating action in the utility. Increased Non Revenue Water Levels both Physical & Commercial Loss , Non digitized systems/Networks, Increased water demand vis a vis supply, Lack of Capacity in addressing NRW challenges strategically, Increased Costs in Expenditure vis a vis revenue collection',
            location: {
              center: [36.75344, -1.39498],
              zoom: 14.06,
              pitch: 45.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier2',
            alignment: 'right',
            hidden: false,
            title: '3. System Hydraulic Modeling by Kisumu WSP',
            image: 'https://raw.githubusercontent.com/geoffreykirui/geoffreykirui.github.io/main/images/epanet.png',
            description: 'Use of EPANET an open source hydraulic modelling software. For operational studies and strategic scenario studies Operational examples. Locate and quantify NRW by comparing the difference between expected and real pressures and flows, See the effects of operating valves in the network for example when a pipe or area has to be shut down for maintenance, Optimization of the operation of reservoirs, pumps and tanks in the system, and determining whether there is enough pressure for new connections',
            location: {
              center: [34.77223, -0.09936],
              zoom: 11.79,
              pitch: 45.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier3',
            alignment: 'full',
            hidden: false,
            title: 'B.Service Levels Improvements:',
            description: 'The Best improved or trendsetter in Service Level improvement award was presented to Meru WSP by Eng. Robert Gakubia – CEO WASREB',
            location: {
              center: [37.64974, 0.05055],
              zoom: 15.37,
              pitch: 45.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1other-identifier3',
            alignment: 'left',
            hidden: false,
            title: '4. Consumer Satisfaction Survey by Nakuru WSP',
            description: 'The general goal of the Customer Satisfaction Survey in Nakuru WSP is usually to achieve the following. Assessing what Nawassco customers feel of the service delivery, identifying opportunities to improve the customer’s relations, Assessing the customers’ satisfaction levels and ways of boosting it. The outcomes and observations for improvements were Improve system, speed and efficiency in response to customer complaints, expand the prepaid metering services in Low Income areas to allow greater reduction of water loss and also prudent management to maximize company earnings, allow for community involvement in water projects and also offer clear information on the same especially in cases of partnerships with CDF and other potential donors and partners and finally to Improve water and sanitation services',
            location: {
              center: [36.06553, -0.29019],
              zoom: 10.69,
              pitch: 35.50,
              bearing: -0.11
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier5',
            alignment: 'right',
            hidden: false,
            title: '5. The “Customer is King” by Meru WSP (MEWASS) Why an integrated system in customer management',
            description: 'Manual system of customer complaints resolution in MEWASS was prone to missing documents, time wasting in tracing the level of customer issue resolution and lack of accurate and timely reports on the customer issue resolution. Lack of ease of cross referencing in different aspects of customer details e.g. meter, payment, profile, billing, meter readings, tariff and issues management. With Customer Information Management System therefore realized, efficient information sharing, reducing staff dependence while working Challenges during implementation, staff computer literacy levels were low, lack of enough computer equipment, lack of supervisors full support of the system',
            location: {
              center: [37.64987, 0.05045],
              zoom: 14.29,
              pitch: 4.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier6',
            alignment: 'left',
            hidden: false,
            title: '6. Improved Consumer Dialogue by Mavoko WSP',
            description: 'Key factors in customer dialogue include the customer complaints (response time) and compliments registration, tracking action, billing accuracy, timeliness, disconnection notice, supply interruptions or failures,  finance ease of payments, stakeholder involvement in water issues, collaboration with WAGs, access to service existing and planned new connections, Cashless office mobile money, direct banking. Tools are in place to improve dialogue.Improved billing - 98% of our customers receive their bills, Cashless office – 85% domestic customers pay on MPESA hence reduction of cash risks, improved banking and expenditure controls, reduced costs and/or improved revenues, Improved customer complaints registration – they have a stores-technical-customer care integrated platform in addition to billing software, 100% of complaints registered through the system real-time enhanced data accuracy, 100% complaints updated through the system result in greater accountability, Reduction on customer complains related to undelivered bills, Significant reduction in expenses, cost for printing and delivery has been eliminated, Re-focus of meter readers in more productive areas, Customers can access and re-print the bills. Customers have access to their bills irrespective of location.',
            location: {
              center: [36.97629, -1.44772],
              zoom: 13.64,
              pitch: 4.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier7',
            alignment: 'full',
            hidden: false,
            title: 'C. Operations & Maintenance Cost Recovery:',
            description: 'The Best improved or trendsetter in O&M Cost coverage improvement award was presented to Embu WSP by Dirk Schaefer Program Manager - GIZ ',
            location: {
              center: [37.45726, -0.53845],
              zoom: 14.06,
              pitch: 4.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier8',
            alignment: 'right',
            hidden: false,
            title: '7. ICT in Billing, collection & communication by Embu WSP',
            description: 'ICT systems in place for Accounting software they use Sage pastel, Billing software – Majics, SMS billing, GIS software, M-PESA for collection. ACCOUNTING SOFTWARE - sage pastel Sage pastel has the following modules, accounting made reporting easy, multiple reports, payroll made easily uploaded, manage human resource data thus able to have all staff data centrally, Stock management module – linked directly into system upon issue of stocks they are updated All modules are linked into system EWASCO started using SMS billing in 2010. Benefits: Cost effective a bill costs Kshs 1.00 instead of postage cost of Kshs 30.00, Saves time to send bills only seconds and batch of bills are sent, Easy to communicate with all customers now have all contact for the customers, maintains report of bills sent for reference.',
            location: {
              center: [37.45726, -0.53845],
              zoom: 14.06,
              pitch: 4.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier9',
            alignment: 'left',
            hidden: false,
            title: '8. Integrating Technology in water & sewer bill payment By Nairobi CWSC',
            description: 'Leveraging on Technology with various tools; I. Mobile field Assistant (MFA): For monitoring and managing field operations, Meter readings, Disconnections and reconnections processes, Customer contracting module in preparation II. Jisomee Mita: The system allows the customer to use a basic mobile phone to Submit Meter Readings by SMS, to have multiple billing in one cycle (a month), Pay for Water as they use, Query Account Balance, Pay loan, Add/Remove another phone from the account III. E-billing Starting 1st January 2015, all bills for customers are now sent electronically i.e. SMS billing, Email (PDF) billing especially for corporate customers, Over 170,000 customers have registered for e-billing IV. Automatic water dispensers: 4 ATM water dispensers installed in Mathare Mashimoni on pilot V. Maji voice is a mobile based customer complaint handling and management system, a platform for two-way communications between citizens and water providers using affordable, accessible and user-friendly technologies; developed by WASREB with support of World Bank,  In NCWSC the workflow is based on the customer service charter; For NCWSC customers access MAJIVOICE through USSD *888# on mobile phones VI. Tambua services  assist in identifying imposters who masquerade as employees of NCWSC SMS sent through USSD *888#, media campaigns have been done to educate customers.',
            image: 'https://raw.githubusercontent.com/geoffreykirui/geoffreykirui.github.io/main/images/revenue.png',
            location: {
              center: [36.78689, -1.27786],
              zoom: 11.43,
              pitch: 4.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier10',
            alignment: 'right',
            hidden: false,
            title: '9. Increase in O&M Cost coverage by Kericho WSP:',
            description: 'highlighted the following - Issues: Everyone clueless of the Spatial Location of most assets, High NRW – Less Billings/Revenue Collection, Poor Customer Management/Communication - Complain Resolution, Porous and Poor Customer Data Base, Very high O&M costs, Poor Data Management and Wrong Reporting. Change Management and Integrity issues among staff. They embarked on the following Process: Customer identification survey (billing problems, unbilled metered connectionS, illegal connections, unfulfilled reconnection requesT, leaking pipes, potential customers, contacts and details foe customers). integrity management toolbox (integrity change process, Integrity instruments, integrity risks, change management, operation and performances improvement, team work, job cards, all outdoor staffs capture all their works with coordinates and materials used.) Strategic mass disconnection (timely action time, result oriented, proper planning and execution)',
            location: {
              center: [35.28255, -0.37023],
              zoom: 15.27,
              pitch: 4.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier11',
            alignment: 'full',
            hidden: false,
            title: 'Way forward on the WASPA benchmark program:',
            description: 'Following successful actualization of the WASPA’s utility led benchmark program in the Financial Year 2013/2014 and with growing of participation of the utilities reaching 28 WSPs, plans are underway to accommodate all interested (voluntary) WSPs in coming years, WASPA is making heady steps to improve the capacity of the secretariat to manage the processes especially those of data management (collection, analysis & presentation) and to be able to provide need – based and targeted support to the WSPs to enhance their performance improvement agenda. This will include Support in use of NRW reduction equipment available within the Association, In house and on the field trainings on identified topics, Facilitation of technical task group activities bringing together WSPs participating in the peer learning curve, WSPs will fully finance (through - WASREB has allowed for tariff approvals) PIP implementation costs as well participation charges for those WSPs continuing in the peer to peer benchmark program. WASPA aims at continuing to mobilize for necessary technical assistance from lead implementing partners among them VEI, SNV and KEWI especially under the auspices of ‘Performance Enhancement of Water Utilities in Kenya (PEWAK) through benchmarking, collective learning and innovative financing (RVO), It is forecast that 25 participating WSPs will show better than average performance (i.e. NRW), including a sales increase of 15% and improved service levels (i.e. Low Income Community focus), WASPA will be investing in pro – poor support to WSPs. Accelerated improvement in (Low Income Community) water and sanitation services to Low Income Areas households, with access strategies developed for at least 750,000 people',
            location: {
              center: [35.28255, -0.37023],
              zoom: 15.27,
              pitch: 4.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier12',
            alignment: 'left',
            hidden: false,
            title: 'Technical Manager from KEWASCO, Eng Peter Karanja responding to questions regarding “how do you ensure sustained improved integrity among staffs?” during good practices awards diner Nov, 2015',
            //description: 'Following successful actualization of the WASPA’s utility led benchmark program in the Financial Year 2013/2014 and with growing of participation of the utilities reaching 28 WSPs, plans are underway to accommodate all interested (voluntary) WSPs in coming years, WASPA is making heady steps to improve the capacity of the secretariat to manage the processes especially those of data management (collection, analysis & presentation) and to be able to provide need – based and targeted support to the WSPs to enhance their performance improvement agenda. This will include Support in use of NRW reduction equipment available within the Association, In house and on the field trainings on identified topics, Facilitation of technical task group activities bringing together WSPs participating in the peer learning curve, WSPs will fully finance (through - WASREB has allowed for tariff approvals) PIP implementation costs as well participation charges for those WSPs continuing in the peer to peer benchmark program. WASPA aims at continuing to mobilize for necessary technical assistance from lead implementing partners among them VEI, SNV and KEWI especially under the auspices of ‘Performance Enhancement of Water Utilities in Kenya (PEWAK) through benchmarking, collective learning and innovative financing (RVO), It is forecast that 25 participating WSPs will show better than average performance (i.e. NRW), including a sales increase of 15% and improved service levels (i.e. Low Income Community focus), WASPA will be investing in pro – poor support to WSPs. Accelerated improvement in (Low Income Community) water and sanitation services to Low Income Areas households, with access strategies developed for at least 750,000 people',
            image: 'https://raw.githubusercontent.com/geoffreykirui/geoffreykirui.github.io/main/images/kericho.png',
            location: {
              center: [38.32850, 1.63641],
              zoom: 5.40,
              pitch: 60.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier22',
            alignment: 'right',
            hidden: false,
            title: 'WASPA’s NTA’s explaining to WSPs and partners on the realized targets under the EU financed period and on the future outlook of the benchmark program',
            //description: 'Following successful actualization of the WASPA’s utility led benchmark program in the Financial Year 2013/2014 and with growing of participation of the utilities reaching 28 WSPs, plans are underway to accommodate all interested (voluntary) WSPs in coming years, WASPA is making heady steps to improve the capacity of the secretariat to manage the processes especially those of data management (collection, analysis & presentation) and to be able to provide need – based and targeted support to the WSPs to enhance their performance improvement agenda. This will include Support in use of NRW reduction equipment available within the Association, In house and on the field trainings on identified topics, Facilitation of technical task group activities bringing together WSPs participating in the peer learning curve, WSPs will fully finance (through - WASREB has allowed for tariff approvals) PIP implementation costs as well participation charges for those WSPs continuing in the peer to peer benchmark program. WASPA aims at continuing to mobilize for necessary technical assistance from lead implementing partners among them VEI, SNV and KEWI especially under the auspices of ‘Performance Enhancement of Water Utilities in Kenya (PEWAK) through benchmarking, collective learning and innovative financing (RVO), It is forecast that 25 participating WSPs will show better than average performance (i.e. NRW), including a sales increase of 15% and improved service levels (i.e. Low Income Community focus), WASPA will be investing in pro – poor support to WSPs. Accelerated improvement in (Low Income Community) water and sanitation services to Low Income Areas households, with access strategies developed for at least 750,000 people',
            image: 'https://raw.githubusercontent.com/geoffreykirui/geoffreykirui.github.io/main/images/job.png',
            location: {
              center: [37.44270, 0.46336],
              zoom: 5.25,
              pitch: 4.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier23',
            alignment: 'left',
            hidden: false,
            title: 'Resident Project Manager – Reint Jan (VEI) giving his observations and remarks',
            //description: 'Following successful actualization of the WASPA’s utility led benchmark program in the Financial Year 2013/2014 and with growing of participation of the utilities reaching 28 WSPs, plans are underway to accommodate all interested (voluntary) WSPs in coming years, WASPA is making heady steps to improve the capacity of the secretariat to manage the processes especially those of data management (collection, analysis & presentation) and to be able to provide need – based and targeted support to the WSPs to enhance their performance improvement agenda. This will include Support in use of NRW reduction equipment available within the Association, In house and on the field trainings on identified topics, Facilitation of technical task group activities bringing together WSPs participating in the peer learning curve, WSPs will fully finance (through - WASREB has allowed for tariff approvals) PIP implementation costs as well participation charges for those WSPs continuing in the peer to peer benchmark program. WASPA aims at continuing to mobilize for necessary technical assistance from lead implementing partners among them VEI, SNV and KEWI especially under the auspices of ‘Performance Enhancement of Water Utilities in Kenya (PEWAK) through benchmarking, collective learning and innovative financing (RVO), It is forecast that 25 participating WSPs will show better than average performance (i.e. NRW), including a sales increase of 15% and improved service levels (i.e. Low Income Community focus), WASPA will be investing in pro – poor support to WSPs. Accelerated improvement in (Low Income Community) water and sanitation services to Low Income Areas households, with access strategies developed for at least 750,000 people',
            image: 'https://raw.githubusercontent.com/geoffreykirui/geoffreykirui.github.io/main/images/deblois.png',
            location: {
              center: [37.44270, 0.46336],
              zoom: 5.25,
              pitch: 4.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier24',
            alignment: 'right',
            hidden: false,
            title: 'Embu Water receiving an award for introducing SMS billing to the sector – hereby improving billing reliability, collection (financial gain) and consumer convenience',
            //description: 'Following successful actualization of the WASPA’s utility led benchmark program in the Financial Year 2013/2014 and with growing of participation of the utilities reaching 28 WSPs, plans are underway to accommodate all interested (voluntary) WSPs in coming years, WASPA is making heady steps to improve the capacity of the secretariat to manage the processes especially those of data management (collection, analysis & presentation) and to be able to provide need – based and targeted support to the WSPs to enhance their performance improvement agenda. This will include Support in use of NRW reduction equipment available within the Association, In house and on the field trainings on identified topics, Facilitation of technical task group activities bringing together WSPs participating in the peer learning curve, WSPs will fully finance (through - WASREB has allowed for tariff approvals) PIP implementation costs as well participation charges for those WSPs continuing in the peer to peer benchmark program. WASPA aims at continuing to mobilize for necessary technical assistance from lead implementing partners among them VEI, SNV and KEWI especially under the auspices of ‘Performance Enhancement of Water Utilities in Kenya (PEWAK) through benchmarking, collective learning and innovative financing (RVO), It is forecast that 25 participating WSPs will show better than average performance (i.e. NRW), including a sales increase of 15% and improved service levels (i.e. Low Income Community focus), WASPA will be investing in pro – poor support to WSPs. Accelerated improvement in (Low Income Community) water and sanitation services to Low Income Areas households, with access strategies developed for at least 750,000 people',
            image: 'https://raw.githubusercontent.com/geoffreykirui/geoffreykirui.github.io/main/images/embu.png',
            location: {
              center: [37.44270, 0.46336],
              zoom: 5.25,
              pitch: 4.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier15',
            alignment: 'left',
            hidden: false,
            title: 'Kakamega Busia receiving an award for the extemporary contributions towards engaging local community in aPublic Private Community Partnership for sustainably managed water systems from Harm Duiker (Country Director, SNV, Kenya)',
            //description: 'Following successful actualization of the WASPA’s utility led benchmark program in the Financial Year 2013/2014 and with growing of participation of the utilities reaching 28 WSPs, plans are underway to accommodate all interested (voluntary) WSPs in coming years, WASPA is making heady steps to improve the capacity of the secretariat to manage the processes especially those of data management (collection, analysis & presentation) and to be able to provide need – based and targeted support to the WSPs to enhance their performance improvement agenda. This will include Support in use of NRW reduction equipment available within the Association, In house and on the field trainings on identified topics, Facilitation of technical task group activities bringing together WSPs participating in the peer learning curve, WSPs will fully finance (through - WASREB has allowed for tariff approvals) PIP implementation costs as well participation charges for those WSPs continuing in the peer to peer benchmark program. WASPA aims at continuing to mobilize for necessary technical assistance from lead implementing partners among them VEI, SNV and KEWI especially under the auspices of ‘Performance Enhancement of Water Utilities in Kenya (PEWAK) through benchmarking, collective learning and innovative financing (RVO), It is forecast that 25 participating WSPs will show better than average performance (i.e. NRW), including a sales increase of 15% and improved service levels (i.e. Low Income Community focus), WASPA will be investing in pro – poor support to WSPs. Accelerated improvement in (Low Income Community) water and sanitation services to Low Income Areas households, with access strategies developed for at least 750,000 people',
            
            image: 'https://raw.githubusercontent.com/geoffreykirui/geoffreykirui.github.io/main/images/kakamega.png',
            location: {
              center: [37.44270, 0.46336],
              zoom: 5.25,
              pitch: 4.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier16',
            alignment: 'full',
            hidden: false,
            title: 'Special thanks',
            description: 'On behalf of the Executive Board, the Secretariat and all Members, the WASPA Chairman, wishes to thank all the WSPs who prepared to make their sharing during good practices dissemination workshop. Inevitably this would not have been a success without the active participation of other members (both WSPs and other) who attended the workshop. Special appreciation is also extended to the program’s implementing partners who provided technical and financial resources to develop the program that is currently anchored in the WASPA Strategic Plan 2013 – 2017. The European Union, Vitens Evides International, SNV Kenya, KEWI, GIZ as well as WASREB have been very close to the heart of the program. It is our hope that this product/service will be facilitated to benefit all the WSPs now and in the future. ',
            //image: 'E:/Software/storytelling-main/storytelling-main/src/images/kakamega.png',
            location: {
              center: [37.44270, 0.46336],
              zoom: 5.25,
              pitch: 4.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }

    ]

};
