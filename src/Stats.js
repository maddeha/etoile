import { data } from './data';
import logo from './etoile.png';
  
export default function Stats() {

    function calculateTotalAmount() {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data[i].amount;
        }
        return total;
    }

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-gray-600">حصيلة المساهمات</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            <span className="text-lg">
                                دينار
                            </span>
                            {calculateTotalAmount()}
                        </dd>
                    </div>
                    <img className="mx-auto max-w-xs" src={logo} />
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-gray-600">عدد المساهمين</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            {data.length}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}