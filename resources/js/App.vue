<template>
    <div>
        yyy
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                storeCatTest: {
                    slug: 'lol kek cheburek',
                    name: 'lol kek cheburek',
                    description: 'lol kek cheburek',
                    thumbnail: null,
                    parent_id: null
                },
                updateCatTest: {
                    slug: 'lol kek',
                    name: 'lol kek',
                    description: 'lol kek',
                    thumbnail: null,
                    parent_id: null
                },
                storeAttrTest: {
                    // id: 1,
                    slug: 'test test',
                    name: 'test test',
                    type_id: 1,
                    category_id: 1,
                    values: [
                        {
                            value: 'test test',
                            label: 'test test'
                        },
                        {
                            value: 'test test2',
                            label: 'test test2'
                        }
                    ]
                }
            }
        },
        computed: {
            ...mapGetters({
                categories: 'categories/list',
                category: 'categories/item',
                attributes: 'attributes/list',
                attribute: 'attributes/item'
            })
        },
        methods: {
            ...mapActions({
                categoriesIndex: 'categories/index',
                categoriesShow: 'categories/show',
                categoriesStore: 'categories/store',
                categoriesUpdate: 'categories/update',
                categoriesDestroy: 'categories/destroy',
                attributesIndex: 'attributes/index',
                attributesShow: 'attributes/show',
                attributesStore: 'attributes/store'
            })
        },
        created() {
            this.categoriesIndex()
            this.attributesIndex()
            // this.attributesStore(this.storeAttrTest)
            // this.categoriesUpdate(3, this.updateCatTest)
            // this.categoriesDestroy(29)
            // this.categoriesStore(this.storeCatTest)
            // this.attributesShow(3)
            // this.categoriesShow(3)

            // console.log(this.category)
            console.log(this.categories)
            console.log(this.attributes)
        }
    }
</script>

<style>

</style>