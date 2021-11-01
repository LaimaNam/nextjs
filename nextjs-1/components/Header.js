import headerStyles from '../styles/Header.module.css';

const Header = () => {
  const x = 2;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Webdev</span> news
      </h1>
      <p className={headerStyles.description}>
        {' '}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam velit
        blanditiis ut perspiciatis adipisci aut labore omnis libero earum nisi
        consequuntur ipsa aperiam esse, sit iste neque. Consequuntur, culpa
        esse! Quisquam, necessitatibus. Aut, nam quis fugit explicabo dolores
        magnam asperiores accusamus in cumque ex iste laborum quod nihil totam
        repellendus enim dolorem sed repellat? Eos expedita quod perferendis
        ipsa blanditiis?
      </p>
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? 'red' : 'blue'};
          }
        `}
      </style> */}
    </div>
  );
};

export default Header;
