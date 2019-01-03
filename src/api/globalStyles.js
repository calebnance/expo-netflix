import colors from './colors';

export default {
  container: {
    backgroundColor: colors.bgGrey,
    flex: 1
  },
  centerItems: {
    alignItems: 'center'
  },
  flexRow: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  flexRowSpace: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btn: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 24,
    height: 46,
    justifyContent: 'center',
    marginBottom: 8
  },
  btnText: {
    color: colors.black,
    fontSize: 16
  },
  btnPrimary: {
    backgroundColor: colors.brandPrimary,
    borderColor: colors.brandPrimary
  },
  btnPrimaryText: {
    color: colors.white
  },
  heading: {
    color: colors.heading,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 22
  },
  paragraph: {
    color: colors.black
  },
  spacer24: {
    height: 24,
    width: '100%'
  },
  mB8: {
    marginBottom: 8
  },
  mR8: {
    marginRight: 8
  },
  mR16: {
    marginRight: 16
  },
  mV16: {
    marginVertical: 16
  },
  mV24: {
    marginVertical: 24
  },
  mV32: {
    marginVertical: 32
  },
  p8: {
    padding: 8
  },
  p16: {
    padding: 16
  },
  pH8: {
    paddingHorizontal: 8
  },
  pH16: {
    paddingHorizontal: 16
  }
};
