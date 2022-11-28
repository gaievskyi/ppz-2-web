export const Newsletter: React.FC = () => {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        gap: '3em',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <h1
          style={{
            lineHeight: 0
          }}
        >
          Subscribe our newsletter
        </h1>
        <p
          style={{
            lineHeight: 0
          }}
        >
          to receive the best offers.
        </p>
      </div>
      <form>
        <input
          type="email"
          name="newsletter"
          id="newsletter"
          placeholder="example@email.com"
          style={{
            border: '1px solid #d1d1d1',
            borderBottomLeftRadius: '1em',
            borderBottomRightRadius: 0,
            borderTopLeftRadius: '1em',
            borderTopRightRadius: 0,
            padding: '1em'
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#FFE102',
            border: '1px solid #d1d1d1',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: '1em',
            borderTopLeftRadius: 0,
            borderTopRightRadius: '1em',
            marginLeft: '-1px',
            padding: '1em'
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}
