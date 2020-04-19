/**
 * 一次性全部引入所有svg文件
 *
 * @format
 */

const requireAll = requireContext => requireContext.keys().map(requireContext)
try {
  requireAll(require.context('./', false, /.svg$/))
} catch (err) {
  // console.log(err)
}
