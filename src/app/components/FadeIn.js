import React, { createContext, useContext } from 'react'
import {motion} from 'framer-motion'

const FadeInStaggerContext = createContext(false);
const viewport = {once:true,margin:'0px 0px -200px'}

const FadeIn = (props) => {

    const isInStaggerGroup = useContext(FadeInStaggerContext)

  return (
    <motion.div
        variants={{
            hidden:{opacity:0,y:20}, 
            visible:{opacity:1,y:0}
        }}
        transition={{duration:0.5}}
        {...(isInStaggerGroup ? {}:{
            initial:'hidden',
            whileInView:'visible',
            viewport,
        })}
            {...props}
        ></motion.div>
  )
}

export default FadeIn


// ---------------------------------------

export const FadeInStagger = ({faster = false, ...props}) => {
  return (
    <FadeInStaggerContext.Provider value = {true}>
        <motion.div
            initial = 'hidden'
            whileInView = 'visible'
            viewport={viewport}
            transition={{staggerChildren:faster ? 0.12 : 0.2}}
            {...props}

        />
    </FadeInStaggerContext.Provider>
  )
}



// Framer Motionのmotion.div（および他のmotion要素）で使用されるvariantsは、複数のアニメーション状態を事前に定義し、それらをコンポーネントに適用するための機能です。variantsを使用することで、コードの可読性と再利用性を向上させることができます。

// 基本的な機能
// 状態の定義: variantsは、特定のアニメーション状態（例えば、表示/非表示、アクティブ/非アクティブなど）に対応するスタイルとアニメーションのプロパティを格納します。

// コードの再利用: 同じアニメーションを複数のコンポーネントで使用する場合、variantsを定義して再利用することで、コードの重複を避けることができます。

// シンプルなアニメーションのトリガー: コンポーネントのanimate、initial、exitプロパティを使用して、variants内の特定の状態をトリガーできます。

// variantsの使用例
// javascript
// Copy code
// const boxVariants = {
//   hidden: { opacity: 0, x: -100 },
//   visible: { opacity: 1, x: 0 },
// };

// <motion.div
//   initial="hidden"
//   animate="visible"
//   variants={boxVariants}
// >
//   アニメーションするボックス
// </motion.div>
// この例では、boxVariantsオブジェクトにhiddenとvisibleの二つの状態が定義されています。motion.divは初期状態（initial）としてhiddenを使用し、その後visible状態にアニメーションします。

// オーケストレーション
// variantsは、複数のアニメーション要素を同期させる際にも便利です。親要素のvariantsが変更されると、子要素のvariantsも自動的に更新されます。これにより、複雑なアニメーションシーケンスを簡単に管理できます。