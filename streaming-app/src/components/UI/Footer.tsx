import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.padding}>
        <div className={classes['links-container']}>
          <p className={classes.links}>
            Home | Terms and Conditions | Privacy Policy | Collection Statement
            | Help | Manage Account
          </p>
        </div>
        <p className={classes.copyright}>
          Copyright <>&copy;</> 2016 DEMO Streaming. All Rights Reserved.
        </p>
        <div className={classes['buttons-container']}>
          <div className={classes['buttons-sub-container']}>
            <img
              className={classes.social}
              src="./assets/social/facebook-white.svg"
              alt="facebook"
            />
            <img
              className={classes.social}
              src="./assets/social/twitter-white.svg"
              alt="twitter"
            />
            <img
              className={classes.social}
              src="./assets/social/instagram-white.svg"
              alt="instagram"
            />
          </div>
          <div className={classes['buttons-sub-container']}>
            <img
              className={classes.store}
              src="./assets/store/app-store.svg"
              alt="app-store"
            />
            <img
              className={classes.store}
              src="./assets/store/play-store.svg"
              alt="play-store"
            />

            <img
              className={classes.store}
              src="./assets/store/windows-store.svg"
              alt="windows-store"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
