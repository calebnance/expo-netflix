import colors from './colors';
import fonts from './fonts';

// define space grid
// /////////////////////////////////////////////////////////////////////////////
// some people use 8pt grid, some 5pt
// this is setting one place then done
const spaceGrid = 8;

const spaceHalf = Math.ceil(spaceGrid / 2);
const space1 = spaceGrid;
const space2 = spaceGrid * 2;
const space3 = spaceGrid * 3;
const space4 = spaceGrid * 4;
const space8 = spaceGrid * 8;
const space12 = spaceGrid * 12;
const space16 = spaceGrid * 16;

export default {
  activeOpacity: 0.7,

  // containers
  // ///////////////////////////////////////////////////////////////////////////
  container: {
    backgroundColor: colors.bgGrey,
    flex: 1
  },

  // flex
  // ///////////////////////////////////////////////////////////////////////////
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },
  flex5: { flex: 5 },

  flexAlignCenter: {
    alignItems: 'center'
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexRowAlignCenter: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  flexRowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flexRowSpace: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  // margin
  // ///////////////////////////////////////////////////////////////////////////
  mB1: { marginBottom: space1 },
  mB2: { marginBottom: space2 },
  mH1: { marginHorizontal: space1 },
  mH2: { marginHorizontal: space2 },
  mL1: { marginLeft: space1 },
  mL2: { marginLeft: space2 },
  mR1: { marginRight: space1 },
  mR2: { marginRight: space2 },
  mT1: { marginTop: space1 },
  mT2: { marginTop: space2 },
  mTHalf: { marginTop: spaceHalf },
  mV1: { marginVertical: space1 },
  mV2: { marginVertical: space2 },

  // padding
  // ///////////////////////////////////////////////////////////////////////////
  pB1: { paddingBottom: space1 },
  pB2: { paddingBottom: space2 },
  pHHalf: { paddingHorizontal: spaceHalf },
  pH1: { paddingHorizontal: space1 },
  pH2: { paddingHorizontal: space2 },
  pL1: { paddingLeft: space1 },
  pL2: { paddingLeft: space2 },
  pR1: { paddingRight: space1 },
  pR2: { paddingRight: space2 },
  pT1: { paddingTop: space1 },
  pT2: { paddingTop: space2 },
  pTHalf: { paddingTop: spaceHalf },
  pV1: { paddingVertical: space1 },
  pV2: { paddingVertical: space2 },

  // spacers
  // ///////////////////////////////////////////////////////////////////////////
  spacer1: { height: space1 },
  spacer2: { height: space2 },
  spacer3: { height: space3 },
  spacer4: { height: space4 },
  spacer8: { height: space8 },
  spacer12: { height: space12 },
  spacer16: { height: space16 },

  // text
  // ///////////////////////////////////////////////////////////////////////////
  heading: {
    color: colors.heading,
    fontFamily: fonts.medium,
    fontSize: 22,
    marginBottom: 4,
    marginLeft: 4,
    marginTop: 16
  },

  // nav tab
  // ///////////////////////////////////////////////////////////////////////////
  navTabStyle: {
    backgroundColor: colors.black,
    borderTopColor: colors.black
  }
};
