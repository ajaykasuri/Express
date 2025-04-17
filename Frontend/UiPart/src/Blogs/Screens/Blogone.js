import React, { useState, useEffect, useRef } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styles from '../Styles/Blogone.module.css';
 
const Blogone = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
 
  const data = [
    {
      id: 1,
      imgSrc: "https://media.istockphoto.com/id/1800292591/photo/sql-structured-query-language-technology-concept-icon-virtual-screen.jpg?s=612x612&w=0&k=20&c=Natt2t_aFsr-KlPiMMQUPKIX6sbDb2hOTRhUFcSq6cA=",
      altText: "SQL Concept",
      title: "SQL Indexes | Types of indexes | Creating an Index | Dropping an Index | OLAP | LOCKS | Basics of Oracle SQL | SQL",
      para: `INDEXES
 
            What is an Index?
 
            An index is a schema object.
            Is used by the Oracle server to speed up the retrieval of rows by using a pointer.
            Can reduce disk I/O by using a rapid path access method to locate data quickly.
            Is independent of the table it indexes.
            Is used and maintained automatically by the Oracle server.
            Note: When you drop a table, corresponding indexes are also dropped.`,
    },
    {
      id: 2,
      imgSrc: "https://cdn.slidesharecdn.com/ss_thumbnails/listagg-140629111120-phpapp02-thumbnail.jpg?width=640&height=640&fit=bounds",
      altText: "SQL LISTAGG Concept",
      title: "LISTAGG Function | Basics of Oracle SQL | Oracle SQL | SQL",
      para: `Listagg
 
            What is the Listagg?
 
            The LISTAGG function is used to aggregate a set of string values within a group into a single string by appending the string-expression values based on the order specified in the 'WITHIN GROUP' clause.
 
            As a single-set aggregate function, LISTAGG operates on all rows and returns a single output row.`,
    },
    {
      id: 3,
      imgSrc: "https://dce0qyjkutl4h.cloudfront.net/wp-content/webp-express/webp-images/uploads/2021/08/React-Native.png.webp",
      altText: "React Native Concept",
      title: "What is React Native? | Build Mobile Apps | Cross-platform Development",
      para: `React Native is an open-source framework developed by Facebook for building mobile apps using JavaScript and React.
 
Key Features of React Native:
- Cross-Platform: Use a single codebase to build apps for both Android and iOS.
- Native Performance: Uses native components under the hood for better performance.
- Hot Reloading: See the changes instantly while developing.
- Large Community: Backed by Facebook and a strong developer community.
 `,
    },
    {
      id: 4,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dGhozId-US3FJ5G2tEv_RACjh7xJrpxRqQ&s",
      altText: "SQL Views Concept",
      title: "SQL Views | Types Of Views | Simple View | Complex View | Materialized View | Inline View",
      para: `Sequences
 
            What is a View?
 
        A view is a logical table based on a table or another view.4
        A view contains no data of its own but is like a window through which data from tables can          be viewed or changed.
        The tables on which a view is based are called base tables. The view is stored as a SELECT                 statement in the data dictionary.
        We can present logical subsets or combinations of data by creating views of tables.`,
    },
    {
      id: 5,
      imgSrc: "https://cdn.educba.com/academy/wp-content/uploads/2019/11/Oracle-Clauses.jpg",
      altText: "SQL Clauses Concept",
      title: "SQL Clauses | Group By Clause | Having Clause | Order By Clause | Distinct Clause | With Clause | Asc | Desc | Oracle SQL | SQL",
      para: `Clauses
 
            Clauses:
 
    •       Group by Clause
    •       Having Clause
    •       Order by Clause
    •       Distinct Clause
    •       With Clause
    Syntax:
 
    SELECT DISTINCT column1, column2
    FROM table_name
    WHERE conditions
    GROUP BY column1, column2
    HAVING conditions
    ORDER BY column1, column2;  `,
    },
    {
      id: 7,
      imgSrc: "https://kinsta.com/wp-content/uploads/2022/06/what-is-react-js-feature-image-1024x512.png",
      altText: "ReactJS Concept",
      title: "What is ReactJS? | Features | Virtual DOM | Component-Based Architecture",
      para: `ReactJS is a JavaScript library developed by Facebook for building fast, interactive user interfaces for web applications.
It uses a virtual DOM to improve performance by updating only the parts of the page that changed.
 
Key Features of ReactJS:
- Component-Based: Build encapsulated components that manage their own state.
- Virtual DOM: Improves performance by minimizing direct interactions with the real DOM.
- JSX: JavaScript syntax extension that looks like HTML.
- Unidirectional Data Flow: Data flows in a single direction, making it easier to debug.`,
    },
  ];
 
  const handleCardClick = (item) => {
    setSelectedCard(item);
    setCurrentIndex(data.findIndex((d) => d.id === item.id));
  };
 
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % data.length;
        if (containerRef.current) {
          containerRef.current.scrollLeft = nextIndex * 240; // 220px width + 20px margin
        }
        return nextIndex;
      });
    }, 3000); // Adjust timing as needed
    return () => clearInterval(interval);
  }, [isPaused]);
 
  useEffect(() => {
    setSelectedCard(data[currentIndex]);
  }, [currentIndex]);
 
  const spinnerWrapperStyle = (isHovered) => ({
    display: isHovered ? 'block' : 'none',
    textAlign: 'center',
    margin: '-45px',
  });
 
  const cardHoveredStyle = {
    color: 'rgb(20, 7, 200)',
  };
 
  const cardStyle = {
    color: 'black',
  };
 
  return (
    <>
      <h4 className={styles.titleb}>Blogs and Insights</h4>
      <div className={styles.divContainer}>
        <div className={styles.mainCard}>
          {selectedCard ? (
            <>
              <img src={selectedCard.imgSrc} alt={selectedCard.altText} className={styles.imgConMain} />
              <p className={styles.mainTitle}>{selectedCard.title}</p>
              <span className={styles.mainPara}>{selectedCard.para}</span>
              <div className={styles.moreDiv}>
                <p className={styles.more}>Learn More</p>
              </div>
            </>
          ) : (
            <p className={styles.placeholder}>Click on a card to display its content</p>
          )}
        </div>
 
        <div
          className={styles.container}
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {data.map((item, index) => (
            <div
              className={`${styles.card} ${index === currentIndex ? styles.active : ''}`}
              key={item.id}
              onClick={() => handleCardClick(item)}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img src={item.imgSrc} alt={item.altText} className={styles.imgCon} />
              <p
                className={styles.title}
                style={{
                  ...cardStyle,
                  ...(hoveredCard === item.id ? cardHoveredStyle : {}),
                }}
              >
                {item.title}
                <div style={spinnerWrapperStyle(hoveredCard === item.id)}>
                  <Spinner animation="grow" variant="primary" size="xl" />
                </div>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.dots}>
        {data.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </>
  );
};
 
export default Blogone;