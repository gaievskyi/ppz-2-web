export const OfferCard: React.FC = () => (
  <div
    style={{
      alignItems: 'center',
      backgroundImage:
        'linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.8)), url(dog.png)',
      backgroundSize: 'cover',
      borderRadius: '1em',
      display: 'flex',
      flex: '0 1 49%',
      height: '100%',
      justifyContent: 'center',
      minHeight: '500px',
      transition: 'all .5s ease',
      width: '100%'
    }}
  >
    <button
      style={{
        backgroundColor: '#FFE102',
        border: 'none',
        borderRadius: '1em',
        cursor: 'pointer',
        fontSize: '0.8em',
        letterSpacing: '1px',
        maxWidth: '300px',
        padding: '0.4em 2em',
        textTransform: 'uppercase'
      }}
    >
      Explore
    </button>
  </div>
)
